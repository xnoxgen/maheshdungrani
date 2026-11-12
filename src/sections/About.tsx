import { motion } from 'framer-motion';
import { statsData } from '../data/portfolio';

const narrative = [
  'Mahesh Dungrani is a Control & Instrumentation Lead Design and Engineering Professional with extensive experience across critical power generation sectors.',
  'Currently at Nuclear Power Corporation of India Limited (NPCIL), he leads the design, technical validation, and regulatory safety approval processes of C&I systems for 2 × 700 MWe Pressurised Heavy Water Reactor (PHWR) nuclear projects.',
  'Previously at Gujarat Industries Power Company Limited (GIPCL), he spearheaded Distributed Control Systems (DCS), boiler control, turbine governing, and supervisory instrumentation for 2 × 125 MWe thermal power projects.',
];

export default function About() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-6xl mx-auto px-6 md:px-12 py-8 text-center select-none">
      {/* ── Section Label ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4 justify-center mx-auto"
      >
        <span className="w-12 h-px bg-[#FF720C]/50" />
        <span className="font-mono text-sm tracking-[0.25em] text-[#FF720C] font-semibold uppercase">
          01
        </span>
        <span className="w-6 h-px bg-[#FF720C]/30" />
        <span className="font-mono text-sm tracking-[0.25em] text-[#A9A19A] uppercase">
          ABOUT
        </span>
        <span className="w-12 h-px bg-[#FF720C]/50" />
      </motion.div>

      {/* ── Heading ── */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F0E9] leading-tight mb-8"
      >
        Experience Built on Engineering Excellence.
      </motion.h2>

      {/* ── Narrative ── */}
      <div className="max-w-5xl mx-auto space-y-5 mb-10 text-center">
        {narrative.map((text, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + 0.08 * i }}
            className="text-[#F5F0E9] text-lg sm:text-xl md:text-2xl leading-relaxed font-['Inter',sans-serif] font-light"
          >
            {text}
          </motion.p>
        ))}
      </div>

      {/* ── Stats Grid ── */}
      <motion.div
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.35 }}
        className="max-w-5xl w-full mx-auto grid grid-cols-2 md:grid-cols-4 border border-white/10 rounded-3xl overflow-hidden bg-[#19130F] shadow-2xl mb-8"
      >
        {statsData.map((stat, i) => (
          <div
            key={i}
            className={`p-6 sm:p-8 text-center flex flex-col items-center justify-center ${
              i < statsData.length - 1 ? 'border-r border-white/10' : ''
            } ${i < 2 ? 'border-b md:border-b-0 border-white/10' : ''}`}
          >
            <div className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E9] mb-2 tracking-tight">
              {stat.value}
            </div>
            <div className="font-['IBM_Plex_Mono',monospace] text-xs sm:text-sm tracking-[0.2em] text-[#FF720C] uppercase font-semibold mb-1.5">
              {stat.label}
            </div>
            <div className="font-['IBM_Plex_Mono',monospace] text-xs sm:text-sm text-[#A9A19A]">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </motion.div>

      {/* ── Philosophy banner ── */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="inline-flex items-center gap-3 px-7 py-3 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm font-mono text-[#A9A19A]"
      >
        <span className="w-2.5 h-2.5 rounded-full bg-[#FF720C] shadow-[0_0_8px_#FF720C]" />
        <span>Precision in Design • Reliability in Execution • Excellence in Engineering</span>
      </motion.div>
    </div>
  );
}
