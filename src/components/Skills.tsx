/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Settings, CheckCircle2, Star, Shield, Layout, Server, Database, GitBranch, Key } from 'lucide-react';

interface SkillItem {
  name: string;
  category: 'proficient' | 'familiar';
  icon: React.ComponentType<{ className?: string }>;
  strength: string; // Brief descriptive label
  desc: string; // 1-sentence context
}

export default function Skills() {
  const [activeTab, setActiveTab] = useState<'all' | 'proficient' | 'familiar'>('all');

  const skills: SkillItem[] = [
    // Proficient
    { name: 'HTML5', category: 'proficient', icon: Layout, strength: 'Structure Master', desc: 'Crafting semantically correct, highly accessible, SEO-friendly layout structures.' },
    { name: 'CSS3', category: 'proficient', icon: Star, strength: 'Visual Styling', desc: 'Designing complex fluid grids, flexbox coordinates, modern variables, and responsive animations.' },
    { name: 'Git', category: 'proficient', icon: GitBranch, strength: 'Version Control', desc: 'Managing branching strategies, commits, conflicts resolution, and collaboration workflows.' },
    { name: 'GitHub', category: 'proficient', icon: Shield, strength: 'Repo Hosting', desc: 'Publishing source code, setting up pages, and tracking issue logs/pull requests.' },
    { name: 'MongoDB', category: 'proficient', icon: Database, strength: 'NoSQL Database', desc: 'Building dynamic collections, designing schemas, querying documents, and indexing keys.' },
    { name: 'Postman', category: 'proficient', icon: Key, strength: 'API Testing', desc: 'Debugging REST requests, inspecting response bodies, headers, and environment variables.' },
    
    // Familiar With
    { name: 'JavaScript', category: 'familiar', icon: Settings, strength: 'Core Logic', desc: 'Utilizing modern ES6+ features, functional loops, and asynchronous operations.' },
    { name: 'React.js', category: 'familiar', icon: Settings, strength: 'UI Components', desc: 'Creating modular hook states, managing rendering lifecycles, and component props.' },
    { name: 'Node.js', category: 'familiar', icon: Server, strength: 'Backend Runtime', desc: 'Executing JS server-side, handling network streams, and running script engines.' },
    { name: 'Express.js', category: 'familiar', icon: Server, strength: 'Web Server', desc: 'Mounting middleware layers, parsing URL requests, and structuring API endpoints.' },
    { name: 'Mongoose', category: 'familiar', icon: Database, strength: 'Data Schema', desc: 'Modeling collections, validating fields, and mapping ODM schemas to MongoDB.' },
    { name: 'Axios', category: 'familiar', icon: Key, strength: 'HTTP Client', desc: 'Intercepting asynchronous web requests and fetching external endpoint assets.' },
    { name: 'React Router', category: 'familiar', icon: Layout, strength: 'App Routing', desc: 'Binding dynamic client-side views and protecting single-page application paths.' },
    { name: 'Bootstrap', category: 'familiar', icon: Layout, strength: 'CSS Grid Framework', desc: 'Prototyping responsive web mockups quickly with predefined utility classes.' },
    { name: 'Tailwind CSS', category: 'familiar', icon: Star, strength: 'Utility-First Styles', desc: 'Compiling modern responsive spacing, colors, and shadows directly in the JSX.' },
  ];

  const filteredSkills = skills.filter(skill => {
    if (activeTab === 'all') return true;
    return skill.category === activeTab;
  });

  return (
    <section 
      id="skills" 
      className="relative py-24 px-6 sm:px-10 bg-[#0A0A0A] border-t border-white/10 overflow-hidden text-[#F5F5F5]"
    >
      {/* Background visual light */}
      <div className="absolute top-1/4 left-1/3 w-80 h-80 bg-accent/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-zinc-400 mb-4">
              <Settings className="w-3.5 h-3.5 text-accent" />
              <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-semibold">My Stack</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Technologies & <span className="font-serif italic text-accent">Toolsets</span>
            </h2>
          </div>

          {/* Category Tabs Filter */}
          <div className="flex bg-white/5 p-1 rounded-sm border border-white/10 w-fit" id="skills_filter_tabs">
            {(['all', 'proficient', 'familiar'] as const).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-3 py-1.5 rounded-sm text-[10px] uppercase tracking-wider font-semibold transition-all cursor-pointer ${
                  activeTab === tab
                    ? 'bg-white text-zinc-950 font-bold border border-white shadow-sm'
                    : 'text-zinc-400 hover:text-zinc-200'
                }`}
              >
                {tab === 'all' ? 'All Skills' : tab === 'proficient' ? 'Proficient' : 'Familiar'}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="skills_grid">
          {filteredSkills.map((skill) => {
            const Icon = skill.icon;
            const isProficient = skill.category === 'proficient';
            return (
              <div
                key={skill.name}
                className="group relative p-6 rounded-sm bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between"
                id={`skill_card_${skill.name.toLowerCase().replace('.', '_')}`}
              >
                {/* Visual Glow Indicator */}
                <div className={`absolute top-4 right-4 w-1.5 h-1.5 rounded-full ${
                  isProficient ? 'bg-accent shadow-[0_0_8px_var(--accent)]' : 'bg-zinc-700'
                }`} />

                <div>
                  <div className="flex items-center gap-3.5 mb-4">
                    <div className={`w-9 h-9 rounded-sm flex items-center justify-center border transition-all duration-300 group-hover:scale-105 ${
                      isProficient 
                        ? 'bg-accent/5 border-accent/25 text-accent' 
                        : 'bg-white/5 border-white/10 text-zinc-400'
                    }`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <div>
                      <h3 className="text-sm font-bold text-zinc-100 group-hover:text-accent transition-colors uppercase tracking-wider">{skill.name}</h3>
                      <p className="font-mono text-[9px] tracking-widest uppercase text-zinc-500 font-semibold">{skill.strength}</p>
                    </div>
                  </div>

                  <p className="text-[11px] text-zinc-400 font-light leading-relaxed mb-6">
                    {skill.desc}
                  </p>
                </div>

                {/* Bottom Status strip */}
                <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                  <span className={`text-[9px] font-mono tracking-widest font-semibold uppercase ${
                    isProficient ? 'text-accent/80' : 'text-zinc-500'
                  }`}>
                    {isProficient ? 'PROFICIENT' : 'FAMILIAR'}
                  </span>
                  <div className="flex items-center gap-1 text-zinc-500 text-[9px] font-mono">
                    <CheckCircle2 className={`w-3.5 h-3.5 ${isProficient ? 'text-accent' : 'text-zinc-600'}`} />
                    <span>{isProficient ? 'Active Use' : 'Ready'}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills context bottom-bar */}
        <div 
          className="mt-12 p-5 rounded-sm border border-dashed border-white/15 bg-white/2 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left"
          id="skills_callout"
        >
          <div className="space-y-1">
            <p className="text-xs font-bold text-zinc-300 uppercase tracking-wider">Continuous Growth Mindset</p>
            <p className="text-[11px] text-zinc-400 font-light">I regularly prototype, read technical docs, and build full-stack interfaces to solidify my familiar skills.</p>
          </div>
          <div className="flex items-center gap-2 text-[10px] font-mono text-zinc-500 bg-white/5 px-3 py-1.5 rounded-sm border border-white/10">
            <Star className="w-3.5 h-3.5 text-accent animate-spin" style={{ animationDuration: '6s' }} />
            <span>Currently deep diving: advanced state & backend auth schemas</span>
          </div>
        </div>

      </div>
    </section>
  );
}
