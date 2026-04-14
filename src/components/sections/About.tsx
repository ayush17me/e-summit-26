import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { STATS } from "@/data/constants";
import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import img from "@/assets/about-esumm.png";
const CountUp = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = target / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, target]);

  return (
    <span ref={ref} className="text-3xl md:text-4xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

const About = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" className="py-16 sm:py-20 md:py-28 lg:py-32 px-4" ref={ref}>
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 lg:gap-16 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, type: "spring", stiffness: 100 }}
            className="relative group"
          >
            <div className="aspect-[4/3] rounded-2xl overflow-hidden relative shadow-2xl shadow-primary/10">
              <div className="relative w-full h-full group overflow-hidden">
                <motion.img
                  src={img}
                  alt="E-Summit Event"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                  whileHover={{ scale: 1.05 }}
                />
              </div>


              <div className="absolute inset-0 bg-gradient-to-br from-primary/40 to-secondary/30 mix-blend-multiply" />
              <motion.div
                className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2, type: "spring", stiffness: 100 }}
            className="space-y-4 md:space-y-6"
          >
            <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              About <span className="text-gradient">Esummit</span>
            </h2>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              E-Summit'26 is the annual flagship event of the{" "}

              {" "}IIEST Shibpur, aimed at fostering entrepreneurial initiatives among students and aspiring entrepreneurs. It brings together 10,000+ attendees, 50+ startups & investors, and 20+ industry leaders.
            </p>
            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
              From high-stakes competitions like Envisage and Hackstart, to keynotes, panel discussions, a creators conclave, and the Startup & Drone/Auto Expo - E-Summit is where ideas meet opportunity.
            </p>
            <p className="text-xs sm:text-sm text-muted-foreground/70 leading-relaxed flex flex-wrap items-center gap-1">
              IIEST Shibpur, established in 1856, is one of the oldest and most prestigious technical institutions in Asia. The{" "}

              {" "}(EDC) works to nurture innovation and startup culture on campus.
            </p>
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {/* <Button className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 hover:shadow-lg hover:shadow-primary/50 text-primary-foreground gap-2 transition-all duration-300">
                <Download size={16} /> Download Brochure
              </Button> */}
            </motion.div>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="mt-12 sm:mt-16 md:mt-20 grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 md:gap-6"
        >
          {STATS.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="glass rounded-xl p-3 sm:p-4 md:p-6 text-center hover:border-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
              style={{ animationDelay: `${index * 0.2}s` }}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              <CountUp target={stat.value} suffix={stat.suffix} />
              <p className="text-xs sm:text-sm text-muted-foreground mt-1 sm:mt-2">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;
