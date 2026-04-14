import Layout from "@/components/Layout";
import { motion, useInView } from "framer-motion";
import { useRef, useMemo, useState } from "react";
import { NETWORKING_EVENTS } from "@/data/constants";
import EventModal from "@/components/EventModal";
import { ChevronRight, Mic, Calendar } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import ParticleCanvas from "@/components/ParticleCanvas";
import { Link } from "react-router-dom";

/* ── Reusable timeline for a single day ── */
const DayTimeline = ({
  dayLabel,
  dayDate,
  events,
  accentFrom,
  accentTo,
  onSelectEvent,
}: {
  dayLabel: string;
  dayDate: string;
  events: typeof NETWORKING_EVENTS;
  accentFrom: string;
  accentTo: string;
  onSelectEvent: (e: any) => void;
}) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="py-16 md:py-24 px-4" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        {/* Day heading */}
        <motion.div
          className="flex flex-col items-center mb-14"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-center lg:mb-12 sm:mb-6 mb-4 w-full">

            <Link to="https://unstop.com/college-fests/scitillations26-indian-institute-of-engineering-science-and-technology-iiest-shibpur-458988" className="px-4 py-4 sm:px-10 sm:py-5 rounded-full bg-gradient-to-r from-primary to-purple-600 hover:from-purple-500 hover:to-primary transition-all duration-500 text-white font-bold text-sm sm:text-lg flex items-center gap-3 shadow-[0_0_30px_rgba(168,85,247,0.6)] w-full sm:w-auto justify-center uppercase tracking-wide">
              Register on <img src="https://res.cloudinary.com/diq6oo9ue/image/upload/q_auto/f_auto/v1775943637/unstop-logo_ihonix.svg" alt="Unstop" className="h-6 md:h-8 object-contain" />
            </Link>
          </div>

          <div className="flex items-center gap-3 mb-3">
            <Calendar className="w-6 h-6 text-primary" />
            <span
              className="font-heading text-3xl md:text-4xl font-extrabold"
              style={{
                background: `linear-gradient(135deg, ${accentFrom}, ${accentTo})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              {dayLabel}
            </span>
          </div>
          <p className="text-sm text-muted-foreground tracking-widest uppercase">
            {dayDate}
          </p>
          <div
            className="mt-4 h-1 w-24 rounded-full"
            style={{
              background: `linear-gradient(90deg, ${accentFrom}, ${accentTo})`,
            }}
          />

        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px"
            style={{
              background: `linear-gradient(to bottom, ${accentFrom}, ${accentTo}, transparent)`,
            }}
          />

          {events.map((event, i) => (
            <motion.div
              key={event.id}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.15 }}
              className={`relative flex items-start mb-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
            >
              {/* Dot */}
              <motion.div
                className="absolute left-4 md:left-1/2 w-3 h-3 rounded-full border-2 border-background -translate-x-1/2 mt-2 z-10 cursor-pointer hover:scale-150 transition-transform"
                style={{ backgroundColor: accentFrom }}
                whileHover={{ scale: 1.5 }}
                onClick={() => onSelectEvent(event)}
              />

              <div
                className={`ml-12 md:ml-0 md:w-1/2 ${i % 2 === 0 ? "md:pr-12" : "md:pl-12"
                  }`}
              >
                <motion.div
                  className="glass rounded-xl p-5 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10 transition-all cursor-pointer group"
                  whileHover={{ scale: 1.02, y: -5 }}
                  onClick={() => onSelectEvent(event)}
                >
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">
                        {event.time}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {event.duration}
                      </span>
                    </div>
                    <motion.div
                      className="text-muted-foreground group-hover:text-primary transition-colors opacity-0 group-hover:opacity-100"
                      initial={{ x: -5 }}
                      whileHover={{ x: 3 }}
                    >
                      <ChevronRight size={18} />
                    </motion.div>
                  </div>
                  <h3 className="font-heading text-lg font-semibold mb-1 group-hover:text-primary transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {event.description}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-3">
                    Click to view details →
                  </p>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Main page ── */
const NetworkingPage = () => {
  const [selectedEvent, setSelectedEvent] = useState(null);
  const [activeDay, setActiveDay] = useState(1);

  const day1Events = useMemo(
    () => NETWORKING_EVENTS.filter((e) => e.day === "Day 1"),
    []
  );
  const day2Events = useMemo(
    () => NETWORKING_EVENTS.filter((e) => e.day === "Day 2"),
    []
  );

  return (
    <Layout>
      {/* ── Hero ── */}
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
              <Mic className="w-8 h-8 text-secondary" />
              <Badge className="px-4 py-1.5 text-sm bg-secondary/20 text-secondary border-secondary/30 animate-pulse-glow">
                CONNECT & INSPIRE
              </Badge>
            </motion.div>

            <motion.h1
              className="font-heading text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 leading-tight"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              <span className="text-gradient text-3xl md:text-6xl">
                Event Schedule
              </span>
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground/80 max-w-2xl mx-auto mb-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Keynotes, panels, and expos - connect with leaders shaping the
              future.
            </motion.p>

            <motion.p
              className="text-sm md:text-base text-muted-foreground tracking-wide"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              Learn from industry leaders and expand your professional network
            </motion.p>
          </div>
        </div>

        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
      </section>

      {/* ── Day Selection Buttons ── */}
      <section className="py-8 relative z-20">
        <div className="container mx-auto max-w-md px-4">
          <div className="glass p-1.5 rounded-2xl flex items-center gap-2">
            <button
              onClick={() => setActiveDay(1)}
              className={`flex-1 py-3 px-6 rounded-xl font-heading font-bold transition-all duration-300 relative overflow-hidden group ${activeDay === 1
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {activeDay === 1 && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-primary to-secondary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Day 1
              </span>
            </button>
            <button
              onClick={() => setActiveDay(2)}
              className={`flex-1 py-3 px-6 rounded-xl font-heading font-bold transition-all duration-300 relative overflow-hidden group ${activeDay === 2
                ? "text-white"
                : "text-muted-foreground hover:text-foreground"
                }`}
            >
              {activeDay === 2 && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute inset-0 bg-gradient-to-r from-secondary to-primary"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center justify-center gap-2">
                <Calendar className="w-4 h-4" />
                Day 2
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* ── Active Day Timeline ── */}
      <motion.div
        key={activeDay}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {activeDay === 1 ? (
          <DayTimeline
            dayLabel="Day 1"
            dayDate="Inauguration · Keynotes · Shark Tank"
            events={day1Events}
            accentFrom="hsl(262, 83%, 58%)"
            accentTo="hsl(330, 81%, 60%)"
            onSelectEvent={setSelectedEvent}
          />
        ) : (
          <DayTimeline
            dayLabel="Day 2"
            dayDate="Masterclass · Panels · Creator Conclave"
            events={day2Events}
            accentFrom="hsl(199, 89%, 48%)"
            accentTo="hsl(162, 73%, 46%)"
            onSelectEvent={setSelectedEvent}
          />
        )}
      </motion.div>

      {/* EventModal */}
      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </Layout>
  );
};

export default NetworkingPage;

