import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronUp } from 'lucide-react';
import { LinkedInIcon } from '../components/ui/Icons';
import { navLinks } from '../data/portfolio';

export default function Footer() {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowBackToTop(window.scrollY > 400);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToTop = () =>
    window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
      <footer className="relative w-full bg-[#100D0B] border-t border-white/10 flex flex-col items-center">
        <div className="max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-16 py-16 md:py-24 flex flex-col items-center text-center">
          {/* Top block: Name & Positioning */}
          <div className="mb-10 flex flex-col items-center">
            <h3 className="font-['Playfair_Display',serif] text-2xl sm:text-3xl font-bold text-[#F5F0E9] tracking-wide mb-3">
              MAHESH DUNGRANI
            </h3>
            <p className="font-mono text-sm sm:text-base tracking-[0.25em] text-[#FF720C] uppercase font-semibold">
              Control &amp; Instrumentation | Thermal &amp; Nuclear Power
            </p>
          </div>

          {/* Center: Navigation Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 mb-12">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="font-mono text-sm sm:text-base tracking-[0.16em] text-[#A9A19A] hover:text-[#FF720C] uppercase transition-colors font-medium"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.linkedin.com/in/mahesh-dungrani-90a2482a/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#A9A19A] hover:text-[#FF720C] transition-colors p-1"
              aria-label="LinkedIn Profile"
            >
              <LinkedInIcon className="w-5 h-5 text-[#FF720C]" />
            </a>
          </div>

          {/* Bottom row */}
          <div className="w-full border-t border-white/10 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4 text-sm font-mono text-[#77716B]">
            <p>&copy; 2026 Mahesh Dungrani. All Rights Reserved.</p>
            <p>Mumbai, Maharashtra, India</p>
          </div>
        </div>
      </footer>

      {/* Back to Top */}
      <AnimatePresence>
        {showBackToTop && (
          <motion.button
            key="back-to-top"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.25 }}
            className="fixed bottom-8 right-8 z-50 w-12 h-12 rounded-full bg-[#FF720C] hover:bg-[#A83F0B] text-[#100D0B] flex items-center justify-center transition-all shadow-2xl cursor-pointer hover:scale-110"
            aria-label="Back to top"
          >
            <ChevronUp className="w-6 h-6 stroke-[2.5]" />
          </motion.button>
        )}
      </AnimatePresence>
    </>
  );
}
