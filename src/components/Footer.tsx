import { Link } from "react-router-dom";
import { NAV_LINKS, SOCIAL_LINKS, CONTACT_INFO } from "@/data/constants";
import { Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import logo from "@/assets/logo-esumm1.png";
const Footer = () => {
  return (
    <footer className="border-t border-white/5 bg-void">
      <div className="container mx-auto px-4 md:px-8 py-10 sm:py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center gap-2 mb-3 sm:mb-4">
              <motion.img
                src={logo}
                alt="E-Summit 2026"
                className="h-8 sm:h-10"
                whileHover={{ scale: 1.05, rotate: [0, -5, 5, 0] }}
                transition={{ duration: 0.5 }}
              />
            </div>
            <img
              src="https://res.cloudinary.com/diq6oo9ue/image/upload/v1776030798/ENTREPRENEURSHIP_DEVELOPMENT_CELL-removebg-preview_jlmtrt.png"
              alt="Entrepreneurship Development Cell"
              className="h-10 sm:h-12 object-contain mb-2 sm:mb-3"
            />
            <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
              The annual flagship event of EDC, IIEST Shibpur - fostering entrepreneurial initiatives, empowering women in tech, and driving the AI revolution.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="font-heading font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Quick Links</h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link, index) => (
                <motion.li
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.2 + index * 0.05 }}
                >
                  <Link
                    to={link.href}
                    className="text-xs sm:text-sm text-muted-foreground hover:text-primary transition-colors inline-block hover:translate-x-1 duration-200"
                  >
                    {link.label}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="font-heading font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Contact</h4>
            <ul className="space-y-2 sm:space-y-3 text-xs sm:text-sm text-muted-foreground">
              <motion.li
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
                whileHover={{ x: 3 }}
              >
                <Mail size={14} /> {CONTACT_INFO.email}
              </motion.li>
              <motion.li
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
                whileHover={{ x: 3 }}
              >
                <Phone size={14} /> {CONTACT_INFO.phone1.name}: {CONTACT_INFO.phone1.number}
              </motion.li>
              <motion.li
                className="flex items-center gap-2 hover:text-primary transition-colors duration-200"
                whileHover={{ x: 3 }}
              >
                <Phone size={14} /> {CONTACT_INFO.phone2.name}: {CONTACT_INFO.phone2.number}
              </motion.li>
              <motion.li
                className="flex items-start gap-2 hover:text-primary transition-colors duration-200"
                whileHover={{ x: 3 }}
              >
                <MapPin size={14} className="mt-0.5 shrink-0" /> {CONTACT_INFO.address}
              </motion.li>
            </ul>
          </motion.div>
        </div>

        {/* Social + Copyright */}
        <motion.div
          className="mt-10 sm:mt-12 pt-6 sm:pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex gap-3 sm:gap-4">
            {SOCIAL_LINKS.map((s, index) => (
              <motion.a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-muted-foreground transition-all duration-300 ${s.color}`}
                aria-label={s.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 + index * 0.05 }}
                whileHover={{ scale: 1.2, y: -3 }}
                whileTap={{ scale: 0.9 }}
              >
                <s.icon size={20} />
              </motion.a>
            ))}
          </div>
          <p className="text-[10px] sm:text-xs text-muted-foreground text-center sm:text-left">© 2026 E-Summit'26 | EDC, IIEST Shibpur. All rights reserved.</p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
