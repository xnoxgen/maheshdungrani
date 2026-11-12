import { motion } from 'framer-motion';
import { expertiseData } from '../data/portfolio';

export default function Expertise() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-6 md:px-12 py-8 text-center select-none">
      {/* ── Section Label ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-4 justify-center mx-auto"
      >
        <span className="w-12 h-px bg-[#FF720C]/50" />
        <span className="font-mono text-sm tracking-[0.25em] text-[#FF720C] font-semibold uppercase">
          02
        </span>
        <span className="w-6 h-px bg-[#FF720C]/30" />
        <span className="font-mono text-sm tracking-[0.25em] text-[#A9A19A] uppercase">
          EXPERTISE
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
        Engineering Knowledge. Technical Precision.
      </motion.h2>

      {/* ── 6-Card Grid ── */}
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7 text-left">
        {expertiseData.map((category, i) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, delay: 0.15 + 0.05 * i }}
              className="group relative bg-[#19130F] border border-white/10 rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-[#FF720C]/40 hover:shadow-[0_0_30px_rgba(255,114,12,0.12)] flex flex-col justify-between"
            >
              <div>
                {/* Icon & Index */}
                <div className="mb-4 flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-[#FF720C]/10 border border-[#FF720C]/25 flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                    <Icon className="w-6 h-6 text-[#FF720C]" strokeWidth={1.75} />
                  </div>
                  <span className="font-mono text-xs tracking-widest text-[#77716B]">
                    0{i + 1}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-['Playfair_Display',serif] text-xl sm:text-2xl font-bold text-[#F5F0E9] mb-2 leading-snug">
                  {category.title}
                </h3>

                {/* Description */}
                <p className="text-[#A9A19A] text-sm sm:text-base leading-relaxed font-['Inter',sans-serif] mb-4 font-light">
                  {category.description}
                </p>

                {/* Divider */}
                <div className="w-full h-px bg-white/10 mb-4" />

                {/* Items */}
                <ul className="space-y-2.5">
                  {category.items.slice(0, 4).map((item, j) => (
                    <li key={j} className="flex items-start gap-2.5 text-sm text-[#F5F0E9]">
                      <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#FF720C] shrink-0 shadow-[0_0_6px_#FF720C]" />
                      <span className="font-mono leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
