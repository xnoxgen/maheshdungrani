import { useState, useEffect, useCallback, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Navbar from './sections/Navbar';
import Hero from './sections/Hero';
import About from './sections/About';
import Expertise from './sections/Expertise';
import Experience from './sections/Experience';
import Projects from './sections/Projects';
import Education from './sections/Education';
import Contact from './sections/Contact';

const slides = [
  { id: 'home', title: 'Home' },
  { id: 'about', title: 'About' },
  { id: 'expertise', title: 'Expertise' },
  { id: 'experience', title: 'Experience' },
  { id: 'projects', title: 'Projects' },
  { id: 'education', title: 'Education' },
  { id: 'contact', title: 'Contact' },
];

export default function App() {
  const [activeSlide, setActiveSlide] = useState(() => {
    const hash = window.location.hash.replace('#', '');
    return slides.some((s) => s.id === hash) ? hash : 'home';
  });

  const [experiencePhase, setExperiencePhase] = useState(0);
  const [direction, setDirection] = useState(0);

  // Real-time refs to prevent stale closures and avoid re-binding listeners
  const activeSlideRef = useRef(activeSlide);
  activeSlideRef.current = activeSlide;

  const experiencePhaseRef = useRef(experiencePhase);
  experiencePhaseRef.current = experiencePhase;

  const lastScrollTimeRef = useRef(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const currentIndex = slides.findIndex((s) => s.id === activeSlide);

  const goToSlide = useCallback(
    (slideId: string) => {
      const targetIndex = slides.findIndex((s) => s.id === slideId);
      if (targetIndex !== -1 && targetIndex !== currentIndex) {
        setDirection(targetIndex > currentIndex ? 1 : -1);
        setActiveSlide(slideId);
        if (slideId === 'experience') {
          setExperiencePhase(0);
        }
        window.history.replaceState(null, '', `#${slideId}`);
      }
    },
    [currentIndex],
  );

  // Core navigation dispatcher for scroll, keyboard, touch, and buttons
  const triggerScroll = useCallback((delta: number) => {
    // Normalize and filter out minor jitters
    if (Math.abs(delta) < 10) return;

    // Strict 500ms timestamp cooldown (immune to re-render bugs / stuck timers)
    const now = Date.now();
    if (now - lastScrollTimeRef.current < 500) return;
    lastScrollTimeRef.current = now;

    const currentSlide = activeSlideRef.current;
    const currentPhase = experiencePhaseRef.current;

    if (delta > 0) {
      // ── FORWARD / DOWN ──
      // If inside experience and not on final phase (Phase 2), advance phase in-place
      if (currentSlide === 'experience' && currentPhase < 2) {
        setExperiencePhase(currentPhase + 1);
        return;
      }

      // Otherwise advance to next slide
      const currIdx = slides.findIndex((s) => s.id === currentSlide);
      if (currIdx < slides.length - 1) {
        const nextSlide = slides[currIdx + 1];
        setDirection(1);
        setActiveSlide(nextSlide.id);
        if (nextSlide.id === 'experience') {
          setExperiencePhase(0);
        }
        window.history.replaceState(null, '', `#${nextSlide.id}`);
      }
    } else {
      // ── BACKWARD / UP ──
      // If inside experience and not on first phase (Phase 0), retreat phase in-place
      if (currentSlide === 'experience' && currentPhase > 0) {
        setExperiencePhase(currentPhase - 1);
        return;
      }

      // Otherwise retreat to previous slide
      const currIdx = slides.findIndex((s) => s.id === currentSlide);
      if (currIdx > 0) {
        const prevSlide = slides[currIdx - 1];
        setDirection(-1);
        setActiveSlide(prevSlide.id);
        if (prevSlide.id === 'experience') {
          setExperiencePhase(2); // Landing backwards into experience starts at culmination summary
        }
        window.history.replaceState(null, '', `#${prevSlide.id}`);
      }
    }
  }, []);

  const handleStepForward = useCallback(() => {
    triggerScroll(120);
  }, [triggerScroll]);

  const handleStepBackward = useCallback(() => {
    triggerScroll(-120);
  }, [triggerScroll]);

  // Global mouse wheel listener with cross-browser deltaMode normalization
  useEffect(() => {
    const handleNativeWheel = (e: WheelEvent) => {
      // Prevent native browser scrolling / rubber-banding
      e.preventDefault();

      let dy = e.deltaY;
      let dx = e.deltaX;

      // Handle Windows / Firefox line scrolling mode (DOM_DELTA_LINE)
      if (e.deltaMode === 1) {
        dy *= 40;
        dx *= 40;
      } else if (e.deltaMode === 2) {
        dy *= 800;
        dx *= 800;
      }

      const dominantDelta = Math.abs(dy) >= Math.abs(dx) ? dy : dx;
      triggerScroll(dominantDelta);
    };

    window.addEventListener('wheel', handleNativeWheel, { passive: false });
    return () => {
      window.removeEventListener('wheel', handleNativeWheel);
    };
  }, [triggerScroll]);

  // React synthetic wheel handler on root container for backup event bubbling
  const handleContainerWheel = (e: React.WheelEvent) => {
    let dy = e.deltaY;
    let dx = e.deltaX;

    if (e.deltaMode === 1) {
      dy *= 40;
      dx *= 40;
    } else if (e.deltaMode === 2) {
      dy *= 800;
      dx *= 800;
    }

    const dominantDelta = Math.abs(dy) >= Math.abs(dx) ? dy : dx;
    triggerScroll(dominantDelta);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown' || e.key === 'ArrowRight' || e.key === 'PageDown' || e.key === ' ') {
        e.preventDefault();
        triggerScroll(120);
      } else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft' || e.key === 'PageUp') {
        e.preventDefault();
        triggerScroll(-120);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [triggerScroll]);

  // Mobile touch swipe gestures
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null || touchStartY.current === null) return;
    const diffX = touchStartX.current - e.changedTouches[0].clientX;
    const diffY = touchStartY.current - e.changedTouches[0].clientY;

    if (Math.abs(diffY) > Math.abs(diffX) && Math.abs(diffY) > 35) {
      triggerScroll(diffY > 0 ? 120 : -120);
    } else if (Math.abs(diffX) > 35) {
      triggerScroll(diffX > 0 ? 120 : -120);
    }
    touchStartX.current = null;
    touchStartY.current = null;
  };

  // Sync with browser back/forward buttons
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      if (slides.some((s) => s.id === hash)) {
        setActiveSlide(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const slideVariants = {
    enter: (dir: number) => ({
      y: dir > 0 ? 80 : -80,
      opacity: 0,
      scale: 0.98,
    }),
    center: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.55,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    },
    exit: (dir: number) => ({
      y: dir > 0 ? -80 : 80,
      opacity: 0,
      scale: 0.98,
      transition: {
        duration: 0.45,
        ease: [0.22, 1, 0.36, 1] as const,
      },
    }),
  };

  return (
    <div
      onWheel={handleContainerWheel}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative h-screen w-screen bg-[#100D0B] text-[#F5F0E9] overflow-hidden flex flex-col justify-between select-none"
    >
      {/* ── Fixed Floating Navbar ── */}
      <Navbar activeSlide={activeSlide} onSelectSlide={goToSlide} />

      {/* ── Slide Viewport Container ── */}
      <main className="relative flex-1 w-full flex items-center justify-center overflow-y-auto overflow-x-hidden pt-20 md:pt-24 pb-16 md:pb-20">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={activeSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            className="w-full min-h-full flex flex-col items-center justify-center px-4 md:px-8 py-2"
          >
            {activeSlide === 'home' && <Hero onSelectSlide={goToSlide} />}
            {activeSlide === 'about' && <About />}
            {activeSlide === 'expertise' && <Expertise />}
            {activeSlide === 'experience' && (
              <Experience
                currentPhase={experiencePhase}
                onPhaseChange={setExperiencePhase}
                onNextSlide={handleStepForward}
                onPrevSlide={handleStepBackward}
              />
            )}
            {activeSlide === 'projects' && <Projects />}
            {activeSlide === 'education' && <Education />}
            {activeSlide === 'contact' && <Contact />}
          </motion.div>
        </AnimatePresence>
      </main>

      {/* ── Fixed Bottom Slide Controls ── */}
      <footer className="fixed bottom-0 left-0 right-0 z-40 h-14 md:h-16 bg-[#100D0B]/85 backdrop-blur-xl border-t border-white/10 px-6 md:px-12 flex items-center justify-between">
        {/* Previous slide */}
        <button
          onClick={handleStepBackward}
          className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-[#A9A19A] hover:text-[#FF720C] uppercase tracking-wider transition-colors cursor-pointer p-1"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
          <span className="hidden sm:inline">PREV</span>
        </button>

        {/* Slide Indicators & Counter */}
        <div className="flex items-center gap-3 sm:gap-5">
          {slides.map((s) => {
            const isActive = s.id === activeSlide;
            return (
              <button
                key={s.id}
                onClick={() => goToSlide(s.id)}
                className="group relative py-2 cursor-pointer flex items-center"
                aria-label={`Go to ${s.title}`}
              >
                <span
                  className={`block transition-all duration-300 rounded-full ${
                    isActive
                      ? 'w-7 sm:w-8 h-2 bg-[#FF720C] shadow-[0_0_10px_#FF720C]'
                      : 'w-2 h-2 bg-white/20 group-hover:bg-white/50'
                  }`}
                />
              </button>
            );
          })}
          <span className="font-mono text-xs tracking-widest text-[#77716B] ml-2">
            0{currentIndex + 1} / 0{slides.length}
          </span>
        </div>

        {/* Next slide */}
        <button
          onClick={handleStepForward}
          className="flex items-center gap-1.5 font-mono text-xs sm:text-sm text-[#A9A19A] hover:text-[#FF720C] uppercase tracking-wider transition-colors cursor-pointer p-1"
          aria-label="Next slide"
        >
          <span className="hidden sm:inline">NEXT</span>
          <ChevronRight className="w-4 h-4" />
        </button>
      </footer>
    </div>
  );
}
