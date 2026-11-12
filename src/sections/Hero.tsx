import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { MapPin, ArrowRight } from 'lucide-react';

const container: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.12, delayChildren: 0.15 },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] as const },
  },
};

interface HeroProps {
  onSelectSlide?: (slideId: string) => void;
}

export default function Hero({ onSelectSlide }: HeroProps) {
  return (
    <div className="relative w-full h-full flex items-center justify-center select-none">
      {/* ── Background layers ── */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div className="w-[700px] h-[700px] rounded-full bg-[#FF720C]/[0.07] blur-[150px]" />
        <div className="absolute bottom-10 right-10 w-[500px] h-[500px] rounded-full bg-[#A83F0B]/[0.08] blur-[130px]" />
      </div>

      {/* Technical grid pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.4) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      {/* Content Grid */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-center py-6">
        <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center justify-center">
          {/* ── Left: Portrait Spotlight Card ── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] as const }}
            className="order-1 lg:col-span-5 flex justify-center items-center"
          >
            <div className="relative w-80 h-[26rem] sm:w-96 sm:h-[30rem] lg:w-[24rem] lg:h-[32rem]">
              {/* Warm glow behind */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#FF720C]/30 via-[#A83F0B]/20 to-transparent blur-3xl scale-110" />

              {/* Card */}
              <div className="relative w-full h-full rounded-3xl bg-[#19130F] border border-white/10 overflow-hidden flex flex-col items-center justify-center shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
                {/* Engineering grid overlay */}
                <div
                  className="absolute inset-0 opacity-[0.06]"
                  style={{
                    backgroundImage:
                      'linear-gradient(rgba(255,114,12,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,114,12,0.6) 1px, transparent 1px)',
                    backgroundSize: '30px 30px',
                  }}
                />

                {/* Radial warm glow */}
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,114,12,0.18)_0%,transparent_70%)]" />

                {/* Circle accent rings */}
                <div className="absolute w-64 h-64 rounded-full border border-[#FF720C]/20" />
                <div className="absolute w-44 h-44 rounded-full border border-[#FF720C]/10" />

                {/* Initials & Name */}
                <span className="relative z-10 font-['Playfair_Display',serif] text-8xl md:text-9xl font-bold text-[#FF720C]/90 select-none tracking-tight drop-shadow-lg">
                  MD
                </span>
                <span className="relative z-10 mt-4 font-mono text-base md:text-lg tracking-[0.25em] text-[#F5F0E9] font-semibold uppercase">
                  Mahesh Dungrani
                </span>
                <span className="relative z-10 mt-1 font-mono text-xs sm:text-sm tracking-[0.2em] text-[#FF720C] uppercase font-medium">
                  C&amp;I Lead Engineer • NPCIL
                </span>

                {/* Corner accents */}
                <div className="absolute top-5 left-5 w-8 h-8 border-t-2 border-l-2 border-[#FF720C]/40" />
                <div className="absolute top-5 right-5 w-8 h-8 border-t-2 border-r-2 border-[#FF720C]/40" />
                <div className="absolute bottom-5 left-5 w-8 h-8 border-b-2 border-l-2 border-[#FF720C]/40" />
                <div className="absolute bottom-5 right-5 w-8 h-8 border-b-2 border-r-2 border-[#FF720C]/40" />
              </div>
            </div>
          </motion.div>

          {/* ── Right: Text content ── */}
          <motion.div
            variants={container}
            initial="hidden"
            animate="visible"
            className="order-2 lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0"
          >
            {/* Label */}
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center gap-3 font-mono text-xs sm:text-sm tracking-[0.3em] text-[#FF720C] font-semibold mb-5 uppercase"
            >
              <span className="w-8 h-px bg-[#FF720C]/70" />
              C&amp;I ENGINEERING PROFESSIONAL
            </motion.span>

            {/* Main heading */}
            <motion.h1
              variants={fadeUp}
              className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-bold leading-[1.08] text-[#F5F0E9] mb-5"
            >
              Engineering Precision.
              <br />
              <span className="text-gradient-orange">Powering Possibilities.</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeUp}
              className="font-['Inter',sans-serif] text-xl sm:text-2xl text-[#F5F0E9] max-w-2xl mb-4 leading-relaxed font-normal"
            >
              Control &amp; Instrumentation Design and Engineering Professional
              for Thermal &amp; Nuclear Power Projects.
            </motion.p>

            {/* Supporting description */}
            <motion.p
              variants={fadeUp}
              className="font-['Inter',sans-serif] text-base sm:text-lg text-[#A9A19A] max-w-2xl mb-8 leading-relaxed font-light"
            >
              Bringing together engineering expertise, system design, technical validation, and commissioning experience across conventional thermal and nuclear power generation projects.
            </motion.p>

            {/* CTA buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-5 mb-8"
            >
              <button
                onClick={() => onSelectSlide?.('experience')}
                className="group relative px-8 py-4 rounded-full border-2 border-[#FF720C]/60 font-mono text-sm tracking-[0.16em] uppercase text-[#FF720C] font-bold hover:border-[#FF720C] hover:bg-[#FF720C]/15 transition-all duration-300 cursor-pointer shadow-md flex items-center gap-2.5"
              >
                <span>EXPLORE EXPERIENCE</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
              <a
                href="https://www.linkedin.com/in/mahesh-dungrani-90a2482a/"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 rounded-full bg-[#FF720C] font-mono text-sm tracking-[0.16em] uppercase text-[#100D0B] font-bold hover:bg-[#A83F0B] hover:shadow-[0_0_25px_rgba(255,114,12,0.4)] transition-all duration-300 shadow-lg"
              >
                CONNECT ON LINKEDIN
              </a>
            </motion.div>

            {/* Location */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-2.5 font-mono text-xs sm:text-sm tracking-[0.25em] text-[#A9A19A]"
            >
              <MapPin size={18} className="text-[#FF720C]" />
              MUMBAI, MAHARASHTRA, INDIA
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
