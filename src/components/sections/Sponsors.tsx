import { CURRENT_SPONSORS, PAST_SPONSORS } from "@/data/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const Sponsors = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

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
            Our <span className="text-gradient">Sponsors</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Partnering with industry leaders
          </p>
        </motion.div>

        {/* Current */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="font-heading text-lg sm:text-xl font-semibold text-center mb-6 sm:mb-8">Current Sponsors</h3>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 mb-12 sm:mb-16">
            {CURRENT_SPONSORS.map((s, index) => (
              <motion.div 
                key={s.name} 
                className="glass rounded-xl p-4 sm:p-6 flex items-center justify-center hover:border-primary/40 hover:shadow-lg hover:shadow-primary/10 transition-all duration-300"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <img src={s.logo} alt={s.name} className="max-h-10 sm:max-h-12 w-auto" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Past */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="font-heading text-base sm:text-lg font-semibold text-center mb-6 sm:mb-8 text-muted-foreground">Past Sponsors</h3>
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 sm:gap-3">
            {PAST_SPONSORS.map((s, index) => (
              <motion.div 
                key={s.name} 
                className="glass rounded-lg p-3 sm:p-4 flex items-center justify-center transition-all duration-300 hover:border-primary/30"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                whileHover={{ scale: 1.1, y: -3 }}
              >
                <img src={s.logo} alt={s.name} className="max-h-8 sm:max-h-10 w-auto" loading="lazy" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Sponsors;
