import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, User } from "lucide-react";
import { TEAM_STRUCTURE } from "@/data/constants";
import { Badge } from "@/components/ui/badge";
import ParticleCanvas from "@/components/ParticleCanvas";

const TeamPage = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <ParticleCanvas />
        
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/15 rounded-full blur-[100px] pointer-events-none" />
        
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center gap-3 mb-6"
            >
              <Users className="w-8 h-8 text-secondary" />
              <Badge className="px-4 py-1.5 text-sm bg-secondary/20 text-secondary border-secondary/30 animate-pulse-glow">
                OUR DEDICATION
              </Badge>
            </motion.div>
            
            <motion.h1
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gradient text-3xl md:text-6xl">Our Team</span>
            </motion.h1>
            
            <motion.p
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Dedicated individuals working together to make E-Summit 2026 an unforgettable experience
            </motion.p>
            
            <motion.p
              className="text-sm md:text-base text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Meet the passionate people behind the event
            </motion.p>
          </div>
        </div>
        
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Team Structure */}
      <section className="py-16 md:py-24 px-4" ref={ref}>
        <div className="container mx-auto max-w-6xl">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="grid gap-8 md:gap-10"
          >
            {TEAM_STRUCTURE.map((team) => {
              const members = [
                ...team.members["4th"].map((m: any) => ({ ...m, year: "4th Year" })),
                ...team.members["3rd"].map((m: any) => ({ ...m, year: "3rd Year" })),
                ...team.members["2nd"].map((m: any) => ({ ...m, year: "2nd Year" })),
              ];

              return (
                <motion.div
                  key={team.role}
                  variants={itemVariants}
                  className="glass rounded-2xl border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background p-5 md:p-6 shadow-sm"
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-4">
                    <div>
                      <h3 className="text-xl md:text-2xl font-heading font-bold text-foreground">
                        {team.role}
                      </h3>
                     
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {members.map((member, index) => (
                      <motion.div
                        key={`${member.name}-${member.year}`}
                        initial={{ opacity: 0, y: 8 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ delay: 0.04 * index }}
                        className="flex items-center gap-3 rounded-lg border border-primary/10 bg-card/40 px-3 py-2.5 hover:border-primary/40 hover:bg-primary/5 transition-colors"
                      >
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10">
                          <User className="w-4 h-4 text-primary" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <p className="text-xs md:text-sm font-semibold text-foreground truncate">
                            {member.name}
                          </p>
                          <div className="flex flex-wrap items-center gap-1 mt-0.5">
                            {member.dept && (
                              <span className="text-[10px] md:text-[11px] text-muted-foreground">
                                {member.dept}
                              </span>
                            )}
                            <span className="text-[9px] md:text-[10px] px-1.5 py-0.5 rounded-full bg-primary/10 text-primary font-medium">
                              {member.year}
                            </span>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 grid sm:grid-cols-2 md:grid-cols-4 gap-4"
          >
            <div className="glass rounded-lg p-6 text-center hover:border-secondary/40 transition-all">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">
                {TEAM_STRUCTURE.length}
              </div>
              <p className="text-muted-foreground text-sm">Committee Roles</p>
            </div>
            <div className="glass rounded-lg p-6 text-center hover:border-secondary/40 transition-all">
              <div className="text-3xl md:text-4xl font-heading font-bold text-primary mb-2">
                {TEAM_STRUCTURE.reduce((sum, team) => sum + team.members["4th"].length, 0)}
              </div>
              <p className="text-muted-foreground text-sm">4th Year Members</p>
            </div>
            <div className="glass rounded-lg p-6 text-center hover:border-secondary/40 transition-all">
              <div className="text-3xl md:text-4xl font-heading font-bold text-secondary mb-2">
                {TEAM_STRUCTURE.reduce((sum, team) => sum + team.members["3rd"].length, 0)}
              </div>
              <p className="text-muted-foreground text-sm">3rd Year Members</p>
            </div>
            <div className="glass rounded-lg p-6 text-center hover:border-secondary/40 transition-all">
              <div className="text-3xl md:text-4xl font-heading font-bold text-amber-500 mb-2">
                {TEAM_STRUCTURE.reduce((sum, team) => sum + team.members["2nd"].length, 0)}
              </div>
              <p className="text-muted-foreground text-sm">2nd Year Members</p>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
            className="mt-8 text-xs md:text-sm text-muted-foreground text-center"
          >
            The student committee works under the guidance of the faculty advisory committee to ensure the smooth execution of the summit.
          </motion.p>
        </div>
      </section>
    </Layout>
  );
};

export default TeamPage;
