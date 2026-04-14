import { motion, AnimatePresence } from "framer-motion";
import { X, Clock, MapPin, Users, CalendarDays } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Speaker {
  name: string;
  title: string;
  company: string;
}

interface Event {
  id: string;
  title: string;
  type: string;
  description: string;
  fullDescription: string;
  time: string;
  day: string;
  duration: string;
  speakers?: Speaker[];
  venue: string;
  capacity: string;
  image: string;
  registrationLink: string;
}

interface EventModalProps {
  event: Event | null;
  onClose: () => void;
}

const EventModal = ({ event, onClose }: EventModalProps) => {
  if (!event) return null;

  return (
    <AnimatePresence>
      {event && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-background/95 backdrop-blur-xl flex items-center justify-center p-4 md:p-8"
          onClick={onClose}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="w-full max-w-3xl max-h-[90vh] overflow-y-auto glass rounded-2xl border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <motion.button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 p-2 hover:bg-white/10 rounded-full transition-colors"
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <X size={24} />
            </motion.button>

            {/* Header Image */}
            <div className="relative h-64 md:h-80 overflow-hidden">
              <motion.img
                src={event.image}
                alt={event.title}
                className="w-full h-full object-cover"
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

              {/* Event Type Badge */}
              <motion.div
                className="absolute top-4 left-4"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <span className="px-4 py-1.5 rounded-full bg-primary/20 text-primary border border-primary/30 text-sm font-medium">
                  {event.type}
                </span>
              </motion.div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 space-y-6">
              {/* Title */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
              >
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-2">
                  {event.title}
                </h2>
                <p className="text-lg text-primary font-medium">{event.day} • {event.time}</p>
              </motion.div>

              {/* Info Cards */}
              <motion.div
                className="grid grid-cols-2 md:grid-cols-4 gap-3"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                <div className="glass rounded-lg p-4 text-center">
                  <Clock size={20} className="mx-auto mb-2 text-secondary" />
                  <p className="text-xs text-muted-foreground mb-1">Duration</p>
                  <p className="font-semibold text-sm">{event.duration}</p>
                </div>

                <div className="glass rounded-lg p-4 text-center">
                  <MapPin size={20} className="mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground mb-1">Venue</p>
                  <p className="font-semibold text-sm truncate">{event.venue.split(",")[0]}</p>
                </div>

                <div className="glass rounded-lg p-4 text-center">
                  <Users size={20} className="mx-auto mb-2 text-secondary" />
                  <p className="text-xs text-muted-foreground mb-1">Capacity</p>
                  <p className="font-semibold text-sm">{event.capacity}</p>
                </div>

                <div className="glass rounded-lg p-4 text-center">
                  <CalendarDays size={20} className="mx-auto mb-2 text-primary" />
                  <p className="text-xs text-muted-foreground mb-1">Date</p>
                  <p className="font-semibold text-sm">{event.day}</p>
                </div>
              </motion.div>

              {/* Description */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                <h3 className="font-heading font-semibold text-lg mb-2">About this Event</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {event.fullDescription}
                </p>
              </motion.div>

              {/* Speakers */}
              {event.speakers && event.speakers.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <h3 className="font-heading font-semibold text-lg mb-4">Speakers</h3>
                  <div className="grid md:grid-cols-2 gap-4">
                    {event.speakers.map((speaker, index) => (
                      <motion.div
                        key={index}
                        className="glass rounded-lg p-4 border border-primary/10"
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        whileHover={{ borderColor: "hsl(var(--primary))" }}
                      >
                        <p className="font-semibold text-sm mb-1">{speaker.name}</p>
                        <p className="text-xs text-primary mb-1">{speaker.title}</p>
                        <p className="text-xs text-muted-foreground">{speaker.company}</p>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Venue Details */}
              <motion.div
                className="glass rounded-lg p-4 border-l-4 border-primary/50"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <div className="flex items-start gap-3">
                  <MapPin size={20} className="mt-1 text-primary flex-shrink-0" />
                  <div>
                    <p className="font-semibold mb-1">Venue</p>
                    <p className="text-sm text-muted-foreground">{event.venue}</p>
                  </div>
                </div>
              </motion.div>

              {/* CTA Buttons */}
              <motion.div
                className="pt-4 flex flex-col sm:flex-row gap-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    onClick={() => window.open(event.registrationLink, "_blank")}
                    className="w-full bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50"
                  >
                    Register for this Event
                  </Button>
                </motion.div>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={onClose}
                    className="w-full"
                  >
                    Close
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default EventModal;
