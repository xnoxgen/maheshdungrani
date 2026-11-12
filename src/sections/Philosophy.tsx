import { motion } from 'framer-motion';

const lines = [
  'Precision in Design.',
  'Reliability in Execution.',
  'Excellence in Engineering.',
];

export default function Philosophy() {
  return (
    <section className="relative py-32 md:py-44 w-full overflow-hidden bg-[#19130F] flex flex-col items-center justify-center">
      {/* Ambient orange radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse at 50% 50%, rgba(255,114,12,0.08) 0%, transparent 70%)',
        }}
      />

      {/* Decorative horizontal lines */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.05]">
        {Array.from({ length: 12 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-[#FF720C]"
            style={{ top: `${8 + i * 8}%` }}
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, delay: i * 0.08, ease: 'easeOut' }}
          />
        ))}
      </div>

      <div className="relative max-w-5xl w-full mx-auto px-6 md:px-12 lg:px-16 text-center flex flex-col items-center">
        {/* Editorial headline */}
        <div className="mb-12 md:mb-16">
          {lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, delay: i * 0.18 }}
              className="font-['Playfair_Display',serif] text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-[#F5F0E9] leading-tight"
            >
              {line}
            </motion.p>
          ))}
        </div>

        {/* Supporting text */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="max-w-3xl mx-auto text-[#A9A19A] text-xl sm:text-2xl leading-relaxed font-light"
        >
          Engineering critical infrastructure requires more than technical
          knowledge. It demands accuracy, systematic thinking, disciplined
          validation, and an uncompromising commitment to reliability.
        </motion.p>
      </div>
    </section>
  );
}
