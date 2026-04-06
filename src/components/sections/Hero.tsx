import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
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

const CountdownBox = ({ value, label }: { value: number; label: string }) => (
  <div className="flex flex-col items-center">
    <div className="glass-strong rounded-xl w-14 h-16 sm:w-16 sm:h-20 md:w-20 md:h-24 flex items-center justify-center">
      <span className="text-2xl sm:text-3xl md:text-4xl font-heading font-bold text-primary">
        {String(value).padStart(2, "0")}
      </span>
    </div>
    <span className="text-[10px] sm:text-xs md:text-sm text-muted-foreground mt-2 uppercase tracking-wider">
      {label}
    </span>
  </div>
);

const Hero = () => {
  const { days, hours, mins, secs } = useCountdown();

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden px-4 sm:px-6 lg:px-8">
      <ParticleCanvas />

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 sm:w-96 h-72 sm:h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-64 sm:w-80 h-64 sm:h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />

      <div className="relative z-10 w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-10 lg:gap-8">
        
        {/* LEFT CONTENT */}
        <div className="flex-1 text-center lg:text-left">
          
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge className="mb-5 px-4 py-1.5 text-xs sm:text-sm bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
              18th - 19th April
            </Badge>
          </motion.div>

          {/* LOGO */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative flex justify-center lg:justify-start"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800/20 to-blue-700/20 blur-2xl rounded-full -z-10" />
            <img
              src={logo}
              alt="E-Summit 2026"
              className="h-16 sm:h-20 md:h-24 lg:h-28 w-auto"
            />
          </motion.div>

          {/* TAGLINE */}
          <motion.p
            className="mt-4 text-base sm:text-lg md:text-xl text-primary text-bold max-w-md mx-auto lg:mx-0"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
          Entreprenuership Summit of IIEST shibpur
          </motion.p>

          <motion.p
            className="font-heading text-xs sm:text-sm md:text-base text-foreground mt-2 tracking-wide"
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Powered By EDC-IIEST
          </motion.p>

          {/* BUTTONS */}
          <motion.div
            className="mt-7 flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.7 }}
          >
            <a
              href="#about"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold text-sm sm:text-base hover:opacity-90 transition-opacity"
            >
              Explore Events <ArrowRight size={18} />
            </a>

            <a
              href="#"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg glass border-primary/30 text-foreground font-semibold text-sm sm:text-base hover:bg-primary/10 transition-colors"
            >
              <FileText size={18} /> View Brochure
            </a>
          </motion.div>
        </div>

        {/* RIGHT COUNTDOWN */}
        <motion.div
          className="flex-shrink-0 w-full sm:w-auto"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass rounded-2xl p-5 sm:p-6 md:p-8 mx-auto">
            <h3 className="text-center font-heading text-xs sm:text-sm md:text-base font-semibold text-primary tracking-widest mb-5 uppercase">
              Time to Launch
            </h3>

            <div className="flex items-center justify-center gap-2 sm:gap-3">
              <CountdownBox value={days} label="Days" />
              <span className="text-xl sm:text-2xl md:text-3xl text-primary font-bold mb-6">:</span>
              <CountdownBox value={hours} label="Hours" />
              <span className="text-xl sm:text-2xl md:text-3xl text-primary font-bold mb-6">:</span>
              <CountdownBox value={mins} label="Mins" />
              <span className="text-xl sm:text-2xl md:text-3xl text-primary font-bold mb-6">:</span>
              <CountdownBox value={secs} label="Secs" />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-28 sm:h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
    </section>
  );
};

export default Hero;
