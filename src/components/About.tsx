/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';
import { User, Terminal, Code2, Cpu, Rocket, Heart } from 'lucide-react';

export default function About() {
  const values = [
    {
      icon: Terminal,
      title: "Problem Solving",
      desc: "Eager to break down complex problems and debug code systematically to build highly optimized solutions.",
      color: "text-accent bg-accent/5 border-accent/15"
    },
    {
      icon: Code2,
      title: "MERN Stack Mastery",
      desc: "Deep focus on developing cohesive backend schemas and intuitive React components that communicate seamlessly.",
      color: "text-accent bg-accent/5 border-accent/15"
    },
    {
      icon: Cpu,
      title: "Modern Architecture",
      desc: "Designing and developing robust, scalable RESTful APIs with clean state management and data modeling.",
      color: "text-accent bg-accent/5 border-accent/15"
    },
    {
      icon: Rocket,
      title: "Continuous Learning",
      desc: "Constantly expanding knowledge of system designs, web performance optimization, and developer workflows.",
      color: "text-accent bg-accent/5 border-accent/15"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-24 px-6 sm:px-10 bg-[#0A0A0A] border-t border-white/10 overflow-hidden text-[#F5F5F5]"
    >
      {/* Background overlay lights */}
      <div className="absolute top-1/2 right-0 w-80 h-80 bg-accent/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-zinc-400 mb-4">
            <User className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-semibold">About Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Transforming Ideas Into <span className="font-serif italic text-accent">Functional Code</span>
          </h2>
        </div>

        {/* Story Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Main Story Text */}
          <div className="lg:col-span-6 space-y-6 text-zinc-400 leading-relaxed font-light text-sm sm:text-base" id="about_bio_text">
            <p className="text-base sm:text-lg text-zinc-200 font-normal leading-relaxed">
              I am an aspiring Software Engineer and MERN Stack Developer with a passion for building modern, scalable, and user-friendly web applications.
            </p>
            <p>
              I enjoy transforming concepts into functional web solutions using <strong className="text-white font-medium">MongoDB, Express.js, React.js, and Node.js</strong> while continuously learning new technologies and software development practices.
            </p>
            <p>
              Through hands-on projects, I have strengthened my problem-solving, debugging, and full stack development skills. My ultimate goal is to build software that delivers seamless user experiences and solves real-world challenges.
            </p>

            <div className="pt-4 flex items-center gap-3 text-zinc-500 text-xs font-mono tracking-wider">
              <Heart className="w-4 h-4 text-accent fill-accent/20" />
              <span>Building digital solutions out of Warangal, India</span>
            </div>
          </div>

          {/* Core Values Cards */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-4" id="about_values_grid">
            {values.map((val, idx) => {
              const Icon = val.icon;
              return (
                <div
                  key={idx}
                  className="p-5 rounded-sm bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group"
                >
                  <div>
                    <div className={`w-9 h-9 rounded-sm flex items-center justify-center border mb-4 transition-transform group-hover:scale-105 duration-300 ${val.color}`}>
                      <Icon className="w-4.5 h-4.5" />
                    </div>
                    <h3 className="text-xs font-bold text-zinc-100 uppercase tracking-wider mb-2">{val.title}</h3>
                    <p className="text-[11px] text-zinc-400 leading-relaxed font-light">{val.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

        {/* Quick Highlights Dashboard */}
        <div 
          className="mt-16 p-6 sm:p-8 rounded-sm bg-white/2 border border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-6 text-center"
          id="about_highlights"
        >
          <div className="space-y-1">
            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Education</p>
            <p className="text-xs font-bold text-zinc-300">B.Tech / CS Student</p>
            <p className="text-[11px] text-zinc-400 font-light">Aspiring Software Engineer</p>
          </div>
          <div className="space-y-1 border-t sm:border-t-0 sm:border-x border-white/10 pt-4 sm:pt-0">
            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Key Focus</p>
            <p className="text-xs font-bold text-zinc-300">Full-Stack MERN</p>
            <p className="text-[11px] text-zinc-400 font-light">Web Apps & Databases</p>
          </div>
          <div className="space-y-1 border-t sm:border-t-0 border-white/10 pt-4 sm:pt-0">
            <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-semibold">Aspiration</p>
            <p className="text-xs font-bold text-zinc-300">Impactful Software</p>
            <p className="text-[11px] text-zinc-400 font-light">High Performance & UX</p>
          </div>
        </div>

      </div>
    </section>
  );
}
