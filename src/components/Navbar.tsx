/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, Code, User, Settings, FolderKanban, Mail } from 'lucide-react';

interface NavItem {
  label: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
}

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navItems: NavItem[] = [
    { label: 'Home', href: '#home', icon: Code },
    { label: 'About', href: '#about', icon: User },
    { label: 'Skills', href: '#skills', icon: Settings },
    { label: 'Projects', href: '#projects', icon: FolderKanban },
    { label: 'Contact', href: '#contact', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Background styling on scroll
      setScrolled(window.scrollY > 20);

      // Section spy
      const sections = navItems.map(item => {
        const el = document.getElementById(item.href.replace('#', ''));
        if (el) {
          const rect = el.getBoundingClientRect();
          // Adjust threshold based on viewport
          return {
            id: item.href.replace('#', ''),
            top: rect.top + window.scrollY - 150,
            bottom: rect.bottom + window.scrollY - 150,
          };
        }
        return null;
      }).filter(Boolean);

      const scrollPos = window.scrollY;
      const current = sections.find(
        sec => sec && scrollPos >= sec.top && scrollPos < sec.bottom
      );

      if (current) {
        setActiveSection(current.id);
      } else if (scrollPos < 100) {
        setActiveSection('home');
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      const offset = 90;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(id);
      setMobileMenuOpen(false);
    }
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 sm:px-10 py-5 ${
      scrolled ? 'bg-[#0A0A0A]/90 backdrop-blur-md border-b border-white/10 py-4' : 'bg-transparent border-b border-white/5'
    }`}>
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        {/* Logo/Monogram */}
        <a 
          href="#home" 
          onClick={(e) => handleNavClick(e, '#home')}
          className="flex items-center gap-3 group text-lg font-bold tracking-tighter uppercase italic text-white hover:text-accent transition-colors"
          id="nav_logo"
        >
          <span className="w-8 h-8 rounded-full bg-white/5 border border-white/10 text-accent flex items-center justify-center font-serif font-bold italic text-sm group-hover:border-accent/30 group-hover:bg-accent/10 transition-all duration-300">
            C
          </span>
          <span className="font-serif italic tracking-tight text-white group-hover:text-accent transition-colors">Chandana</span>
        </a>

        {/* Desktop Navigation Menu (Editorial Aesthetic style) */}
        <div className="hidden md:flex items-center gap-8 text-[11px] uppercase tracking-[0.2em] font-semibold">
          {navItems.map((item) => {
            const isActive = activeSection === item.href.replace('#', '');
            return (
              <a
                key={item.href}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className={`transition-all duration-300 pb-1 border-b ${
                  isActive
                    ? 'text-accent border-accent'
                    : 'text-zinc-400 border-transparent hover:text-white hover:border-zinc-500'
                }`}
                id={`nav_link_${item.href.replace('#', '')}`}
              >
                {item.label}
              </a>
            );
          })}
        </div>

        {/* Contact CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            onClick={(e) => handleNavClick(e, '#contact')}
            className="flex items-center gap-1 px-4 py-2 border border-white/10 hover:border-accent/40 bg-white/5 text-[11px] uppercase tracking-widest text-zinc-300 hover:text-accent transition-all duration-300"
            id="nav_cta_contact"
          >
            Connect
            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500 group-hover:text-accent" />
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-zinc-900 border border-transparent hover:border-white/10 transition-all"
          aria-label="Toggle Menu"
          id="nav_mobile_toggle"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0A0A0A]/95 backdrop-blur-lg border-b border-white/10 px-8 py-6 flex flex-col gap-4 shadow-xl">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.replace('#', '');
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg text-xs font-semibold uppercase tracking-[0.2em] transition-all ${
                    isActive
                      ? 'bg-white/5 text-accent border-l-2 border-accent'
                      : 'text-zinc-400 hover:text-zinc-200 hover:bg-white/5'
                  }`}
                  id={`nav_mobile_link_${item.href.replace('#', '')}`}
                >
                  <span>{item.label}</span>
                </a>
              );
            })}
          </div>
          <div className="border-t border-white/10 pt-4 mt-2">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center justify-center gap-2 w-full py-3 border border-white/10 bg-white/5 text-zinc-300 font-semibold text-xs uppercase tracking-widest hover:border-accent/50 hover:text-accent transition-all"
              id="nav_mobile_cta"
            >
              Get In Touch
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
