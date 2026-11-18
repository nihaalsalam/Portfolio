import React, { useState, useEffect } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  FileDown,
  Mail,
  MapPin,
  Sparkles,
  Code2,
  Database,
  Cpu,
  Cloud,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

const ROTATING_TEXTS = [
  'Full Stack Development',
  'Python & Django',
  'Artificial Intelligence',
  'Cloud Computing',
];

export const Hero: React.FC = () => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % ROTATING_TEXTS.length);
        setFade(true);
      }, 300);
    }, 2800);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen w-full flex flex-col justify-between bg-background px-4 sm:px-8 lg:px-12 pt-28 pb-12 sm:pt-36 sm:pb-16 overflow-hidden border-b border-white/5"
    >
      {/* Background Subtle Tech Grid */}
      <div className="absolute inset-0 grid-pattern pointer-events-none -z-10" />

      {/* Ambient Radial Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-emerald-500/5 rounded-full blur-[140px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[120px] pointer-events-none -z-10" />

      {/* Main Hero Container */}
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center">
        {/* Top Status Pill & Location */}
        <div className="flex flex-wrap items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-xs font-mono tracking-wider uppercase">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping inline-block" />
            <span className="font-semibold">Available for Hire</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/60 text-muted-foreground text-xs font-mono tracking-wider">
            <MapPin className="w-3.5 h-3.5 text-zinc-400" />
            <span>Bengaluru, India</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-white/10 bg-zinc-900/60 text-muted-foreground text-xs font-mono tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-amber-400" />
            <span>Python & AI Full Stack</span>
          </div>
        </div>

        {/* Hero Grid: Left Typography & Narrative, Right Developer Portrait & Terminal Card */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          {/* Left Column (Editorial Typography) */}
          <div className="lg:col-span-7 xl:col-span-8 space-y-6">
            <div className="space-y-2">
              <span className="font-mono text-xs sm:text-sm tracking-[0.25em] text-muted-foreground uppercase block">
                [000 // PORTFOLIO ARCHIVE]
              </span>
              <h2 className="text-xl sm:text-2xl font-bold uppercase tracking-tight text-zinc-300">
                {PERSONAL_INFO.name}
              </h2>
            </div>

            {/* Massive Editorial Headline matching the reference website */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl xl:text-8xl font-black tracking-tighter uppercase text-white leading-[0.92] select-none">
              FULL STACK<br />
              <span className="text-zinc-400 hover:text-white transition-colors duration-300">
                DEVELOPER.
              </span>
            </h1>

            {/* Animated Interactive Specialization Ticker */}
            <div className="flex items-center gap-3 pt-2">
              <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-muted-foreground">
                Focusing on:
              </span>
              <div className="px-3.5 py-1.5 rounded-xl border border-white/15 bg-zinc-900/90 text-white font-mono text-xs sm:text-sm tracking-wide font-medium shadow-inner flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span
                  className={`transition-opacity duration-300 inline-block text-emerald-300 ${
                    fade ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {ROTATING_TEXTS[currentTextIndex]}
                </span>
              </div>
            </div>

            {/* Short Engaging Introduction */}
            <p className="text-base sm:text-lg text-zinc-400 max-w-2xl font-light leading-relaxed pt-1">
              Hi, I’m <strong className="text-zinc-200 font-medium">{PERSONAL_INFO.name}</strong>. A Full Stack Developer passionate about building scalable web applications, intelligent AI-powered solutions, and modern digital experiences.
            </p>

            {/* CTA Buttons & Social Icons */}
            <div className="flex flex-wrap items-center gap-4 pt-3">
              {/* Download Resume Button */}
              <a
                href="/resume.pdf"
                download="Muhammed_Nihal_Salam_Resume.pdf"
                className="group relative inline-flex items-center gap-2.5 px-6 py-3.5 rounded-2xl bg-white text-zinc-950 font-bold text-xs sm:text-sm uppercase tracking-wider hover:bg-zinc-200 transition-all duration-300 shadow-lg hover:shadow-white/10"
              >
                <FileDown className="w-4 h-4 text-emerald-600 transition-transform group-hover:-translate-y-0.5" />
                <span>Download Resume</span>
              </a>

              {/* Contact Button */}
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl border border-white/20 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-200 hover:text-white font-semibold text-xs sm:text-sm uppercase tracking-wider transition-all duration-300 hover:border-white/40"
              >
                <span>Get In Touch</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" />
              </a>

              {/* Social Links */}
              <div className="flex items-center gap-2 pl-2">
                <a
                  href={PERSONAL_INFO.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={PERSONAL_INFO.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="p-3 rounded-xl border border-white/10 bg-zinc-900/60 hover:bg-zinc-800 text-zinc-400 hover:text-white hover:border-white/30 transition-all"
                  aria-label="Email Me"
                  title="Send Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Sleek Modern Profile Frame & Developer Hub */}
          <div className="lg:col-span-5 xl:col-span-4 flex justify-center lg:justify-end">
            <div className="relative w-full max-w-sm">
              {/* Subtle Outer Card Glow */}
              <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500/20 via-zinc-700/20 to-blue-500/20 blur-xl opacity-60 pointer-events-none" />

              {/* Profile Card Container */}
              <div className="relative rounded-3xl border border-white/10 bg-zinc-950/80 p-5 backdrop-blur-xl shadow-2xl space-y-4">
                {/* Terminal Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500/80" />
                    <div className="w-3 h-3 rounded-full bg-amber-500/80" />
                    <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
                  </div>
                  <span className="font-mono text-[11px] text-muted-foreground uppercase tracking-widest">
                    nihal.py // v2.6
                  </span>
                </div>

                {/* Profile Portrait Area - Touch to toggle theme & dark hover effect */}
                <div
                  onClick={() => {
                    const root = document.documentElement;
                    const isDark = root.classList.contains('dark');
                    if (isDark) {
                      root.classList.remove('dark');
                      root.classList.add('light');
                      localStorage.setItem('theme', 'light');
                    } else {
                      root.classList.remove('light');
                      root.classList.add('dark');
                      localStorage.setItem('theme', 'dark');
                    }
                  }}
                  className="relative aspect-4/3 w-full rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 group cursor-pointer"
                  title="Touch / click photo to toggle dark mode"
                >
                  {/* Profile Image: Vivid & natural by default, dark mode aesthetic on touch/hover */}
                  <img
                    src="/images/profile-headshot.jpg"
                    alt="Muhammed Nihal Salam - Full Stack Developer"
                    className="w-full h-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-85 group-hover:contrast-115"
                  />
                  
                  {/* Gradient Overlay for Typography & Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none group-hover:from-black group-hover:via-black/30 transition-all duration-500" />

                  {/* Corner Status Pill */}
                  <div className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-zinc-950/80 border border-white/15 backdrop-blur-md text-[10px] font-mono text-emerald-400 flex items-center gap-1.5 shadow-md">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                    <span>Nihal Salam</span>
                  </div>

                  {/* Interactive touch hint */}
                  <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-zinc-950/80 border border-white/10 text-[9px] font-mono text-zinc-300 backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity">
                    Touch for Dark Mode 🌓
                  </div>

                  {/* Degree Badge at bottom */}
                  <div className="absolute bottom-3 right-3 px-2.5 py-1 rounded-lg bg-zinc-900/90 border border-white/10 text-[10px] font-mono text-zinc-300 backdrop-blur-md">
                    B.E. ISE · 2026
                  </div>
                </div>

                {/* Developer Metrics / Quick Snapshot */}
                <div className="grid grid-cols-2 gap-2 text-xs font-mono">
                  <div className="p-2.5 rounded-xl border border-white/5 bg-zinc-900/50 flex items-center gap-2">
                    <Code2 className="w-4 h-4 text-emerald-400" />
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase">Core Stack</div>
                      <div className="font-semibold text-zinc-200">Python / React</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl border border-white/5 bg-zinc-900/50 flex items-center gap-2">
                    <Database className="w-4 h-4 text-blue-400" />
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase">Database</div>
                      <div className="font-semibold text-zinc-200">MySQL / Postgres</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl border border-white/5 bg-zinc-900/50 flex items-center gap-2">
                    <Cpu className="w-4 h-4 text-purple-400" />
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase">AI & RAG</div>
                      <div className="font-semibold text-zinc-200">LLMs / OpenCV</div>
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl border border-white/5 bg-zinc-900/50 flex items-center gap-2">
                    <Cloud className="w-4 h-4 text-amber-400" />
                    <div>
                      <div className="text-[10px] text-muted-foreground uppercase">Cloud & Ops</div>
                      <div className="font-semibold text-zinc-200">AWS / Docker</div>
                    </div>
                  </div>
                </div>

                {/* Status Bar */}
                <div className="flex items-center justify-between text-[11px] font-mono text-muted-foreground pt-1 border-t border-white/5">
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                    Emdata Networks Intern
                  </span>
                  <a
                    href="#projects"
                    className="text-zinc-300 hover:text-white flex items-center gap-1"
                  >
                    View Work →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Scroll Indicator matching Reference Layout */}
      <div className="max-w-7xl mx-auto w-full pt-12 flex items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-widest">
        <div className="flex items-center gap-2">
          <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          <span>Scroll to explore</span>
        </div>
        <a
          href="#about"
          className="flex items-center gap-1.5 hover:text-white transition-colors"
        >
          <span>Next: About</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
};
