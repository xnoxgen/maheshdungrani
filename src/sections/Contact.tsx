import { motion } from 'framer-motion';
import { MapPin, ArrowUpRight, Building2, Globe, ShieldCheck } from 'lucide-react';
import { LinkedInIcon } from '../components/ui/Icons';

const LINKEDIN_URL = 'https://www.linkedin.com/in/mahesh-dungrani-90a2482a/';

export default function Contact() {
  return (
    <div className="w-full h-full flex items-center justify-center max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8 select-none">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* ── Left Column: Editorial Statement & Positioning ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:col-span-7 text-left"
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-5">
            <span className="w-12 h-px bg-[#FF720C]/60" />
            <span className="font-mono text-sm tracking-[0.25em] text-[#FF720C] font-semibold uppercase">
              06
            </span>
            <span className="w-6 h-px bg-[#FF720C]/40" />
            <span className="font-mono text-sm tracking-[0.25em] text-[#A9A19A] uppercase">
              GET IN TOUCH
            </span>
          </div>

          {/* Large Headline */}
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E9] leading-[1.15] mb-6">
            Let's Connect &amp; <br />
            <span className="italic text-[#FF720C]">Engineer</span> Reliability.
          </h2>

          {/* Narrative text */}
          <p className="text-[#F5F0E9] text-lg sm:text-xl lg:text-2xl font-light leading-relaxed mb-8 max-w-2xl font-['Inter',sans-serif]">
            Open for professional networking, technical discussions, and collaborative engineering dialogue related to Control &amp; Instrumentation systems powering critical power generation infrastructure.
          </p>

          {/* Quick Pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-6 border-t border-white/10 max-w-xl">
            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#FF720C]/10 border border-[#FF720C]/30 flex items-center justify-center shrink-0">
                <Building2 className="w-5 h-5 text-[#FF720C]" />
              </div>
              <div className="text-sm sm:text-base font-mono text-[#F5F0E9]">
                <span className="block text-[#77716B] text-xs uppercase tracking-wider font-semibold">Sector Focus</span>
                Thermal &amp; Nuclear C&amp;I
              </div>
            </div>

            <div className="flex items-center gap-3.5">
              <div className="w-11 h-11 rounded-xl bg-[#FF720C]/10 border border-[#FF720C]/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-[#FF720C]" />
              </div>
              <div className="text-sm sm:text-base font-mono text-[#F5F0E9]">
                <span className="block text-[#77716B] text-xs uppercase tracking-wider font-semibold">Specialization</span>
                DCS &amp; System Validation
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── Right Column: Interactive Professional Card ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:col-span-5"
        >
          <div className="relative w-full bg-[#19130F] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden hover:border-[#FF720C]/40 transition-all duration-300">
            {/* Warm radial background glow */}
            <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF720C]/[0.09] blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-[#A83F0B]/[0.08] blur-3xl pointer-events-none" />

            {/* Active Status Badge */}
            <div className="flex flex-wrap items-center justify-between gap-2 mb-6 pb-4 border-b border-white/10">
              <div className="flex items-center gap-2.5">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF720C] opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-[#FF720C]" />
                </span>
                <span className="font-mono text-xs sm:text-sm tracking-wider text-[#FF720C] font-semibold uppercase">
                  ACTIVE ON LINKEDIN
                </span>
              </div>
              <span className="font-mono text-xs sm:text-sm text-[#A9A19A]">MUMBAI, INDIA</span>
            </div>

            {/* Name & Title */}
            <h3 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-[#F5F0E9] leading-tight mb-2">
              Mahesh Dungrani
            </h3>
            <p className="font-mono text-base text-[#FF720C] font-semibold mb-1">
              Technical Officer – Control &amp; Instrumentation
            </p>
            <p className="text-sm sm:text-base text-[#A9A19A] font-mono mb-6">
              Nuclear Power Corporation of India Limited (NPCIL)
            </p>

            {/* Contact Details List */}
            <div className="space-y-3.5 mb-8 text-sm sm:text-base font-mono text-[#F5F0E9]">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-[#FF720C] shrink-0" />
                <span>Mumbai, Maharashtra, India</span>
              </div>
              <div className="flex items-center gap-3">
                <LinkedInIcon className="w-4 h-4 text-[#FF720C] shrink-0" />
                <span className="truncate text-xs sm:text-sm text-[#A9A19A]">linkedin.com/in/mahesh-dungrani-90a2482a</span>
              </div>
              <div className="flex items-center gap-3">
                <Globe className="w-4 h-4 text-[#FF720C] shrink-0" />
                <span className="text-xs sm:text-sm text-[#A9A19A]">Languages: English, Gujarati, Hindi</span>
              </div>
            </div>

            {/* Big Orange LinkedIn Button */}
            <div className="pt-2">
              <a
                href={LINKEDIN_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full bg-[#FF720C] hover:bg-[#A83F0B] text-[#100D0B] font-mono text-sm sm:text-base font-bold tracking-[0.16em] uppercase px-8 py-4 rounded-full transition-all group shadow-[0_0_25px_rgba(255,114,12,0.35)] hover:shadow-[0_0_40px_rgba(255,114,12,0.6)] cursor-pointer"
              >
                <span>CONNECT ON LINKEDIN</span>
                <ArrowUpRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
