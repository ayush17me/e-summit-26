import { useState, useEffect } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import { ArrowRight, FileText } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";
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
      style={{ x: springX, y: springY }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};

const CountdownBox = ({ value }: { value: number }) => (
  <div className="text-center">
    <div className="text-2xl sm:text-3xl md:text-5xl font-bold text-primary">
      {String(value).padStart(2, "0")}
    </div>
  </div>
);

const Hero = () => {
  const { days, hours, mins, secs } = useCountdown();

  /* 🎯 Mouse Parallax */
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const move = (e: any) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  };

  const rotateX = useTransform(mouseY, [0, 800], [10, -10]);
  const rotateY = useTransform(mouseX, [0, 1200], [-10, 10]);

  return (
    <section
      onMouseMove={move}
      className="relative min-h-screen flex items-center overflow-hidden px-4 py-24 sm:py-28 md:py-0"
    >
           
      {/* 🌊 Animated Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-[#050510] to-black animate-[pulse_8s_ease-in-out_infinite]" />

      {/* ⚡ Neural glow lines */}
      <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,rgba(0,255,255,0.15),transparent_60%)]" />

      {/* PARTICLES */}
      <ParticleCanvas />

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:60px_60px]" />

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
            className="text-2xl sm:text-4xl md:text-7xl font-extrabold leading-tight"
          >
            <div className="mt-12">
            <div className="relative inline-block">
               <img src={logo} className="relative w-56 md:w-72 lg:w-80 max-w-full mx-auto lg:mx-0" />
            </div>
          </div>
            <h3 className=" text-xl sm:text-2xl bg-gradient-to-r from-primary via-white to-secondary bg-clip-text text-transparent">
              No Noise,
            </h3>
            <h3 className=" text-2xl sm:text-3xl text-white">Just Entrepreneurship</h3>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="mt-6 text-lg text-muted-foreground max-w-xl"
          >
            Organised By Entrepreneurship Development Cell.
          </motion.p>

          {/* CTA */}
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <MagneticButton>
              <a className="px-5 py-2.5 sm:px-8 sm:py-4 rounded-xl bg-gradient-to-r from-primary to-secondary text-white font-semibold text-sm sm:text-base flex items-center gap-2 shadow-2xl w-full sm:w-auto justify-center">
                Explore Events <ArrowRight />
              </a>
            </MagneticButton>

            <MagneticButton>
              <a className="px-5 py-2.5 sm:px-8 sm:py-4 rounded-xl border border-white/20 backdrop-blur-xl hover:bg-white/10 flex items-center gap-2 w-full sm:w-auto justify-center text-sm sm:text-base">
                <FileText /> Brochure
              </a>
            </MagneticButton>
          </div>

          {/* LOGO FIX */}
          
        </div>

        {/* RIGHT */}
        <div className="relative flex justify-center">

          {/* ROTATING ENERGY RING */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
            className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] border border-primary/20 rounded-full"
          />

          {/* COUNTDOWN */}
          <div className="relative backdrop-blur-2xl bg-white/5 border border-white/10 rounded-3xl p-6 sm:p-10 shadow-[0_0_60px_rgba(0,0,0,0.6)]">

            <h3 className="text-center text-primary tracking-widest mb-6">
              LAUNCHING IN
            </h3>

            <div className="flex gap-4 justify-center">
              <CountdownBox value={days} />
              <CountdownBox value={hours} />
              <CountdownBox value={mins} />
              <CountdownBox value={secs} />
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