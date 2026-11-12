import { motion } from 'framer-motion';
import { projectsData } from '../data/portfolio';

function NuclearPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="nuclear-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
          <circle cx="30" cy="30" r="12" fill="none" stroke="#3B82F6" strokeWidth="0.8" />
          <ellipse cx="30" cy="30" rx="24" ry="8" fill="none" stroke="#3B82F6" strokeWidth="0.5" transform="rotate(0 30 30)" />
          <ellipse cx="30" cy="30" rx="24" ry="8" fill="none" stroke="#3B82F6" strokeWidth="0.5" transform="rotate(60 30 30)" />
          <ellipse cx="30" cy="30" rx="24" ry="8" fill="none" stroke="#3B82F6" strokeWidth="0.5" transform="rotate(120 30 30)" />
          <circle cx="30" cy="30" r="3" fill="#3B82F6" opacity="0.3" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#nuclear-pattern)" />
    </svg>
  );
}

function ThermalPattern() {
  return (
    <svg className="absolute inset-0 w-full h-full opacity-[0.06] pointer-events-none" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern id="thermal-pattern" width="60" height="60" patternUnits="userSpaceOnUse">
          <path d="M15 50 Q20 35 15 25 Q10 15 20 5 Q25 15 30 25 Q35 35 30 50" fill="none" stroke="#EF4444" strokeWidth="0.6" />
          <path d="M40 50 Q45 32 40 22 Q35 12 45 2 Q50 12 55 22 Q60 32 55 50" fill="none" stroke="#EF4444" strokeWidth="0.6" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#thermal-pattern)" />
    </svg>
  );
}

export default function Projects() {
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
          04
        </span>
        <span className="w-6 h-px bg-[#FF720C]/30" />
        <span className="font-mono text-sm tracking-[0.25em] text-[#A9A19A] uppercase">
          PROJECT EXPERIENCE
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
        Engineering Applications Across Power Generation.
      </motion.h2>

      {/* ── 2-Card Side by Side Grid ── */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 text-left">
        {projectsData.map((project, index) => {
          const isNuclear = project.type === 'nuclear';

          return (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.2 + 0.1 * index }}
              className="group relative bg-[#19130F] border border-white/10 rounded-3xl overflow-hidden transition-all duration-300 hover:border-[#FF720C]/40 hover:shadow-2xl flex flex-col justify-between"
            >
              {/* Tint overlay */}
              <div
                className={`absolute inset-0 ${
                  isNuclear ? 'bg-blue-500/[0.04]' : 'bg-red-500/[0.04]'
                }`}
              />

              {/* SVG Pattern */}
              {isNuclear ? <NuclearPattern /> : <ThermalPattern />}

              {/* Content */}
              <div className="relative z-10 p-8 sm:p-10 flex flex-col h-full justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs sm:text-sm tracking-widest text-[#77716B] uppercase font-semibold">
                      PROJECT 0{project.id}
                    </span>
                    <span
                      className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full font-mono text-xs sm:text-sm tracking-wider uppercase font-semibold ${
                        isNuclear
                          ? 'bg-blue-500/10 text-blue-400 border border-blue-500/30'
                          : 'bg-red-500/10 text-red-400 border border-red-500/30'
                      }`}
                    >
                      <span className={`w-2 h-2 rounded-full ${isNuclear ? 'bg-blue-400' : 'bg-red-400'}`} />
                      {project.type}
                    </span>
                  </div>

                  <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F0E9] mb-4 leading-tight">
                    {project.title}
                  </h3>

                  <div className="flex flex-wrap gap-2.5 mb-5">
                    <span className="px-3.5 py-1.5 rounded-lg bg-[#FF720C]/10 text-[#FF720C] font-mono text-xs sm:text-sm font-semibold border border-[#FF720C]/25">
                      {project.organization}
                    </span>
                    <span className="px-3.5 py-1.5 rounded-lg bg-white/5 text-[#A9A19A] font-mono text-xs sm:text-sm border border-white/10">
                      {project.category}
                    </span>
                  </div>

                  <p className="text-[#F5F0E9] text-base sm:text-lg leading-relaxed mb-6 font-light">
                    {project.description}
                  </p>

                  <ul className="space-y-3 mb-4">
                    {project.showcaseItems.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-sm sm:text-base text-[#F5F0E9] leading-relaxed">
                        <span className="mt-2 w-2 h-2 rounded-full bg-[#FF720C] shrink-0 shadow-[0_0_8px_#FF720C]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
