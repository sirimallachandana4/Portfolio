/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Linkedin, Github, Copy, Check, Send, AlertCircle, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const emailAddress = 'sirimallachandana4@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/sirimalla-chandana-83b58a32b';
  const githubUrl = 'https://github.com/sirimallachandana4';

  const [copied, setCopied] = useState(false);
  
  // Contact Form Simulated State
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [formState, setFormState] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      setFormState('error');
      return;
    }

    setFormState('sending');
    // Simulate API request
    setTimeout(() => {
      setFormState('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1800);
  };

  return (
    <section 
      id="contact" 
      className="relative py-24 px-6 sm:px-10 bg-[#0A0A0A] border-t border-white/10 overflow-hidden text-[#F5F5F5]"
    >
      {/* Background glow effects */}
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto z-10 relative">
        
        {/* Section Header */}
        <div className="mb-16 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-white/5 border border-white/10 text-zinc-400 mb-4">
            <Mail className="w-3.5 h-3.5 text-accent" />
            <span className="font-mono text-[10px] tracking-[0.25em] uppercase font-semibold">Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let's Collaborate & <span className="font-serif italic text-accent">Connect</span>
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 font-light mt-2 max-w-xl mx-auto lg:mx-0">
            Reach out for opportunities, software projects, or simply to talk about code and the MERN stack!
          </p>
        </div>

        {/* Form and Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contacts & Links */}
          <div className="lg:col-span-5 space-y-6" id="contact_info_column">
            
            {/* Quick Email Copy Card */}
            <div className="p-6 rounded-sm bg-white/5 border border-white/10 flex flex-col justify-between space-y-4 shadow-md">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-sm bg-accent/5 border border-accent/15 text-accent flex items-center justify-center">
                  <Mail className="w-4.5 h-4.5" />
                </div>
                <div>
                  <p className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest">DIRECT MAIL</p>
                  <p className="text-xs sm:text-sm font-semibold text-zinc-300 select-all">{emailAddress}</p>
                </div>
              </div>

              <button
                onClick={handleCopyEmail}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-sm border border-white/10 hover:border-accent/40 bg-white/5 text-zinc-300 hover:text-accent text-[10px] uppercase tracking-widest font-bold transition-all duration-300 cursor-pointer"
                id="contact_copy_btn"
              >
                {copied ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-accent" />
                    <span className="text-accent">Copied to Clipboard!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-500" />
                    <span>Copy Email Address</span>
                  </>
                )}
              </button>
            </div>

            {/* Social Network Links Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4" id="contact_socials_grid">
              {/* LinkedIn */}
              <a
                href={linkedinUrl}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-sm bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group h-32"
                id="contact_social_linkedin"
              >
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 rounded-sm bg-accent/5 border border-accent/15 text-accent flex items-center justify-center">
                    <Linkedin className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-200 uppercase tracking-wide">LinkedIn</p>
                  <p className="text-[10px] font-mono text-zinc-500 tracking-wider">sirimalla-chandana</p>
                </div>
              </a>

              {/* GitHub */}
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="p-5 rounded-sm bg-white/5 border border-white/10 hover:border-accent/30 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group h-32"
                id="contact_social_github"
              >
                <div className="flex justify-between items-start">
                  <div className="w-9 h-9 rounded-sm bg-white/5 border border-white/10 text-zinc-300 flex items-center justify-center">
                    <Github className="w-4 h-4" />
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-zinc-600 group-hover:text-zinc-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>
                <div>
                  <p className="text-xs font-bold text-zinc-200 uppercase tracking-wide">GitHub</p>
                  <p className="text-[10px] font-mono text-zinc-500 tracking-wider">sirimallachandana4</p>
                </div>
              </a>
            </div>

            {/* Quick response note */}
            <div className="p-4 rounded-sm border border-dashed border-white/10 bg-white/2 text-center text-[11px] text-zinc-500 font-light uppercase tracking-wider">
              Avg. response time: 24 - 48 hours for developer inquiries.
            </div>

          </div>

          {/* Right Column: Interactive Message Sandbox Form */}
          <div className="lg:col-span-7" id="contact_form_column">
            <div className="p-6 sm:p-8 rounded-sm bg-white/2 border border-white/10 shadow-md">
              <h3 className="text-xs font-bold uppercase tracking-widest text-zinc-300 mb-6 font-sans">Send Me A Quick Message</h3>

              {formState === 'success' ? (
                <div className="py-12 px-6 flex flex-col items-center justify-center text-center space-y-4" id="contact_form_success">
                  <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent/20 text-accent flex items-center justify-center shadow-[0_0_20px_var(--accent-glow)]">
                    <Check className="w-8 h-8" />
                  </div>
                  <div className="space-y-1">
                    <p className="text-base font-bold text-zinc-100">Message Sent Successfully!</p>
                    <p className="text-xs text-zinc-400 font-light max-w-sm">Thank you for writing, Chandana has received your simulated message. I will check your logs or contact email directly.</p>
                  </div>
                  <button
                    onClick={() => setFormState('idle')}
                    className="px-5 py-2.5 rounded-sm border border-white/15 hover:border-white bg-[#0A0A0A] text-zinc-300 font-semibold text-xs uppercase tracking-widest transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-5" id="contact_form">
                  {formState === 'error' && (
                    <div className="p-3.5 rounded-sm bg-rose-500/5 border border-rose-500/20 text-rose-400 text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>Please complete all fields before sending.</span>
                    </div>
                  )}

                  {/* Name field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form_name" className="text-[10px] font-mono text-zinc-400 tracking-wider font-semibold uppercase">Your Name</label>
                    <input
                      type="text"
                      id="form_name"
                      required
                      placeholder="Jane Doe"
                      value={formData.name}
                      onChange={(e) => {
                        setFormData({ ...formData, name: e.target.value });
                        if (formState === 'error') setFormState('idle');
                      }}
                      className="w-full bg-[#0A0A0A] border border-white/10 focus:border-accent/50 rounded-sm px-4 py-3 text-xs sm:text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:ring-0 transition-all duration-300"
                    />
                  </div>

                  {/* Email field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form_email" className="text-[10px] font-mono text-zinc-400 tracking-wider font-semibold uppercase">Email Address</label>
                    <input
                      type="email"
                      id="form_email"
                      required
                      placeholder="jane@example.com"
                      value={formData.email}
                      onChange={(e) => {
                        setFormData({ ...formData, email: e.target.value });
                        if (formState === 'error') setFormState('idle');
                      }}
                      className="w-full bg-[#0A0A0A] border border-white/10 focus:border-accent/50 rounded-sm px-4 py-3 text-xs sm:text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:ring-0 transition-all duration-300"
                    />
                  </div>

                  {/* Message field */}
                  <div className="space-y-1.5">
                    <label htmlFor="form_message" className="text-[10px] font-mono text-zinc-400 tracking-wider font-semibold uppercase">Message</label>
                    <textarea
                      id="form_message"
                      required
                      rows={4}
                      placeholder="Hi Chandana, let's talk about building a full-stack project..."
                      value={formData.message}
                      onChange={(e) => {
                        setFormData({ ...formData, message: e.target.value });
                        if (formState === 'error') setFormState('idle');
                      }}
                      className="w-full bg-[#0A0A0A] border border-white/10 focus:border-accent/50 rounded-sm px-4 py-3 text-xs sm:text-sm text-zinc-200 placeholder-zinc-700 focus:outline-none focus:ring-0 resize-none transition-all duration-300"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={formState === 'sending'}
                    className="w-full flex items-center justify-center gap-2 py-3.5 border border-white text-zinc-950 bg-white hover:bg-transparent hover:text-white text-xs uppercase tracking-widest font-bold transition-all duration-300 rounded-sm cursor-pointer disabled:opacity-50"
                    id="contact_form_submit_btn"
                  >
                    {formState === 'sending' ? (
                      <>
                        <span className="w-3.5 h-3.5 border-2 border-zinc-950 border-t-transparent rounded-full animate-spin" />
                        <span>Transmitting...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-3.5 h-3.5" />
                        <span>Send Direct Message</span>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
