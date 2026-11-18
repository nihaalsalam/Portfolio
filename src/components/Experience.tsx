import React from 'react';
import { Briefcase, Calendar, MapPin, CheckCircle2, ChevronRight } from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section
      id="experience"
      className="relative py-20 md:py-28 lg:py-36 border-t border-white/10 bg-background text-foreground overflow-hidden"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-6xl relative z-10">
        {/* Section Heading */}
        <div className="flex flex-col md:items-center mb-16 md:mb-24 gap-4 text-left md:text-center">
          <span className="title-counter">[004 / EXPERIENCE]</span>
          <h2 className="title">Experience</h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-xl font-light">
            Hands-on professional engineering internships delivering full-stack web applications and AI solutions.
          </p>
        </div>

        {/* Vertical Timeline Structure */}
        <div className="relative">
          {/* Vertical Center Line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2" />
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-emerald-400 via-emerald-500/50 to-transparent -translate-x-1/2" />

          {/* Experience Cards */}
          <div className="flex flex-col w-full gap-12 md:gap-20 relative z-20">
            {EXPERIENCES.map((exp, idx) => {
              const isEven = idx % 2 === 0;
              return (
                <div
                  key={exp.id}
                  className={`relative flex items-center justify-between w-full flex-col md:flex-row ${
                    isEven ? 'md:flex-row-reverse' : ''
                  }`}
                >
                  {/* Empty Spacer Column for Desktop */}
                  <div className="w-[calc(50%-2.5rem)] hidden md:block" />

                  {/* Central Node Badge */}
                  <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-9 h-9 md:w-11 md:h-11 rounded-full border border-white/20 bg-zinc-950 z-20 flex items-center justify-center shadow-xl">
                    <div className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse" />
                  </div>

                  {/* Card Container */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-14 md:pl-0 relative group">
                    <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 transition-all duration-300 ease-out hover:border-white/40 hover:shadow-2xl space-y-4">
                      {/* Top Badges */}
                      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-white/10 pb-4">
                        <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 font-semibold tracking-wider uppercase">
                          <Briefcase className="w-3.5 h-3.5" />
                          <span>{exp.company}</span>
                        </div>
                        <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                          <Calendar className="w-3 h-3 text-zinc-400" />
                          <span>{exp.period}</span>
                        </div>
                      </div>

                      {/* Role & Location */}
                      <div>
                        <h3 className="text-xl sm:text-2xl font-black uppercase tracking-tight text-white group-hover:text-emerald-300 transition-colors">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 mt-1">
                          <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                          <span>{exp.location}</span>
                          <span>•</span>
                          <span className="text-emerald-400">{exp.type}</span>
                        </div>
                      </div>

                      {/* Bullet Points */}
                      <ul className="space-y-2.5 text-xs sm:text-sm text-zinc-400 font-light pt-2">
                        {exp.description.map((bullet, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>

                      {/* Tech Stack Chips */}
                      <div className="pt-3 border-t border-white/10 flex flex-wrap gap-1.5">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded-full border border-white/5 bg-zinc-900 text-[11px] font-mono text-zinc-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

