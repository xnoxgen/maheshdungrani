import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  id: string;
  children: ReactNode;
  className?: string;
}

export function SectionWrapper({ id, children, className = '' }: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`relative py-28 md:py-36 lg:py-44 w-full flex flex-col items-center justify-center scroll-mt-24 ${className}`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 lg:px-16 w-full flex flex-col items-center text-center">
        {children}
      </div>
    </section>
  );
}

interface SectionLabelProps {
  number: string;
  label: string;
  center?: boolean;
}

export function SectionLabel({ number, label, center = true }: SectionLabelProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.6 }}
      className={`flex items-center gap-4 mb-6 ${center ? 'justify-center mx-auto' : ''}`}
    >
      <span className="w-10 sm:w-16 h-px bg-[#FF720C]/50" />
      <span className="font-mono text-sm md:text-base tracking-[0.25em] text-[#FF720C] font-semibold uppercase">
        {number}
      </span>
      <span className="w-6 h-px bg-[#FF720C]/30" />
      <span className="font-mono text-sm md:text-base tracking-[0.25em] text-[#A9A19A] uppercase">
        {label}
      </span>
      <span className="w-10 sm:w-16 h-px bg-[#FF720C]/50" />
    </motion.div>
  );
}

interface SectionHeadingProps {
  children: ReactNode;
  className?: string;
  center?: boolean;
}

export function SectionHeading({ children, className = '', center = true }: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.7, delay: 0.1 }}
      className={`font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F0E9] leading-tight mb-14 md:mb-20 ${
        center ? 'text-center mx-auto' : ''
      } ${className}`}
    >
      {children}
    </motion.h2>
  );
}
