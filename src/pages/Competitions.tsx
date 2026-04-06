import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { COMPETITIONS } from "@/data/constants";
import CardFlip from "@/components/ui/flip-card";
import { useNavigate } from "react-router-dom";
import { Badge } from "@/components/ui/badge";
import { Trophy } from "lucide-react";
import ParticleCanvas from "@/components/ParticleCanvas";

const CARD_COLORS = ["#4169e1", "#d946ef"];

const CompetitionsPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const navigate = useNavigate();

  return (
    <Layout>
      {/* Hero Banner */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <ParticleCanvas />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-secondary/15 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <Trophy className="w-8 h-8 text-primary" />
              <Badge className="px-4 py-1.5 text-sm bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
                HIGH-STAKES CHALLENGES
              </Badge>
            </motion.div>
            
            <motion.h1
              className="font-heading text-3xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gradient text-3xl md:text-6xl">Competitions</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Test your entrepreneurial mettle in high-stakes challenges designed to push boundaries.
            </motion.p>
            
            <motion.p
              className="text-sm md:text-base text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Join 5 intense competitions and showcase your innovation
            </motion.p>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Cards */}
      <section className="py-16 md:py-24 px-4" ref={ref}>
        <div className="container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {COMPETITIONS.map((comp, i) => (
            <motion.div
              key={comp.id}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="cursor-pointer"
              onClick={() => navigate(`/competition/${comp.id}`)}
              whileHover={{ y: -5 }}
            >
              <CardFlip
                title={comp.title}
                subtitle={comp.tagline}
                description={comp.description}
                features={comp.features}
                color={CARD_COLORS[i % 2]}
              />
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default CompetitionsPage;
