import { motion, useInView, useAnimation } from "framer-motion";
import { useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { TRACKS } from "@/data/constants";
import { ArrowRight } from "lucide-react";

const MIN_SCALE = 0.68;
const MAX_SCALE = 1.0;

const BentoGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const containerRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number>(0);
  const controls = useAnimation();

  const loopedTracks = [...TRACKS, ...TRACKS];

  // Start the infinite marquee
  const startMarquee = () =>
    controls.start({
      x: ["0%", "-50%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 26,
        ease: "linear",
      },
    });

  useEffect(() => {
    startMarquee();
  }, []);

  // rAF: continuously scale each card based on distance from container center
  useEffect(() => {
    const update = () => {
      if (containerRef.current) {
        const cRect = containerRef.current.getBoundingClientRect();
        const center = cRect.left + cRect.width / 2;
        // Use 55% of half-width so falloff is visible within the viewport
        const maxDist = cRect.width * 0.48;

        const cards =
          containerRef.current.querySelectorAll<HTMLElement>("[data-card]");
        cards.forEach((card) => {
          const r = card.getBoundingClientRect();
          if (r.width === 0) return;
          const cardCenter = r.left + r.width / 2;
          const dist = Math.abs(cardCenter - center);
          const t = Math.min(dist / maxDist, 1); // 0 = at center, 1 = at edge
          const scale = (MAX_SCALE - t * (MAX_SCALE - MIN_SCALE)).toFixed(3);
          const opacity = (0.3 + (1 - t) * 0.7).toFixed(3);
          card.style.transform = `scale(${scale})`;
          card.style.opacity = opacity;
        });
      }
      frameRef.current = requestAnimationFrame(update);
    };

    frameRef.current = requestAnimationFrame(update);
    return () => cancelAnimationFrame(frameRef.current);
  }, []);

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 px-4" ref={ref}>
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            What's In It <span className="text-gradient">For You</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
            Six power-packed tracks designed to ignite your entrepreneurial spirit.
          </p>
        </motion.div>

        {/* Marquee wrapper — py padding so scaled-up center card isn't clipped */}
        <div className="overflow-hidden relative py-8" ref={containerRef}>
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 lg:w-48 z-10 bg-gradient-to-r from-background via-background/75 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 sm:w-24 md:w-36 lg:w-48 z-10 bg-gradient-to-l from-background via-background/75 to-transparent" />

          <motion.div
            className="flex gap-5 items-center"
            animate={controls}
            style={{ width: "max-content" }}
            onHoverStart={() => controls.stop()}
            onHoverEnd={() => startMarquee()}
          >
            {loopedTracks.map((track, i) => (
              <Link
                key={`${track.title}-${i}`}
                to={track.href}
                data-card
                className="group flex flex-col justify-between relative overflow-hidden flex-shrink-0 cursor-pointer select-none rounded-2xl border border-white/[0.08] hover:border-primary/35 transition-[border-color,box-shadow] duration-300 hover:shadow-lg hover:shadow-primary/10"
                style={{
                  width: "265px",
                  height: "215px",
                  padding: "1.3rem 1.5rem",
                  background: "rgba(255,255,255,0.04)",
                  backdropFilter: "blur(14px)",
                  WebkitBackdropFilter: "blur(14px)",
                  transformOrigin: "center center",
                  willChange: "transform, opacity",
                }}
              >
                {/* Hover glow overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-secondary/4 opacity-0 group-hover:opacity-100 transition-opacity duration-400 rounded-2xl" />

                <div className="relative z-10">
                  <motion.div
                    whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
                    transition={{ duration: 0.45 }}
                  >
                    <track.icon className="w-8 h-8 md:w-10 md:h-10 text-primary mb-3 group-hover:text-secondary transition-colors duration-300" />
                  </motion.div>
                  <h3 className="font-heading text-base sm:text-lg font-semibold mb-1">
                    {track.title}
                  </h3>
                </div>

                <div className="relative z-10 flex items-end justify-between gap-2">
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed flex-1">
                    {track.description}
                  </p>
                  <span className="flex items-center gap-1 text-xs font-semibold whitespace-nowrap shrink-0 ml-2 px-2 py-1 rounded-lg bg-primary/8 text-primary/70 group-hover:bg-primary/18 group-hover:text-primary transition-all duration-300">
                    Explore <ArrowRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            ))}
          </motion.div>
        </div>


      </div>
    </section>
  );
};

export default BentoGrid;
