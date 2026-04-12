import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import { Link } from "react-router-dom";
import ShardBackground from "@/components/ShardBackground";
import logo from "@/assets/logo-esumm1.png";

const TARGET_DATE = new Date("2026-04-18T00:00:00").getTime();

const useCountdown = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    mins: 0,
    secs: 0,
  });

  useEffect(() => {
    const calc = () => {
      const diff = Math.max(0, TARGET_DATE - Date.now());
      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        mins: Math.floor((diff / (1000 * 60)) % 60),
        secs: Math.floor((diff / 1000) % 60),
      });
    };

    calc();
    const id = setInterval(calc, 1000);
    return () => clearInterval(id);
  }, []);

  return timeLeft;
};

/* 🧲 Magnetic Button */
const MagneticButton = ({ children }: any) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 12 });
  const springY = useSpring(y, { stiffness: 150, damping: 12 });

  const handleMouseMove = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    x.set((e.clientX - rect.left - rect.width / 2) * 0.3);
    y.set((e.clientY - rect.top - rect.height / 2) * 0.3);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={reset}
      whileHover={{ scale: 1.02 }}
      style={{ x: springX, y: springY }}
      className="inline-block z-20 relative"
    >
      {children}
    </motion.div>
  );
};

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <div className="text-center">
    <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-white drop-shadow-[0_0_15px_rgba(168,85,247,0.4)]">
      {String(value).padStart(2, "0")}
    </div>
    <div className="text-[9px] md:text-[10px] text-purple-200 uppercase tracking-widest mt-1 opacity-70">
      {label}
    </div>
  </div>
);

const Separator = () => (
  <div className="text-xl md:text-3xl text-purple-400 font-bold opacity-40 mt-[-1rem] md:mt-[-1.5rem]">
    :
  </div>
);

const Hero = () => {
  const { days, hours, mins, secs } = useCountdown();

  /* 🎯 Mouse Parallax & Spotlight */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const move = (e: any) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const rotateX = useTransform(mouseY, [0, 800], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1200], [-10, 10]);

  const spotlightX = useTransform(mouseX, (x) => x - 400);
  const spotlightY = useTransform(mouseY, (y) => y - 400);

  return (
    <section
      onMouseMove={move}
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-24 sm:py-28 md:py-0"
    >
           
      {/* 3D SHARD BACKGROUND */}
      <ShardBackground />

      <motion.div
        style={{ rotateX, rotateY }}
        className="relative z-10 max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center"
      >
        {/* LEFT */}
        <div className="text-center lg:text-left">

          {/* HEADLINE */}
          <motion.h1
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl sm:text-6xl md:text-8xl font-extrabold leading-tight tracking-tight flex flex-col items-center lg:items-start"
          >
            <div className="mt-8 mb-4 relative w-80 md:w-[26rem] lg:w-[500px] max-w-full">
               {/* Ambient glow effect behind the logo to make it pop */}
               <div className="absolute inset-0 bg-purple-500/30 blur-[60px] rounded-full -z-10 scale-110" />
               <img 
                 src={logo} 
                 className="w-full h-auto drop-shadow-[0_0_30px_rgba(168,85,247,0.9)] brightness-125 contrast-110" 
                 alt="Scintillations E-Summit 2026 Logo" 
               />
            </div>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-4 text-xl sm:text-3xl font-bold max-w-2xl mx-auto lg:mx-0 bg-gradient-to-r from-purple-200 via-purple-100 to-purple-300 bg-clip-text text-transparent drop-shadow-[0_0_10px_rgba(168,85,247,0.3)]"
          >
            Where Ideas Explode Into Reality
          </motion.p>
          
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mt-6 text-sm sm:text-base text-purple-200/60 max-w-xl mx-auto lg:mx-0 font-light tracking-wide uppercase"
          >
            Organised By Entrepreneurship Development Cell, IIEST Shibpur
          </motion.p>

          {/* CTA */}
          <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center lg:justify-start">
            <MagneticButton>
              <Link to="/networking" className="px-8 py-4 sm:px-10 sm:py-5 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-500 hover:to-primary transition-all duration-500 text-white font-bold text-lg sm:text-xl flex items-center gap-3 shadow-[0_0_30px_rgba(168,85,247,0.6)] w-full sm:w-auto justify-center uppercase tracking-wide">
                Register Now <ArrowRight size={24} />
              </Link>
            </MagneticButton>

            <MagneticButton>
              <a 
                href="https://drive.google.com/file/d/1bVsGNAGmtyfXE9KeARTVpyecteWLZq9e/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 sm:px-10 sm:py-5 rounded-full border-2 border-white/20 backdrop-blur-md hover:bg-white/10 hover:border-white/40 flex items-center gap-3 w-full sm:w-auto justify-center text-lg sm:text-xl font-medium transition-all duration-300 text-white/90"
              >
                <FileText size={24} /> Brochure
              </a>
            </MagneticButton>
          </div>
          
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center items-center pointer-events-none pt-20 lg:pt-0">

          {/* COUNTDOWN */}
          <div 
            className="relative z-20 pointer-events-auto rounded-[32px] p-5 sm:p-8 scale-90 sm:scale-100"
            style={{
              background: 'rgba(15, 23, 42, 0.4)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              border: '1px solid rgba(168, 85, 247, 0.2)',
              boxShadow: '0 20px 40px -12px rgba(0, 0, 0, 0.8)',
            }}
          >

            <h3 className="text-center text-purple-300 tracking-[0.3em] font-medium text-[10px] md:text-xs mb-6 opacity-80">
              LAUNCHING IN
            </h3>

            <div className="flex gap-2 sm:gap-4 md:gap-5 justify-center items-center">
              <CountdownBox value={days} label="Days" />
              <Separator />
              <CountdownBox value={hours} label="Hours" />
              <Separator />
              <CountdownBox value={mins} label="Mins" />
              <Separator />
              <CountdownBox value={secs} label="Secs" />
            </div>
          </div>

          {/* FLOATING GLASS CARDS */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ repeat: Infinity, duration: 5 }}
            className="hidden sm:block absolute -top-4 sm:-top-10 -left-4 sm:-left-10 bg-white/5 backdrop-blur-xl p-3 sm:p-4 rounded-xl border border-white/10 text-sm sm:text-base z-10"
          >
            🚀 Speakers
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ repeat: Infinity, duration: 6 }}
            className="hidden sm:block absolute bottom-0 -right-4 sm:-right-10 bg-white/5 backdrop-blur-xl p-3 sm:p-4 rounded-xl border border-white/10 text-sm sm:text-base z-10"
          >
            🎯 Competitions
          </motion.div>
        </div>
      </motion.div>

      {/* SCROLL INDICATOR */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2">
        <div className="w-[2px] h-14 bg-white/20 relative overflow-hidden">
          <div className="absolute w-full h-5 bg-white animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;