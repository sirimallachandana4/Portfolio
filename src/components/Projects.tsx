/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { Project } from '../types';
import { FolderKanban, Github, ExternalLink, Sparkles, PieChart, Activity, CheckCircle2, AlertCircle } from 'lucide-react';

export default function Projects() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const projectsData: Project[] = [
    {
      id: 'student-analyzer',
      title: 'Student Performance Analyzer',
      tagline: 'Python-Powered Academic Performance Data & Prediction System',
      description: 'An analytical dashboard developed to calculate academic performance metrics, render interactive performance graphs, and estimate future outcomes based on historical record algorithms.',
      tech: ['Python', 'HTML5', 'CSS3', 'Data Visualization', 'Algorithmic Prediction'],
      features: [
        'Interactive graphical visualization of student performance.',
        'Performance prediction based on academic records.',
        'Automatic calculation of total marks, averages, grades, and results.',
        'Responsive user-friendly interface built with clean HTML and CSS.',
        'Backend data processing and analysis using Python scripting.'
      ],
      githubUrl: 'https://github.com/sirimallachandana4/Student-Performance-Analyser',
      demoUrl: 'https://github.com/sirimallachandana4/Student-Performance-Analyser',
      status: 'Completed',
      year: '2025'
    },
    {
      id: 'ecommerce-app',
      title: 'E-Commerce Shopping Application',
      tagline: 'Full-Stack MERN E-Commerce Store & Admin Panel',
      description: 'A robust, multi-module online store enabling full-stack registration, wishlist/cart management, live filters, and administrative product, category, and inventory databases.',
      tech: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Mongoose', 'REST API', 'Tailwind CSS'],
      features: [
        'User Registration and Login with secured routing.',
        'Product Search and Category Filtering system.',
        'Active Cart & Wishlist Management with quantity parameters.',
        'Administrative dashboard to register products and adjust inventory.',
        'Responsive mobile & desktop-optimized interface with REST API integration.'
      ],
      githubUrl: 'https://github.com/sirimallachandana4', // base github as requested
      status: 'In Progress',
      progress: 80, // 80% complete as mentioned
      year: '2026'
    }
  ];

  return (
    <section 
      id="projects" 
      className="relative py-24 px-6 sm:px-10 bg-[#0A0A0A] border-t border-white/10 overflow-hidden text-[#F5F5F5]"
    >
      {/* Background glow overlay */}
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="mb-16 text-center md:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-zinc-400 mb-4">
            <FolderKanban className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-semibold">Selected Works</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Creative Portfolio & <span className="font-serif italic text-accent">Projects</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-light mt-2 max-w-xl">
            Selected individual development works demonstrating full-stack problem solving, frontend execution, and database modeling.
          </p>
        </div>

        {/* Projects Layout Column */}
        <div className="space-y-12" id="projects_list">
          {projectsData.map((project) => {
            const isCompleted = project.status === 'Completed';
            const isHovered = hoveredId === project.id;
            
            return (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredId(project.id)}
                onMouseLeave={() => setHoveredId(null)}
                className="relative rounded-sm border border-white/10 bg-white/5 hover:bg-white/10 hover:border-accent/30 transition-all duration-300 p-6 sm:p-8 lg:p-10 flex flex-col lg:grid lg:grid-cols-12 gap-8 shadow-md overflow-hidden group"
                id={`project_card_${project.id}`}
              >
                {/* Decorative border highlight */}
                <div className={`absolute left-0 top-0 bottom-0 w-[2px] transition-all duration-300 ${
                  isHovered ? 'bg-accent' : 'bg-[#0A0A0A]'
                }`} />

                {/* Left Side: Meta & Description */}
                <div className="lg:col-span-7 flex flex-col justify-between space-y-6">
                  <div>
                    {/* Badge Line */}
                    <div className="flex items-center gap-3 mb-4 flex-wrap">
                      <span className="font-mono text-[10px] text-accent/80 bg-white/5 px-2.5 py-1 rounded-sm border border-white/10 font-semibold">
                        {project.year}
                      </span>
                      
                      {/* Status Indicator */}
                      <span className={`inline-flex items-center gap-1.5 font-mono text-[9px] tracking-wider uppercase px-2.5 py-1 rounded-sm border font-semibold ${
                        isCompleted 
                          ? 'bg-accent/5 border-accent/15 text-accent' 
                          : 'bg-amber-500/5 border-amber-500/15 text-amber-400'
                      }`}>
                        <span className={`w-1.5 h-1.5 rounded-full ${isCompleted ? 'bg-accent animate-pulse' : 'bg-amber-400 animate-pulse'}`} />
                        {project.status}
                      </span>

                      {!isCompleted && project.progress && (
                        <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-semibold">
                          ({project.progress}% Complete)
                        </span>
                      )}
                    </div>

                    {/* Title & Tagline */}
                    <h3 className="text-lg sm:text-xl font-bold text-white mb-2 tracking-tight group-hover:text-accent transition-colors uppercase">
                      {project.title}
                    </h3>
                    <p className="font-mono text-[11px] text-zinc-400/80 mb-4 tracking-wide font-medium">
                      {project.tagline}
                    </p>
                    
                    {/* Description */}
                    <p className="text-xs sm:text-sm text-zinc-400 font-light leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Features List */}
                    <div className="space-y-2 mb-6">
                      <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-semibold">Key Features:</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-[11px] text-zinc-400 font-light" id={`project_features_${project.id}`}>
                        {project.features.map((feature, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <span className="w-1.5 h-1.5 rounded-full bg-accent mt-1.5 shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Links Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-white/10">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex items-center gap-2 px-4 py-2 border border-white/10 hover:border-accent/40 bg-white/5 text-[10px] uppercase tracking-widest text-zinc-300 hover:text-accent font-bold rounded-sm transition-all duration-300"
                        id={`project_btn_github_${project.id}`}
                      >
                        <Github className="w-3.5 h-3.5 text-zinc-400" />
                        GitHub Repository
                        <ExternalLink className="w-3 h-3 text-zinc-500" />
                      </a>
                    )}

                    {project.demoUrl && isCompleted ? (
                      <a
                        href={project.demoUrl}
                        target="_blank"
                        referrerPolicy="no-referrer"
                        className="flex items-center gap-2 px-4 py-2 border border-accent/30 bg-accent/10 hover:bg-accent/20 text-accent text-[10px] uppercase tracking-widest font-bold rounded-sm transition-all duration-300"
                        id={`project_btn_demo_${project.id}`}
                      >
                        View Demo
                        <ExternalLink className="w-3 h-3" />
                      </a>
                    ) : !isCompleted && (
                      <div className="flex items-center gap-2 px-4 py-2 border border-dashed border-white/10 bg-[#0A0A0A]/40 text-zinc-500 text-[10px] font-mono font-medium">
                        <AlertCircle className="w-3.5 h-3.5 text-amber-500/60 animate-pulse" />
                        Demo available upon launch
                      </div>
                    )}
                  </div>
                </div>

                {/* Right Side: Stack & Visual Progress Representation */}
                <div className="lg:col-span-5 flex flex-col justify-center items-stretch bg-white/2 border border-white/10 p-6 rounded-sm">
                  {/* Technology Tags Grid */}
                  <div className="space-y-4 mb-6">
                    <p className="text-[10px] font-mono uppercase text-zinc-500 tracking-wider font-semibold">Architectural Stack</p>
                    <div className="flex flex-wrap gap-1.5">
                      {project.tech.map((t) => (
                        <span
                          key={t}
                          className="px-2.5 py-1.5 rounded-sm bg-[#0A0A0A] text-zinc-400 text-[11px] border border-white/5 hover:border-accent/30 hover:text-zinc-200 transition-colors duration-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Creative Stack Chart/Visualizer representing database & code */}
                  <div className="relative border border-white/10 bg-[#0A0A0A]/60 p-4 rounded-sm flex flex-col gap-3">
                    <div className="flex items-center justify-between text-[9px] text-zinc-500 font-mono">
                      <span>PROJECT METRICS</span>
                      <Sparkles className="w-3.5 h-3.5 text-accent" />
                    </div>
                    
                    {/* Progress slider bar or custom indicator */}
                    <div className="space-y-1.5">
                      <div className="flex justify-between text-[10px] uppercase tracking-wider font-semibold">
                        <span className="text-zinc-400">Development Progress</span>
                        <span className="text-accent font-mono">{isCompleted ? '100%' : `${project.progress}%`}</span>
                      </div>
                      <div className="w-full h-1 bg-white/10 rounded-none overflow-hidden">
                        <div 
                          className="h-full bg-accent transition-all duration-1000"
                          style={{ width: isCompleted ? '100%' : `${project.progress}%` }}
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mt-2 border-t border-white/5 pt-3">
                      <div>
                        <p className="text-[9px] font-mono text-zinc-500 uppercase">Architecture</p>
                        <p className="text-xs font-bold text-zinc-300">{isCompleted ? 'Stand-alone' : 'RESTful'}</p>
                      </div>
                      <div>
                        <p className="text-[9px] font-mono text-zinc-500 uppercase">Scope</p>
                        <p className="text-xs font-bold text-zinc-300">{isCompleted ? 'Academic' : 'Full-Stack'}</p>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
