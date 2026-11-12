import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
import { SectionWrapper, SectionLabel, SectionHeading } from '../components/ui/SectionWrapper';
import { technologiesData } from '../data/portfolio';

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] as const },
  }),
};

export default function Technologies() {
  return (
    <SectionWrapper id="technologies">
      <SectionLabel number="05" label="SYSTEMS & TECHNOLOGIES" center />
      <SectionHeading center>Systems. Instrumentation. Control.</SectionHeading>

      <div className="w-full max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5">
        {technologiesData.map((tech, index) => (
          <motion.div
            key={tech.name}
            custom={index}
            variants={itemVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
            className="group bg-[#19130F] border border-white/10 rounded-xl p-6 sm:p-7 text-left transition-all duration-300 hover:border-[#FF720C]/40 hover:scale-[1.03] hover:shadow-xl flex flex-col justify-between"
          >
            <div>
              {/* Decorative accent dot */}
              <span className="block w-2.5 h-2.5 rounded-full bg-[#FF720C] mb-5 shadow-[0_0_8px_#FF720C] transition-transform duration-300 group-hover:scale-125" />

              {/* System name in readable bold font */}
              <h3 className="text-[#F5F0E9] text-base sm:text-lg font-bold leading-snug mb-2 font-['Inter',sans-serif]">
                {tech.name}
              </h3>
            </div>

            {/* Category */}
            <span className="font-mono text-xs sm:text-sm text-[#A9A19A] tracking-wider uppercase font-medium mt-4 pt-3 border-t border-white/5">
              {tech.category}
            </span>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
