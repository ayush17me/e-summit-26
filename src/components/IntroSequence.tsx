import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const [isVideoFinished, setIsVideoFinished] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // If the user has already seen the intro in this session, skip immediately
    const hasPlayed = sessionStorage.getItem("esummit_intro_played");
    if (hasPlayed) {
      onComplete();
      return;
    }

    // Try to force play if browser didn't autoplay
    const playVideo = async () => {
      if (videoRef.current) {
        try {
          await videoRef.current.play();
        } catch (error) {
          console.error("Autoplay failed:", error);
          // If autoplay completely fails, we might just want to skip or show a button.
          // For now, we'll wait for user interaction if it fails.
        }
      }
    };
    
    // We add a slight delay to ensure the video has time to load slightly
    setTimeout(playVideo, 100);
  }, [onComplete]);

  const handleTimeUpdate = () => {
    if (!videoRef.current) return;
    
    // Morph transition trigger
    const remainingTime = videoRef.current.duration - videoRef.current.currentTime;
    if (remainingTime < 1.0 && !isVideoFinished) { // Start fading out 1 second before end
      setIsVideoFinished(true);
      sessionStorage.setItem("esummit_intro_played", "true");
      // Trigger the completion callback after the fade-out animation completes
      setTimeout(() => {
        onComplete();
      }, 800); // 0.8s matches the framer-motion exit duration
    }
  };

  const handleEnded = () => {
    if (!isVideoFinished) {
      setIsVideoFinished(true);
      sessionStorage.setItem("esummit_intro_played", "true");
      onComplete();
    }
  };

  const handleLoadedMetadata = () => {
    // No longer manipulating playback rate for the new video
  };

  return (
    <AnimatePresence>
      {!isVideoFinished && (
        <motion.div
          initial={{ opacity: 1, filter: "brightness(1) blur(0px)", scale: 1 }}
          exit={{ 
            opacity: 0, 
            filter: "brightness(3) blur(20px)", 
            scale: 2 
          }}
          transition={{ duration: 0.8, ease: "easeIn" }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black overflow-hidden pointer-events-none"
        >
          <video
            ref={videoRef}
            src="https://res.cloudinary.com/diq6oo9ue/video/upload/q_auto/f_auto/v1776027871/shard-reference_roomlc.mp4"
            /* Increased scale to push corner watermarks out of the viewport */
            className="w-full h-full object-cover scale-[1.08] origin-center"
            autoPlay
            muted
            playsInline
            onTimeUpdate={handleTimeUpdate}
            onEnded={handleEnded}
            onLoadedMetadata={handleLoadedMetadata}
          />
          {/* Subtle gradient overlay at bottom right corner just in case scale isn't enough */}
          <div className="absolute bottom-0 right-0 w-32 md:w-48 h-20 bg-gradient-to-tl from-black via-black/80 to-transparent pointer-events-none" />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
