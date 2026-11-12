import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { navLinks } from '../data/portfolio';

interface NavbarProps {
  activeSlide: string;
  onSelectSlide: (slideId: string) => void;
}

export default function Navbar({ activeSlide, onSelectSlide }: NavbarProps) {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleNavClick = (slideId: string) => {
    setMobileOpen(false);
    onSelectSlide(slideId);
  };

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 w-full flex justify-center bg-[#100D0B]/90 backdrop-blur-2xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.5)]">
        <nav className="relative max-w-7xl w-full mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between h-20 md:h-24">
          {/* Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3.5 group z-10 cursor-pointer text-left bg-transparent border-0"
          >
            <span className="relative flex items-center justify-center w-11 h-11 rounded-lg border border-[#FF720C]/70 bg-[#FF720C]/15 font-serif text-base font-bold text-[#FF720C] tracking-wide transition-all duration-300 group-hover:scale-105 group-hover:bg-[#FF720C]/25 group-hover:shadow-[0_0_20px_rgba(255,114,12,0.3)]">
              MD
            </span>
            <span className="hidden sm:block font-mono text-sm md:text-base tracking-[0.2em] font-bold text-[#F5F0E9] group-hover:text-[#FF720C] transition-colors">
              MAHESH DUNGRANI
            </span>
          </button>

          {/* Desktop links (centered slide switcher) */}
          <ul className="hidden lg:flex items-center gap-4 xl:gap-7 absolute left-1/2 -translate-x-1/2">
            {navLinks.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeSlide === id;
              return (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(id)}
                    className={`relative px-2.5 py-2 font-mono text-xs xl:text-sm tracking-[0.14em] uppercase transition-all duration-300 cursor-pointer ${
                      isActive
                        ? 'text-[#FF720C] font-semibold'
                        : 'text-[#A9A19A] hover:text-[#F5F0E9] hover:scale-105'
                    }`}
                  >
                    {link.label}
                    {isActive && (
                      <motion.span
                        layoutId="slide-indicator"
                        className="absolute bottom-0 left-2 right-2 h-0.5 bg-[#FF720C] shadow-[0_0_12px_#FF720C]"
                        transition={{ type: 'spring', stiffness: 380, damping: 28 }}
                      />
                    )}
                  </button>
                </li>
              );
            })}
          </ul>

          {/* Right: CTA + hamburger */}
          <div className="flex items-center gap-4 z-10">
            <button
              onClick={() => handleNavClick('contact')}
              className="hidden md:inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF720C] text-[#100D0B] font-mono text-xs md:text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#A83F0B] hover:shadow-[0_0_25px_rgba(255,114,12,0.4)] transition-all duration-300 cursor-pointer shadow-md"
            >
              LET'S CONNECT
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden relative z-50 flex items-center justify-center w-11 h-11 text-[#F5F0E9] cursor-pointer"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-40 bg-black/80 backdrop-blur-md lg:hidden"
            />
            <motion.div
              key="drawer"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
              className="fixed top-0 right-0 z-40 w-80 h-full bg-[#19130F] border-l border-white/10 flex flex-col pt-28 px-8 lg:hidden shadow-2xl"
            >
              <ul className="flex flex-col gap-3">
                {navLinks.map((link, i) => {
                  const id = link.href.replace('#', '');
                  const isActive = activeSlide === id;
                  return (
                    <motion.li
                      key={link.href}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05, duration: 0.35 }}
                    >
                      <button
                        onClick={() => handleNavClick(id)}
                        className={`w-full text-left px-5 py-3.5 rounded-xl font-mono text-base tracking-[0.18em] uppercase transition-all duration-200 cursor-pointer ${
                          isActive
                            ? 'text-[#FF720C] bg-[#FF720C]/15 font-semibold'
                            : 'text-[#A9A19A] hover:text-[#F5F0E9] hover:bg-white/5'
                        }`}
                      >
                        {link.label}
                      </button>
                    </motion.li>
                  );
                })}
              </ul>

              <div className="mt-auto pb-12">
                <button
                  onClick={() => handleNavClick('contact')}
                  className="flex items-center justify-center w-full px-6 py-4 rounded-full bg-[#FF720C] text-[#100D0B] font-mono text-sm font-bold tracking-[0.15em] uppercase hover:bg-[#A83F0B] transition-colors shadow-lg cursor-pointer"
                >
                  LET'S CONNECT
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
