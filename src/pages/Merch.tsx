import Layout from "@/components/Layout";
import { motion } from "framer-motion";

const MerchPage = () => {
  return (
    <Layout>
      <section className="relative min-h-[600px] md:min-h-[70vh] flex items-center justify-center px-4 py-16 md:py-24 overflow-hidden">
        {/* Background gradients */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-purple-800/40 via-slate-950 to-black" />
        <div className="pointer-events-none absolute -top-32 -left-24 w-80 h-80 rounded-full bg-fuchsia-500/25 blur-[120px]" />
        <div className="pointer-events-none absolute -bottom-40 right-0 w-96 h-96 rounded-full bg-indigo-500/25 blur-[130px]" />

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative z-10 w-full max-w-5xl grid gap-10 md:grid-cols-[1.2fr,1fr] items-center"
        >
          {/* Left: Copy */}
          <div className="space-y-5">
            <div className="inline-flex items-center gap-2 rounded-full border border-purple-400/40 bg-black/40 px-3 py-1 text-[11px] font-semibold tracking-[.2em] uppercase text-purple-100/80">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Official Merch Drop
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl font-black leading-tight text-white">
              <span className="block text-sm font-semibold tracking-[.35em] text-purple-200/70 mb-2 uppercase">
                Scintillations' 26
              </span>
              <span className="block bg-gradient-to-r from-purple-200 via-fuchsia-300 to-sky-300 bg-clip-text text-transparent">
                E-Summit Merch is here
              </span>
            </h1>

            <p className="text-sm sm:text-base text-white/70 max-w-xl">
              Not everyone wears ambition. This drop is for builders, hustlers, and the ones who show up when it matters.
            </p>

            <div className="flex flex-wrap gap-3 items-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-black/70 border border-white/15 px-4 py-2">
                <span className="text-xs font-semibold tracking-[.18em] text-white/60 uppercase">
                  E-Summit T-Shirt
                </span>
                <span className="text-sm font-bold text-emerald-300">₹ 350</span>
              </div>
              <span className="text-[11px] font-semibold tracking-[.2em] uppercase text-red-300">
                Limited stock
              </span>
            </div>

            <div className="space-y-2 text-[13px] text-white/65">
              <p>If you're attending, show up like you belong.</p>
              <p className="font-semibold text-white/80">Don’t miss out.</p>
            </div>

            <div className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href="https://forms.gle/2Ke7TjZF9Xbw3PRp6"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-gradient-to-r from-purple-500 via-fuchsia-500 to-red-500 px-7 py-3 text-xs sm:text-sm font-bold uppercase tracking-[.2em] text-white shadow-[0_0_25px_rgba(244,114,182,0.6)] hover:shadow-[0_0_40px_rgba(244,114,182,0.9)] transition-all duration-300"
              >
                Order Now
              </a>

              <div className="text-[11px] sm:text-xs text-white/60">
                <p>
                  <span className="font-semibold text-white/80">Deadline:</span> 15th April 2026, 7 PM
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 text-[12px] text-white/60 space-y-1">
              <p className="font-semibold text-white/75 tracking-[.18em] uppercase text-[11px] mb-1">
                Queries
              </p>
              <p>Arnav Aarit – 9060227813</p>
              <p>Yash Mahajan – 9503672254</p>
            </div>
          </div>

          {/* Right: Tee mockup block */}
          <div className="relative max-w-sm mx-auto w-full">
            <div className="absolute -inset-8 bg-gradient-to-br from-purple-500/20 via-fuchsia-500/10 to-sky-400/10 blur-3xl" />
            <div className="relative rounded-3xl border border-white/10 bg-black/80 px-6 py-7 shadow-[0_24px_80px_rgba(15,23,42,0.95)] flex flex-col gap-4">
              <div className="text-center text-[11px] uppercase tracking-[.2em] text-purple-200/70">
                Front & Back Preview
              </div>

              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/10">
                <img
                  src="https://res.cloudinary.com/diq6oo9ue/image/upload/v1776165602/Screenshot_2026-04-14_160145_cugsak.png"
                  alt="E-Summit Merch"
                  className="w-full h-full object-cover"
                />
              </div>

              <p className="text-[11px] text-white/55 leading-relaxed">
                Minimal black tee with the Scintillations' 26 identity — built for photos, keynotes, late-night hustle and everything in between.
              </p>
            </div>
          </div>
        </motion.div>
      </section>
    </Layout>
  );
};

export default MerchPage;
