/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ThemeSwitcher from './components/ThemeSwitcher';
import { ArrowUp } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function App() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, []);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-[#F5F5F5] font-sans antialiased selection:bg-accent/30 selection:text-accent">
      {/* Floating navigation bar */}
      <Navbar />

      {/* Main sections */}
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Dynamic Theme Color Switcher Panel */}
      <ThemeSwitcher />

      {/* Elegant minimalist footer */}
      <footer className="py-12 px-6 border-t border-white/10 bg-[#0A0A0A] text-center text-zinc-500 font-light text-xs space-y-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-zinc-400">
            © {new Date().getFullYear()} CHANDANA. ALL RIGHTS RESERVED.
          </p>
          <p className="text-zinc-600 font-mono text-[9px] uppercase tracking-widest">
            Crafted with Custom Color Themes
          </p>
        </div>
      </footer>

      {/* Floating Back To Top Indicator button */}
      {showScrollTop && (
        <button
          onClick={handleScrollToTop}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-sm bg-[#0D0D0D]/90 hover:bg-white/5 border border-white/15 hover:border-accent/40 text-zinc-400 hover:text-accent shadow-xl transition-all cursor-pointer flex items-center justify-center backdrop-blur-md"
          aria-label="Scroll to top"
          id="back_to_top_btn"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      )}
    </div>
  );
}
