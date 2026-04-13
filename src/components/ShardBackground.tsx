import { useEffect, useRef } from "react";

export default function ShardBackground() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Browsers often suspend video playback when the tab loses focus to save resources.
    // This explicitly tells the video to resume playing when the user returns to the tab.
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible" && videoRef.current) {
        videoRef.current.play().catch(console.error);
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    // Initial play attempt just in case autoplay is blocked initially
    if (videoRef.current) {
      videoRef.current.play().catch(console.error);
    }

    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return (
    <div className="absolute inset-0 z-0 bg-[#020617] overflow-hidden blur-sm">
      <video
        ref={videoRef}
        autoPlay
        loop
        muted
        playsInline
        /* Increased scale to push corner watermarks out of the viewport */
        className="w-full h-full object-cover scale-[1.08] origin-center opacity-80"
      >
        <source src="https://res.cloudinary.com/diq6oo9ue/video/upload/q_auto/f_auto/v1776027871/shard-reference_roomlc.mp4" type="video/mp4" />
      </video>

      {/* Fallback dark overlay to ensure text is readable over the bright video core */}
      <div className="absolute inset-0 bg-black/30 mix-blend-multiply pointer-events-none" />

      {/* Subtle gradient overlay at bottom right corner just in case scale isn't enough to hide watermark */}
      <div className="absolute bottom-0 right-0 w-32 md:w-48 h-20 bg-gradient-to-tl from-[#020617] via-[#020617]/80 to-transparent pointer-events-none z-10" />
    </div>
  );
}
