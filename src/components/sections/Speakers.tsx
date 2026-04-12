import { SPEAKERS } from "@/data/constants";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { getOptimisedUrl } from "@/lib/cloudinary";

const Speakers = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 sm:py-20 md:py-28 lg:py-32 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="font-heading text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4">
            Past <span className="text-gradient">Speakers</span>
          </h2>
          <p className="text-sm sm:text-base text-muted-foreground">
            Industry leaders who graced our stage
          </p>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-20 md:w-32 bg-gradient-to-r from-background to-transparent z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-20 md:w-32 bg-gradient-to-l from-background to-transparent z-10" />

        <motion.div 
          className="flex animate-marquee hover:pause"
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...SPEAKERS, ...SPEAKERS].map((speaker, i) => {
            // Check if the image starts with http (absolute URL) or is empty. 
            // If not, we assume it's a Cloudinary public ID.
            const imageUrl = 
              !speaker.image 
                ? "https://ui-avatars.com/api/?name=" + encodeURIComponent(speaker.name) + "&background=random" 
                : speaker.image.startsWith("http") 
                  ? speaker.image 
                  : getOptimisedUrl(speaker.image);

            return (
              <motion.div 
                key={`${speaker.name}-${i}`} 
                className="flex-shrink-0 mx-3 sm:mx-4 text-center group cursor-pointer"
                whileHover={{ scale: 1.05, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                {/* Dark themed background container */}
                <div className="
                  w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40
                  rounded-full mx-auto mb-3
                  flex items-end justify-center
                  overflow-hidden relative
                  bg-gradient-to-b from-[#0f0f1a] via-[#12122a] to-[#0a0a14]
                  border-2 border-white/10
                  group-hover:border-primary/60
                  shadow-lg shadow-black/60
                  group-hover:shadow-primary/25
                  transition-all duration-300
                ">
                  {/* Subtle inner glow ring */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-t from-primary/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 pointer-events-none" />

                  <motion.img 
                    src={imageUrl} 
                    alt={speaker.name}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105" 
                    loading="lazy" 
                  />
                </div>
                <p className="font-heading font-semibold text-xs sm:text-sm group-hover:text-primary transition-colors duration-300">{speaker.name}</p>
                <p className="text-[10px] sm:text-xs text-muted-foreground px-2 w-36 mx-auto sm:w-44 truncate">{speaker.title}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default Speakers;
