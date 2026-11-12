import { motion, AnimatePresence } from 'framer-motion';
import { MapPin, Calendar, CheckCircle2, ChevronDown, ChevronUp, Award } from 'lucide-react';

interface ExperienceProps {
  currentPhase: number;
  onPhaseChange: (phase: number) => void;
  onNextSlide?: () => void;
  onPrevSlide?: () => void;
}

const phases = [
  {
    id: 'gipcl',
    stageNumber: '01 / 03',
    milestoneYear: '2001 — 2010',
    durationLabel: '9 Years',
    badge: 'THERMAL POWER INFRASTRUCTURE',
    organization: 'Gujarat Industries Power Company Limited (GIPCL)',
    designation: 'Deputy Manager – Control & Instrumentation',
    location: 'Surat, Gujarat, India',
    scope: '2 × 125 MWe Coal-Based Thermal Power Projects',
    summary:
      'Engineered, commissioned, and maintained comprehensive C&I systems for 2 × 125 MWe coal-based thermal power projects, gaining deep practical expertise in DCS architecture, boiler-turbine protection, and plant reliability.',
    responsibilities: [
      'Erection, commissioning, and Factory Acceptance Testing (FAT) of MaxDNA distributed control systems.',
      'Troubleshooting and implementation of boiler control and protection logic in Siemens TELEPERM ME DCS.',
      'Maintenance and troubleshooting of turbine governing and protection systems using ABB PROCONTROL P13/42 DCS.',
      'Calibration, upkeep, and diagnostics of Bently Nevada 3300 & 3500 series turbine supervisory instrumentation.',
      'Field instrumentation technology upgrades, C&I vendor procurement, and turnaround maintenance planning.',
    ],
    tags: [
      '2 × 125 MWe Thermal',
      'MaxDNA DCS',
      'Siemens TELEPERM ME',
      'ABB PROCONTROL',
      'Bently Nevada 3500',
      'Boiler & Turbine Protection',
    ],
  },
  {
    id: 'npcil',
    stageNumber: '02 / 03',
    milestoneYear: '2010 — PRESENT',
    durationLabel: '16 Years',
    badge: 'NUCLEAR POWER ENGINEERING',
    organization: 'Nuclear Power Corporation of India Limited (NPCIL)',
    designation: 'Technical Officer – Control & Instrumentation',
    location: 'Mumbai Metropolitan Region, India',
    scope: '2 × 700 MWe PHWR Nuclear Power Projects',
    summary:
      'Leading design, technical validation, and regulatory approval processes for safety-critical Control & Instrumentation systems powering India’s 2 × 700 MWe Pressurised Heavy Water Reactor (PHWR) nuclear power projects.',
    responsibilities: [
      'Design and engineering documentation: P&IDs, wiring diagrams, logic diagrams, mimic diagrams, and cable schedules for 700 MWe PHWRs.',
      'Formulation and review of System Validation Plans and procedures for safety-critical computer-based systems.',
      'Comprehensive verification, testing, and functional validation of nuclear reactor control logic and protective interlocks.',
      'Coordination of C&I design engineering approvals and Preliminary Safety Analysis Reports (PSAR) with national regulatory authorities.',
      'Technical bid evaluation for C&I packages and ongoing design engineering support for operating nuclear power plants.',
    ],
    tags: [
      '2 × 700 MWe PHWR',
      'Nuclear Safety Engineering',
      'Computer System Validation',
      'Regulatory Approvals (AERB)',
      'Safety Analysis Reports',
      'Field Instrumentation',
    ],
  },
  {
    id: 'summary',
    stageNumber: '03 / 03',
    milestoneYear: '2001 — PRESENT',
    durationLabel: '24+ Years',
    badge: 'EXECUTIVE CAREER CULMINATION',
    organization: '24+ Years Across Critical Power Infrastructure',
    designation: 'Control & Instrumentation Lead Design and Engineering Professional',
    location: 'Mumbai & Gujarat, India',
    scope: 'Conventional Thermal & Nuclear Power Sectors',
    summary:
      'A continuous, 24+ year trajectory of engineering leadership combining hands-on plant commissioning with advanced reactor C&I system design, computer validation, and strict regulatory safety compliance.',
    pillars: [
      { value: '24+', label: 'Years Experience', sub: 'Critical Power Infrastructure' },
      { value: '16', label: 'Years at NPCIL', sub: '2 × 700 MWe PHWR Nuclear' },
      { value: '9', label: 'Years at GIPCL', sub: '2 × 125 MWe Thermal Power' },
      { value: '2', label: 'Core Sectors', sub: 'Thermal & Nuclear Energy' },
    ],
    quote:
      'From boiler-turbine DCS commissioning in thermal utilities to nuclear reactor protection and validation at NPCIL, delivering precision in system design and zero-compromise reliability.',
    tags: [
      'MaxDNA',
      'TELEPERM ME',
      'PROCONTROL P13/42',
      'Bently Nevada 3500',
      '700 MWe PHWR',
      'System Validation',
      'Regulatory Compliance',
    ],
  },
];

export default function Experience({
  currentPhase = 0,
  onPhaseChange,
  onNextSlide,
  onPrevSlide,
}: ExperienceProps) {
  const phase = phases[currentPhase];

  const changePhase = (delta: number) => {
    if (delta > 0) {
      if (currentPhase < phases.length - 1) {
        onPhaseChange(currentPhase + 1);
      } else if (onNextSlide) {
        onNextSlide();
      }
    } else if (delta < 0) {
      if (currentPhase > 0) {
        onPhaseChange(currentPhase - 1);
      } else if (onPrevSlide) {
        onPrevSlide();
      }
    }
  };

  return (
    <div className="w-full h-full flex flex-col items-center justify-center max-w-7xl mx-auto px-6 md:px-12 py-6 text-center select-none">
      {/* ── Section Label ── */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="flex items-center gap-4 mb-3 justify-center mx-auto"
      >
        <span className="w-12 h-px bg-[#FF720C]/50" />
        <span className="font-mono text-sm tracking-[0.25em] text-[#FF720C] font-semibold uppercase">
          03
        </span>
        <span className="w-6 h-px bg-[#FF720C]/30" />
        <span className="font-mono text-sm tracking-[0.25em] text-[#A9A19A] uppercase">
          CAREER JOURNEY
        </span>
        <span className="w-12 h-px bg-[#FF720C]/50" />
      </motion.div>

      {/* ── Section Heading ── */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-['Playfair_Display',serif] text-3xl sm:text-4xl md:text-5xl font-bold text-[#F5F0E9] leading-tight mb-5"
      >
        A Career Across Critical Power Infrastructure.
      </motion.h2>

      {/* ── INTERACTIVE HORIZONTAL MILESTONE TRACK ── */}
      <div className="w-full max-w-5xl mx-auto mb-7">
        <div className="relative flex items-center justify-between">
          {/* Background track line */}
          <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-white/10 rounded-full" />
          
          {/* Animated active gradient bar */}
          <motion.div
            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-gradient-to-r from-[#FF720C] via-[#FF720C] to-[#A83F0B] rounded-full shadow-[0_0_12px_#FF720C]"
            animate={{
              width: currentPhase === 0 ? '0%' : currentPhase === 1 ? '50%' : '100%',
            }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] as const }}
          />

          {/* Milestone 1: GIPCL */}
          <button
            onClick={() => onPhaseChange(0)}
            className="relative z-10 flex flex-col items-center group cursor-pointer bg-transparent border-0"
          >
            <div
              className={`w-7 h-7 rounded-full border-3 transition-all duration-300 flex items-center justify-center ${
                currentPhase === 0
                  ? 'bg-[#FF720C] border-[#100D0B] shadow-[0_0_16px_#FF720C] scale-125'
                  : currentPhase > 0
                  ? 'bg-[#FF720C] border-[#100D0B]'
                  : 'bg-[#19130F] border-white/20'
              }`}
            >
              {currentPhase === 0 && <span className="w-2.5 h-2.5 rounded-full bg-[#100D0B]" />}
            </div>
            <span
              className={`font-mono text-xs sm:text-sm tracking-wider mt-2.5 transition-colors ${
                currentPhase === 0 ? 'text-[#FF720C] font-bold' : 'text-[#A9A19A]'
              }`}
            >
              2001 — 2010 (GIPCL)
            </span>
          </button>

          {/* Milestone 2: NPCIL */}
          <button
            onClick={() => onPhaseChange(1)}
            className="relative z-10 flex flex-col items-center group cursor-pointer bg-transparent border-0"
          >
            <div
              className={`w-7 h-7 rounded-full border-3 transition-all duration-300 flex items-center justify-center ${
                currentPhase === 1
                  ? 'bg-[#FF720C] border-[#100D0B] shadow-[0_0_16px_#FF720C] scale-125'
                  : currentPhase > 1
                  ? 'bg-[#FF720C] border-[#100D0B]'
                  : 'bg-[#19130F] border-white/20'
              }`}
            >
              {currentPhase === 1 && <span className="w-2.5 h-2.5 rounded-full bg-[#100D0B]" />}
            </div>
            <span
              className={`font-mono text-xs sm:text-sm tracking-wider mt-2.5 transition-colors ${
                currentPhase === 1 ? 'text-[#FF720C] font-bold' : 'text-[#A9A19A]'
              }`}
            >
              2010 — PRESENT (NPCIL)
            </span>
          </button>

          {/* Milestone 3: 24+ Years Summary */}
          <button
            onClick={() => onPhaseChange(2)}
            className="relative z-10 flex flex-col items-center group cursor-pointer bg-transparent border-0"
          >
            <div
              className={`w-7 h-7 rounded-full border-3 transition-all duration-300 flex items-center justify-center ${
                currentPhase === 2
                  ? 'bg-[#FF720C] border-[#100D0B] shadow-[0_0_16px_#FF720C] scale-125 animate-pulse'
                  : 'bg-[#19130F] border-white/20'
              }`}
            >
              {currentPhase === 2 && <span className="w-2.5 h-2.5 rounded-full bg-[#100D0B]" />}
            </div>
            <span
              className={`font-mono text-xs sm:text-sm tracking-wider mt-2.5 transition-colors ${
                currentPhase === 2 ? 'text-[#FF720C] font-bold' : 'text-[#A9A19A]'
              }`}
            >
              24+ YEARS (SUMMARY)
            </span>
          </button>
        </div>
      </div>

      {/* ── PINNED CARD CONTAINER ── */}
      <div className="w-full max-w-5xl min-h-[400px] flex items-center justify-center relative">
        <AnimatePresence mode="wait">
          {/* PHASE 1 & 2: GIPCL & NPCIL */}
          {currentPhase < 2 && (
            <motion.div
              key={phase.id}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
              className="w-full bg-[#19130F] border border-white/10 rounded-3xl p-8 sm:p-10 text-left shadow-2xl relative overflow-hidden"
            >
              {/* Subtle accent glow */}
              <div className="absolute top-0 right-0 w-80 h-80 rounded-full bg-[#FF720C]/[0.06] blur-3xl pointer-events-none" />

              {/* Header Badges */}
              <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
                <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest text-[#FF720C] font-semibold uppercase bg-[#FF720C]/10 border border-[#FF720C]/30 px-4 py-1.5 rounded-full">
                  <Calendar className="w-4 h-4" />
                  {phase.milestoneYear} ({phase.durationLabel})
                </span>
                <span className="font-mono text-xs sm:text-sm tracking-widest text-[#77716B]">
                  PHASE {phase.stageNumber}
                </span>
              </div>

              {/* Title & Designation */}
              <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F0E9] leading-snug mb-2">
                {phase.organization}
              </h3>
              <p className="text-[#FF720C] font-mono text-base sm:text-lg font-semibold mb-4">
                {phase.designation}
              </p>

              {/* Location & Scope */}
              <div className="flex flex-wrap items-center gap-4 text-sm sm:text-base text-[#A9A19A] mb-5 pb-4 border-b border-white/10">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-[#FF720C]" />
                  <span>{phase.location}</span>
                </div>
                <span className="text-white/20">•</span>
                <div className="font-mono text-sm text-[#F5F0E9]">
                  Scope: <span className="text-[#FF720C] font-medium">{phase.scope}</span>
                </div>
              </div>

              {/* Responsibilities */}
              <ul className="space-y-3 mb-6">
                {phase.responsibilities?.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm sm:text-base text-[#F5F0E9] leading-relaxed">
                    <CheckCircle2 className="w-4 h-4 text-[#FF720C] shrink-0 mt-1" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              {/* Tags */}
              <div className="flex flex-wrap gap-2.5 pt-4 border-t border-white/10">
                {phase.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1 text-xs sm:text-sm font-mono font-medium rounded-full bg-white/5 text-[#A9A19A] border border-white/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}

          {/* PHASE 3: 24+ YEARS SUMMARY CULMINATION */}
          {currentPhase === 2 && (
            <motion.div
              key="summary-phase"
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] as const }}
              className="w-full bg-[#19130F] border border-[#FF720C]/30 rounded-3xl p-8 sm:p-10 text-center shadow-[0_0_40px_rgba(255,114,12,0.12)] relative overflow-hidden"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="inline-flex items-center gap-2 font-mono text-xs sm:text-sm tracking-widest text-[#FF720C] font-semibold uppercase bg-[#FF720C]/10 border border-[#FF720C]/30 px-4 py-1.5 rounded-full">
                  <Award className="w-4 h-4" />
                  2001 — PRESENT (24+ YEARS)
                </span>
                <span className="font-mono text-xs sm:text-sm tracking-widest text-[#77716B]">
                  PHASE 03 / 03
                </span>
              </div>

              <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl lg:text-4xl font-bold text-[#F5F0E9] mb-2">
                24+ Years of Power Infrastructure Leadership
              </h3>
              <p className="font-mono text-base sm:text-lg text-[#FF720C] font-semibold mb-6">
                Conventional Thermal &amp; Nuclear Reactor C&amp;I Engineering
              </p>

              {/* 4 Pillars Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-6">
                {phase.pillars?.map((p, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-2xl bg-[#100D0B] border border-white/10 flex flex-col items-center justify-center shadow-inner"
                  >
                    <span className="font-['Playfair_Display',serif] text-3xl sm:text-4xl lg:text-5xl font-bold text-[#F5F0E9] mb-1">
                      {p.value}
                    </span>
                    <span className="font-mono text-xs sm:text-sm text-[#FF720C] font-semibold uppercase">
                      {p.label}
                    </span>
                    <span className="font-mono text-xs text-[#77716B] mt-1 text-center">
                      {p.sub}
                    </span>
                  </div>
                ))}
              </div>

              {/* Summary quote */}
              <p className="text-base sm:text-lg text-[#F5F0E9] max-w-3xl mx-auto leading-relaxed mb-6 font-light italic">
                "{phase.quote}"
              </p>

              {/* Tags */}
              <div className="flex flex-wrap items-center justify-center gap-2.5 pt-4 border-t border-white/10">
                {phase.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="px-3.5 py-1 text-xs sm:text-sm font-mono font-medium rounded-full bg-[#FF720C]/10 text-[#FF720C] border border-[#FF720C]/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* ── SCROLL / INTERACTIVE CONTROLS PROMPT ── */}
      <div className="mt-5 flex items-center justify-center gap-4 text-xs sm:text-sm font-mono text-[#A9A19A]">
        <button
          onClick={() => changePhase(-1)}
          disabled={currentPhase === 0}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/10 transition-colors ${
            currentPhase === 0
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:border-[#FF720C] hover:text-[#FF720C] cursor-pointer'
          }`}
        >
          <ChevronUp className="w-4 h-4" />
          <span>PREV</span>
        </button>

        <span className="tracking-wider text-[#A9A19A] hidden sm:inline">
          <span className="text-[#FF720C] font-bold">Scroll</span> or use &uarr;&darr; keys to advance phase
        </span>

        <button
          onClick={() => changePhase(1)}
          disabled={currentPhase === phases.length - 1}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg border border-white/10 transition-colors ${
            currentPhase === phases.length - 1
              ? 'opacity-30 cursor-not-allowed'
              : 'hover:border-[#FF720C] hover:text-[#FF720C] cursor-pointer'
          }`}
        >
          <span>NEXT</span>
          <ChevronDown className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
