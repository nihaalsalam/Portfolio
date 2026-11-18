import React from 'react';
import {
  Code,
  Layers,
  Database,
  Cloud,
  Brain,
  CheckCircle2,
  GraduationCap,
  Briefcase,
  Award,
} from 'lucide-react';
import { PERSONAL_INFO, EDUCATION } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="w-full py-20 md:py-28 lg:py-36 bg-background text-foreground overflow-hidden relative border-t border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl space-y-16">
        {/* Section Header: [001 / ABOUT] */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="lg:w-1/3 space-y-6">
            <div className="space-y-3">
              <span className="title-counter">[001 / ABOUT]</span>
              <h2 className="title">About</h2>
              <div className="pt-2 flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase tracking-widest">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                <span>Full-Stack Engineering & AI</span>
              </div>
            </div>

            {/* Profile Portrait Card - Touch to toggle Dark Mode */}
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
              className="relative group rounded-3xl overflow-hidden border border-white/10 bg-zinc-950/80 shadow-2xl transition-all duration-500 hover:border-white/30 cursor-pointer"
              title="Touch / click photo to toggle dark mode"
            >
              <div className="aspect-3/4 w-full overflow-hidden relative">
                {/* Vivid and natural by default, dark mode aesthetic on touch/hover */}
                <img
                  src="/images/about-portrait.jpg"
                  alt="Muhammed Nihal Salam - Developer Profile"
                  className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-85 group-hover:contrast-115"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent pointer-events-none group-hover:from-black group-hover:via-black/30 transition-all duration-500" />
                
                {/* Touch hint badge */}
                <div className="absolute top-3 right-3 px-2 py-0.5 rounded-full bg-zinc-950/80 border border-white/10 text-[9px] font-mono text-zinc-300 backdrop-blur-md opacity-80 group-hover:opacity-100 transition-opacity">
                  Touch for Dark Mode 🌓
                </div>

                <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-zinc-950/85 backdrop-blur-md border border-white/10 space-y-1">
                  <div className="flex items-center justify-between text-xs font-mono">
                    <span className="text-white font-bold uppercase tracking-wider">Muhammed Nihal</span>
                    <span className="text-emerald-400">Bengaluru</span>
                  </div>
                  <div className="text-[11px] text-zinc-400 font-mono">
                    Full Stack • Python • AI
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Lead Statement & Narrative */}
          <div className="lg:w-2/3 space-y-8">
            <h3 className="text-2xl sm:text-4xl md:text-5xl font-light leading-tight text-zinc-100">
              I build <span className="font-normal text-white underline decoration-emerald-500/60 decoration-2 underline-offset-8">scalable, secure</span> web applications and intelligent AI-powered solutions.
            </h3>

            <div className="space-y-5 text-base sm:text-lg text-zinc-400 leading-relaxed font-light">
              <p>
                I am a Full Stack Developer based in Bengaluru, India, skilled in engineering end-to-end applications from database modeling and API architecture to responsive, polished client interfaces. My core toolkit centers on Python, Django, RESTful APIs, MySQL, PostgreSQL, and React.js.
              </p>
              <p>
                In production internships at <span className="text-zinc-200 font-medium">Emdata Networks</span> and <span className="text-zinc-200 font-medium">SuprMentr</span>, I have owned full software lifecycles: designing normalized relational schemas, implementing secure session and JWT authentication workflows, crafting intuitive admin dashboards, and integrating Retrieval-Augmented Generation (RAG) pipelines and Computer Vision classification models.
              </p>
              <p>
                Driven by continuous learning, I combine strong computer science fundamentals from my Information Science & Engineering degree (CGPA 7.8) with modern cloud services on AWS (EC2, S3, IAM, RDS) and AI engineering frameworks.
              </p>
            </div>

            {/* Quick Core Strengths Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/70 hover:border-white/20 transition-all space-y-2">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                  <Layers className="w-4 h-4 text-emerald-400" />
                  <span>Full-Stack & Architecture</span>
                </div>
                <p className="text-xs text-muted-foreground leading-normal font-light">
                  Django, Django REST Framework, React, responsive layouts, modular state management, and end-to-end CRUD systems.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/70 hover:border-white/20 transition-all space-y-2">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                  <Database className="w-4 h-4 text-blue-400" />
                  <span>Data & Storage</span>
                </div>
                <p className="text-xs text-muted-foreground leading-normal font-light">
                  Relational modeling in MySQL & PostgreSQL, Django ORM query optimization, indexing, and MongoDB document storage.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/70 hover:border-white/20 transition-all space-y-2">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                  <Brain className="w-4 h-4 text-purple-400" />
                  <span>AI, NLP & Computer Vision</span>
                </div>
                <p className="text-xs text-muted-foreground leading-normal font-light">
                  Retrieval-Augmented Generation (RAG), FLAN-T5 LLMs, OpenCV image segmentation, and TensorFlow CNN classification.
                </p>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/70 hover:border-white/20 transition-all space-y-2">
                <div className="flex items-center gap-2.5 text-white font-semibold text-sm">
                  <Cloud className="w-4 h-4 text-amber-400" />
                  <span>Cloud & Production Ops</span>
                </div>
                <p className="text-xs text-muted-foreground leading-normal font-light">
                  AWS infrastructure (EC2, S3, IAM, VPC), Docker containerization, Linux environments, Postman API testing, and Git CI/CD.
                </p>
              </div>
            </div>

            {/* Quick Metrics Bar */}
            <div className="p-6 rounded-3xl border border-white/10 bg-zinc-900/40 grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">2</span>
                <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider mt-1">
                  Internships
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-emerald-400 font-mono">3+</span>
                <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider mt-1">
                  Core Projects
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-white font-mono">8</span>
                <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider mt-1">
                  Certifications
                </p>
              </div>
              <div>
                <span className="text-2xl sm:text-3xl font-black text-amber-400 font-mono">7.8</span>
                <p className="text-xs font-mono uppercase text-muted-foreground tracking-wider mt-1">
                  B.E. CGPA
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

