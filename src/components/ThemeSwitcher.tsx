/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Palette, Check, Sparkles } from 'lucide-react';

interface Theme {
  id: string;
  name: string;
  colorClass: string;
  bgPreview: string;
}

export default function ThemeSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeTheme, setActiveTheme] = useState('emerald');

  const themes: Theme[] = [
    { id: 'emerald', name: 'Emerald Forest', colorClass: 'bg-emerald-400', bgPreview: '#10b981' },
    { id: 'purple', name: 'Cyber Lavender', colorClass: 'bg-purple-400', bgPreview: '#a855f7' },
    { id: 'cyan', name: 'Oceanic Cyan', colorClass: 'bg-cyan-400', bgPreview: '#06b6d4' },
    { id: 'amber', name: 'Sunset Amber', colorClass: 'bg-amber-400', bgPreview: '#f59e0b' },
    { id: 'rose', name: 'Crimson Rose', colorClass: 'bg-rose-500', bgPreview: '#e11d48' },
  ];

  useEffect(() => {
    try {
      const savedTheme = localStorage.getItem('portfolio_theme') || 'emerald';
      setActiveTheme(savedTheme);
      document.documentElement.setAttribute('data-theme', savedTheme);
    } catch {
      // Fallback
    }
  }, []);

  const changeTheme = (themeId: string) => {
    setActiveTheme(themeId);
    document.documentElement.setAttribute('data-theme', themeId);
    try {
      localStorage.setItem('portfolio_theme', themeId);
    } catch (e) {
      console.warn('LocalStorage save failed:', e);
    }
  };

  return (
    <div 
      className="fixed bottom-24 right-6 z-40 flex flex-col items-end gap-3"
      id="theme_switcher_root"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="bg-[#0D0D0D]/90 border border-white/10 rounded p-3 shadow-2xl backdrop-blur-md flex flex-col gap-2 w-44"
          >
            <div className="flex items-center gap-1.5 px-1 pb-2 border-b border-white/5 text-[9px] font-mono tracking-widest text-zinc-500 uppercase">
              <Sparkles className="w-3 h-3 text-accent" />
              <span>Select Style:</span>
            </div>

            <div className="flex flex-col gap-1">
              {themes.map((theme) => (
                <button
                  key={theme.id}
                  onClick={() => changeTheme(theme.id)}
                  className={`flex items-center justify-between w-full p-2 rounded text-left transition-all text-xs font-mono tracking-wide cursor-pointer ${
                    activeTheme === theme.id
                      ? 'bg-white/5 text-white font-semibold'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <span className={`w-3.5 h-3.5 rounded-full ${theme.colorClass} border border-black/40 shadow-sm`} />
                    <span className="text-[11px]">{theme.name}</span>
                  </div>
                  {activeTheme === theme.id && <Check className="w-3.5 h-3.5 text-accent" />}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-11 h-11 rounded-full bg-[#0D0D0D]/90 hover:bg-white/5 border border-white/15 hover:border-accent/50 text-zinc-300 hover:text-accent shadow-xl flex items-center justify-center transition-all duration-300 cursor-pointer backdrop-blur-md group"
        title="Change Portfolio Color Theme"
        id="theme_switcher_toggle"
      >
        <Palette className="w-4.5 h-4.5 group-hover:rotate-12 transition-transform duration-300" />
      </button>
    </div>
  );
}
