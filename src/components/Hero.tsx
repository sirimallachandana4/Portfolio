/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      const offset = 90;
      const elementPosition = el.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative min-h-screen flex flex-col justify-center items-center pt-32 pb-24 px-6 sm:px-10 overflow-hidden bg-[#0A0A0A] text-[#F5F5F5] border-b border-white/10"
    >
      {/* Visual background lights */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/2 rounded-full blur-[150px] pointer-events-none" />
 
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.35, ease: 'easeOut' }}
        className="max-w-4xl w-full mx-auto text-center flex flex-col items-center justify-center space-y-8 z-10 pt-12"
        id="hero_cinematic_model"
      >
        {/* Visual focus element */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-zinc-400">
          <Sparkles className="w-3.5 h-3.5 text-accent animate-pulse" />
          <span className="font-mono text-[9px] tracking-[0.25em] uppercase font-bold">PORTFOLIO EDITION 2026</span>
        </div>
 
        {/* Cinematic Display Typography */}
        <div className="space-y-6">
          <h1 className="text-5xl sm:text-7xl md:text-8xl tracking-[0.05em] uppercase leading-none font-extrabold text-white">
            CHANDANA <br />
            <span className="font-serif italic font-light text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-accent drop-shadow-lg">SIRIMALLA</span>
          </h1>
          
          <div className="h-[1px] w-32 bg-accent/30 mx-auto" />
 
          <p className="font-mono text-xs sm:text-sm text-accent uppercase tracking-[0.35em]">
            MERN STACK DEVELOPER // SOFTWARE ENGINEER
          </p>
        </div>
 
        {/* Description */}
        <p className="text-xs sm:text-sm text-zinc-400 max-w-xl font-light leading-relaxed mx-auto">
          Focused on engineering responsive, high-performance backends and beautiful frontend structures. Combining academic passion with practical implementation.
        </p>
 
        {/* Centered actions */}
        <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
          <button
            onClick={() => handleScrollTo('projects')}
            className="px-8 py-3.5 border border-white text-zinc-950 bg-white hover:bg-transparent hover:text-white text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer rounded-sm"
          >
            Explore Works
          </button>
          <button
            onClick={() => handleScrollTo('contact')}
            className="px-8 py-3.5 border border-white/10 hover:border-accent bg-white/5 text-zinc-300 hover:text-accent text-xs uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer rounded-sm"
          >
            Direct Message
          </button>
        </div>
 
        {/* Status indicators */}
        <div className="grid grid-cols-3 gap-8 pt-8 w-full max-w-lg mx-auto border-t border-white/5 text-center">
          <div>
            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Base</p>
            <p className="text-xs font-bold text-zinc-300 mt-1">Warangal, IN</p>
          </div>
          <div>
            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Focus</p>
            <p className="text-xs font-bold text-zinc-300 mt-1">Full-Stack Dev</p>
          </div>
          <div>
            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">Status</p>
            <p className="text-xs font-bold text-accent mt-1 flex items-center justify-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
              Available
            </p>
          </div>
        </div>
      </motion.div>
 
      {/* Bottom Meta Strip */}
      <div 
        className="absolute bottom-0 left-0 right-0 py-5 border-t border-white/10 bg-[#0A0A0A]/40 backdrop-blur-xs flex justify-between items-center px-6 sm:px-12"
        id="hero_bottom_strip"
      >
        <div className="max-w-6xl w-full mx-auto flex flex-col sm:flex-row gap-4 justify-between items-center text-zinc-500 text-[10px] font-mono tracking-[0.3em]">
          <div className="flex items-center gap-2">
            <span>INDIA</span>
            <span className="text-white/20">·</span>
            <span>MERN</span>
            <span className="text-white/20">·</span>
            <span>BUILD · DESIGN · SOLVE</span>
          </div>
 
          <button 
            onClick={() => handleScrollTo('about')}
            className="flex items-center gap-2 text-zinc-400 hover:text-accent transition-colors group cursor-pointer"
          >
            <span>[ SCROLL ]</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce group-hover:translate-y-0.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
}

