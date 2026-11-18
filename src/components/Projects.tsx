import React, { useState } from 'react';
import {
  ArrowUpRight,
  ExternalLink,
  Layers,
  Sparkles,
  ChevronRight,
  X,
  CheckCircle2,
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { PROJECTS, Project } from '../data/portfolioData';
import { EcommerceMockup, RagMockup, SkinLesionMockup } from './ProjectMockups';

export const Projects: React.FC = () => {
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);

  const renderMockup = (type: string) => {
    switch (type) {
      case 'ecommerce':
        return <EcommerceMockup />;
      case 'rag':
        return <RagMockup />;
      case 'cv':
        return <SkinLesionMockup />;
      default:
        return <EcommerceMockup />;
    }
  };

  return (
    <section
      id="projects"
      className="relative py-20 md:py-28 lg:py-36 border-t border-white/10 bg-background text-foreground"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
        {/* Section Heading matching Reference Website */}
        <div className="flex flex-col gap-4 mb-14 sm:mb-20">
          <span className="title-counter">[002 / WORK]</span>
          <h2 className="title">Selected Work</h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-2xl">
            Production-grade web applications, generative AI systems, and machine learning models engineered across frontend, backend, and data tiers.
          </p>
        </div>

        {/* Project Cards Stack */}
        <div className="space-y-16 lg:space-y-24">
          {PROJECTS.map((project, index) => (
            <div
              key={project.id}
              className="group relative rounded-3xl border border-white/10 bg-zinc-950/70 hover:border-white/30 transition-all duration-500 overflow-hidden shadow-2xl hover:shadow-white/5"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                {/* Visual Preview Left / Top Area */}
                <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden border-b lg:border-b-0 lg:border-r border-white/10 bg-zinc-900/40">
                  {/* Mockup renderer */}
                  <div className="w-full h-full transition-transform duration-700 ease-out group-hover:scale-[1.02]">
                    {renderMockup(project.diagramType)}
                  </div>

                  {/* Gradient Overlay for subtle polish */}
                  <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-zinc-950/40 via-transparent to-transparent" />
                </div>

                {/* Information Right Area */}
                <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-between space-y-6">
                  <div className="space-y-4">
                    {/* Badge and Number */}
                    <div className="flex items-center justify-between">
                      <span className="px-3 py-1 rounded-full border border-white/10 bg-zinc-900 text-emerald-400 font-mono text-xs uppercase tracking-wider">
                        {project.category}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground tracking-widest">
                        0{index + 1} // 03
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-black uppercase tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed">
                      {project.description}
                    </p>

                    {/* Key Technical Highlights */}
                    <div className="space-y-2 pt-2">
                      <span className="text-[11px] font-mono text-muted-foreground uppercase tracking-widest block">
                        Core Implementations:
                      </span>
                      <ul className="space-y-1.5 text-xs text-zinc-300">
                        {project.features.slice(0, 3).map((feat, fIdx) => (
                          <li key={fIdx} className="flex items-start gap-2">
                            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 pt-3">
                      {project.techStack.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-lg border border-white/5 bg-zinc-900/90 text-zinc-300 text-xs font-mono"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between pt-4 border-t border-white/10">
                    <button
                      onClick={() => setActiveModalProject(project)}
                      className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-emerald-400 hover:text-emerald-300 font-semibold group/btn"
                    >
                      <span>Deep Dive Architecture</span>
                      <ChevronRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                    </button>

                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl border border-white/10 bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white text-xs font-mono tracking-wider transition-all"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                      <ArrowUpRight className="w-3 h-3 text-zinc-400" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal: Deep Dive Architecture & Complete Feature Inspection */}
      {activeModalProject && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-md animate-fade-in">
          <div className="relative w-full max-w-3xl rounded-3xl border border-white/20 bg-zinc-950 p-6 sm:p-8 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-white/10 pb-4">
              <div className="space-y-1">
                <span className="font-mono text-xs text-emerald-400 uppercase tracking-widest">
                  {activeModalProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-black uppercase text-white tracking-tight">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10"
                aria-label="Close modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Overview */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                System Overview
              </h4>
              <p className="text-sm text-zinc-300 leading-relaxed font-light">
                {activeModalProject.fullOverview}
              </p>
            </div>

            {/* Complete Feature Breakdown */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Key Technical Features & Modules
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {activeModalProject.features.map((feat, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-xl border border-white/5 bg-zinc-900/50 flex items-start gap-2.5 text-xs text-zinc-300"
                  >
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* System Specifications / Stats */}
            <div className="grid grid-cols-3 gap-3 p-4 rounded-2xl border border-white/10 bg-zinc-900/30">
              {activeModalProject.stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-[10px] font-mono text-muted-foreground uppercase">
                    {stat.label}
                  </div>
                  <div className="text-xs sm:text-sm font-bold font-mono text-white mt-1">
                    {stat.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Tech Stack */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Full Tech Stack
              </h4>
              <div className="flex flex-wrap gap-2">
                {activeModalProject.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full border border-white/10 bg-zinc-900 text-zinc-200 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Modal Actions */}
            <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
              <button
                onClick={() => setActiveModalProject(null)}
                className="px-4 py-2.5 rounded-xl border border-white/10 text-xs font-mono uppercase text-zinc-300 hover:text-white"
              >
                Close
              </button>
              <a
                href={activeModalProject.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-colors"
              >
                <GithubIcon className="w-4 h-4" />
                <span>Open GitHub</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
