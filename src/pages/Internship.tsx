import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Rocket, Users, Target, Zap, Mail, Phone, MapPin,
  ExternalLink, ShieldCheck, Briefcase
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ParticleCanvas from "@/components/ParticleCanvas";
import { CONTACT_INFO } from "@/data/constants";

const StartupExpo = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  const attendeeBenefits = [
    {
      icon: Users,
      title: "Network with Founders",
      desc: "Direct access to CEOs and visionary leaders of rapidly growing startups. Build relationships that count.",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: Zap,
      title: "Discover Innovation",
      desc: "Get a front-row seat to the technologies, products, and ideas that are disrupting industries today.",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: Target,
      title: "Career Opportunities",
      desc: "Many exhibiting startups are looking for their next core team members. Find internships and full-time roles.",
      color: "text-orange-500",
      bgColor: "bg-orange-500/10"
    }
  ];

  const startupBenefits = [
    {
      icon: Rocket,
      title: "Exhibition Stall",
      desc: "A dedicated space to showcase your product to 10,000+ enthusiastic attendees and tech-savvy students.",
      color: "text-primary"
    },
    {
      icon: ExternalLink,
      title: "Investor Connect",
      desc: "Pitch and interact with potential investors and VCs who visit the E-Summit for the next big thing.",
      color: "text-secondary"
    },
    {
      icon: ShieldCheck,
      title: "Talent Acquisition",
      desc: "Access the brightest minds from IIEST Shibpur. Recruit for internships or technical roles on the spot.",
      color: "text-primary"
    }
  ];

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
              <Briefcase className="w-8 h-8 text-primary" />
              <Badge className="px-4 py-1.5 text-sm bg-primary/20 text-primary border-primary/30 animate-pulse-glow">
                STARTUP SHOWCASE
              </Badge>
            </motion.div>

            <motion.h1
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gradient text-3xl md:text-6xl">Startup Expo</span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Where innovation meets opportunity. The largest startup exhibition of eastern India.
            </motion.p>

            <motion.p
              className="text-sm md:text-base text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Connect with 50+ startups and witness the future of entrepreneurship
            </motion.p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* Attendee Benefits */}
      <section className="py-16 md:py-24 px-4" ref={ref}>
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-4xl font-bold text-center mb-12"
          >
            Benefits for <span className="text-gradient">Attendees</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {attendeeBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all group"
              >
                <div className={`w-12 h-12 rounded-xl ${benefit.bgColor} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <benefit.icon className={`w-6 h-6 ${benefit.color}`} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Startup Benefits */}
      <section className="py-16 md:py-24 px-4 bg-void/30">
        <div className="container mx-auto">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="font-heading text-2xl md:text-4xl font-bold text-center mb-12"
          >
            Why Participate as a <span className="text-gradient">Startup</span>
          </motion.h2>

          <div className="grid md:grid-cols-3 gap-6">
            {startupBenefits.map((benefit, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="glass-strong rounded-2xl p-6 md:p-8 hover:border-primary/40 transition-all"
              >
                <div className="mb-6">
                  <benefit.icon className={`w-10 h-10 ${benefit.color}`} />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 md:py-24 px-4 overflow-hidden">
        <div className="container mx-auto max-w-4xl">
          <div className="glass rounded-[2rem] p-8 md:p-12 relative overflow-hidden">
            {/* Background design element */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />

            <div className="relative z-10 grid md:grid-cols-1 gap-12 items-center">
              <div>
                <h2 className="font-heading text-3xl md:text-5xl font-extrabold mb-6 leading-tight">
                  Get Your <span className="text-gradient">Stall</span>
                </h2>
                <p className="text-muted-foreground mb-8 text-sm md:text-base leading-relaxed">
                  Take your startup to the next level. Book your exhibition space and get exclusive access to our network of investors and talent.
                </p>

                <div className="space-y-4">
                  <div className="flex items-center gap-4 text-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <Mail size={18} />
                    </div>
                    <span>{CONTACT_INFO.email}</span>
                  </div>
                  <div className="flex flex-col items-start gap-4 text-sm">

                    <span className="flex items-center gap-4"><div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <Phone size={18} />
                    </div>{CONTACT_INFO.phone1.number} ({CONTACT_INFO.phone1.name})</span>
                    <span className="flex items-center gap-4" ><div className="w-10 h-10 rounded-lg bg-secondary/10 flex items-center justify-center text-secondary">
                      <Phone size={18} />
                    </div>+91 8081150408 (Surya)</span>
                  </div>
                  <div className="flex items-center gap-4 text-sm">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                      <MapPin size={18} />
                    </div>
                    <span>Parade Ground, IIEST Shibpur  </span>
                  </div>
                </div>
              </div>


            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default StartupExpo;
