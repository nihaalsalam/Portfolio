import React, { useState } from 'react';
import { Award, CheckCircle, Sparkles, Shield, BookmarkCheck, Calendar } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [filter, setFilter] = useState<string>('all');

  const filteredCerts =
    filter === 'all'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === filter);

  return (
    <section
      id="certifications"
      className="relative py-20 md:py-28 lg:py-36 border-t border-white/10 bg-background text-foreground"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <span className="title-counter">[006 / CREDENTIALS]</span>
            <h2 className="title">Certifications</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light max-w-xl">
              Verified certifications from industry leaders including Microsoft, NVIDIA, IIT Bombay, Postman, and Simplilearn.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-zinc-900/80 border border-white/10 text-muted-foreground hover:text-white'
              }`}
            >
              All (8)
            </button>
            <button
              onClick={() => setFilter('AI & Cloud')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                filter === 'AI & Cloud'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-zinc-900/80 border border-white/10 text-muted-foreground hover:text-white'
              }`}
            >
              AI & Cloud
            </button>
            <button
              onClick={() => setFilter('Development')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                filter === 'Development'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-zinc-900/80 border border-white/10 text-muted-foreground hover:text-white'
              }`}
            >
              Development
            </button>
            <button
              onClick={() => setFilter('APIs & Methodologies')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                filter === 'APIs & Methodologies'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-zinc-900/80 border border-white/10 text-muted-foreground hover:text-white'
              }`}
            >
              APIs & Agile
            </button>
          </div>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {filteredCerts.map((cert, index) => (
            <div
              key={index}
              className="group relative rounded-2xl border border-white/10 bg-zinc-950/70 p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:border-white/30 hover:bg-zinc-900/70 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <div className="space-y-3">
                {/* Category & Date */}
                <div className="flex items-center justify-between text-[11px] font-mono">
                  <span className="text-emerald-400 font-semibold uppercase tracking-wider">
                    {cert.category}
                  </span>
                  <span className="text-muted-foreground flex items-center gap-1">
                    <Calendar className="w-3 h-3 text-zinc-500" />
                    {cert.date}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-base font-bold text-white group-hover:text-emerald-300 transition-colors tracking-tight leading-snug">
                  {cert.title}
                </h3>
              </div>

              {/* Issuer & Verification Badge */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <div className="space-y-0.5">
                  <span className="text-[10px] font-mono text-muted-foreground uppercase block">
                    Issued By
                  </span>
                  <span className="text-xs font-medium text-zinc-200">
                    {cert.issuer}
                  </span>
                </div>
                <div className="p-2 rounded-xl bg-zinc-900 border border-white/10 text-zinc-400 group-hover:text-emerald-400 transition-colors">
                  <BookmarkCheck className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

