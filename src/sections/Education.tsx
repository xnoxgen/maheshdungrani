import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award, Cpu, Activity, Gauge, ShieldAlert } from 'lucide-react';

const coreSubjects = [
  {
    icon: Gauge,
    title: 'Process Instrumentation',
    desc: 'Transducers, transmitters, signal conditioning, and precision physical measurement.',
  },
  {
    icon: Activity,
    title: 'Control System Engineering',
    desc: 'Linear control theory, feedback mechanics, closed-loop stability, and dynamic response.',
  },
  {
    icon: Cpu,
    title: 'Industrial Automation',
    desc: 'Microprocessor-based systems, digital electronics, PLC/DCS architectures, and sequential logic.',
  },
  {
    icon: ShieldAlert,
    title: 'Power System Protection',
    desc: 'Protective interlocks, fault detection, and high-reliability industrial instrumentation.',
  },
];

export default function Education() {
  return (
    <div className="w-full h-full flex items-center justify-center max-w-7xl mx-auto px-6 md:px-12 lg:px-16 py-8 select-none">
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* ── Left Column: Academic Credentials Card ── */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:col-span-6 text-left"
        >
          {/* Section Label */}
          <div className="flex items-center gap-4 mb-5">
            <span className="w-12 h-px bg-[#FF720C]/60" />
            <span className="font-mono text-sm tracking-[0.25em] text-[#FF720C] font-semibold uppercase">
              05
            </span>
            <span className="w-6 h-px bg-[#FF720C]/40" />
            <span className="font-mono text-sm tracking-[0.25em] text-[#A9A19A] uppercase">
              ACADEMIC FOUNDATION
            </span>
          </div>

          {/* Heading */}
          <h2 className="font-['Playfair_Display',serif] text-4xl sm:text-5xl lg:text-6xl font-bold text-[#F5F0E9] leading-[1.15] mb-6">
            Academic <br />
            <span className="italic text-[#FF720C]">Foundation.</span>
          </h2>

          {/* Degree Card */}
          <div className="relative bg-[#19130F] border border-white/10 rounded-3xl p-8 sm:p-10 shadow-2xl overflow-hidden hover:border-[#FF720C]/40 transition-all duration-300">
            {/* Glow */}
            <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FF720C]/[0.07] blur-3xl pointer-events-none" />

            <div className="flex items-center justify-between mb-5">
              <div className="w-14 h-14 rounded-2xl bg-[#FF720C]/10 border border-[#FF720C]/30 flex items-center justify-center">
                <GraduationCap className="w-7 h-7 text-[#FF720C]" />
              </div>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#FF720C]/10 border border-[#FF720C]/30 font-mono text-xs sm:text-sm font-semibold text-[#FF720C] uppercase tracking-wider">
                <Award className="w-4 h-4" />
                DISTINCTION
              </span>
            </div>

            <h3 className="font-['Playfair_Display',serif] text-3xl sm:text-4xl font-bold text-[#F5F0E9] mb-2 leading-tight">
              Bachelor of Engineering
            </h3>
            <p className="font-mono text-lg sm:text-xl text-[#FF720C] font-semibold mb-4">
              Instrumentation &amp; Control
            </p>

            <p className="text-[#F5F0E9] text-base sm:text-lg font-medium mb-4 leading-relaxed">
              Shantilal Shah Engineering College, Bhavnagar
            </p>

            <div className="flex flex-wrap items-center gap-4 text-sm font-mono text-[#A9A19A] pt-5 border-t border-white/10">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-[#FF720C]" />
                1996 – 2000
              </span>
              <span className="text-white/20">•</span>
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF720C]" />
                Bhavnagar, Gujarat, India
              </span>
            </div>
          </div>
        </motion.div>

        {/* ── Right Column: Core Disciplines Matrix ── */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.15, ease: [0.22, 1, 0.36, 1] as const }}
          className="lg:col-span-6"
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {coreSubjects.map((item, i) => {
              const Icon = item.icon;
              return (
                <div
                  key={i}
                  className="bg-[#19130F] border border-white/10 rounded-2xl p-7 text-left hover:border-[#FF720C]/40 transition-all duration-300 shadow-lg flex flex-col justify-between"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#FF720C]/10 border border-[#FF720C]/20 flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-[#FF720C]" />
                  </div>
                  <div>
                    <h4 className="font-['Playfair_Display',serif] text-xl font-bold text-[#F5F0E9] mb-2">
                      {item.title}
                    </h4>
                    <p className="text-sm sm:text-base text-[#A9A19A] font-light leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
