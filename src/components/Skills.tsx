import React, { useState } from 'react';
import {
  Code,
  Terminal,
  Globe,
  Server,
  Database,
  Cloud,
  Cpu,
  Wrench,
  CheckCircle,
  Layers,
  Sparkles,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';

// Map icons to categories
const CATEGORY_ICONS: Record<string, React.ReactNode> = {
  languages: <Code className="w-4 h-4 text-emerald-400" />,
  frontend: <Globe className="w-4 h-4 text-blue-400" />,
  backend: <Server className="w-4 h-4 text-amber-400" />,
  databases: <Database className="w-4 h-4 text-rose-400" />,
  'cloud-devops': <Cloud className="w-4 h-4 text-cyan-400" />,
  'ai-ml': <Cpu className="w-4 h-4 text-purple-400" />,
  'tools-concepts': <Wrench className="w-4 h-4 text-zinc-300" />,
};

export const Skills: React.FC = () => {
  const [selectedFilter, setSelectedFilter] = useState<string>('all');

  const filteredCategories =
    selectedFilter === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === selectedFilter);

  return (
    <section
      id="stack"
      className="w-full bg-background text-foreground overflow-hidden relative py-20 md:py-28 lg:py-36 border-t border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
        {/* Section Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
          <div className="space-y-3">
            <span className="title-counter">[003 / SKILLS]</span>
            <h2 className="title">Technical Stack</h2>
            <p className="text-base sm:text-lg text-muted-foreground font-light max-w-xl">
              A verified overview of languages, frameworks, AI tools, databases, and cloud technologies from my practical projects and internships.
            </p>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
            <button
              onClick={() => setSelectedFilter('all')}
              className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                selectedFilter === 'all'
                  ? 'bg-white text-black font-semibold'
                  : 'bg-zinc-900/80 border border-white/10 text-muted-foreground hover:text-white'
              }`}
            >
              All Skills
            </button>
            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-mono uppercase tracking-wider transition-all whitespace-nowrap ${
                  selectedFilter === cat.id
                    ? 'bg-white text-black font-semibold'
                    : 'bg-zinc-900/80 border border-white/10 text-muted-foreground hover:text-white'
                }`}
              >
                {cat.name.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Categorized Skills Grid */}
        <div className="space-y-12">
          {filteredCategories.map((category) => (
            <div
              key={category.id}
              className="border-b border-white/10 pb-10 space-y-6 last:border-b-0"
            >
              {/* Category Header */}
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono tracking-widest text-muted-foreground/60">
                  {category.number}
                </span>
                <div className="w-1.5 h-1.5 rounded-full bg-emerald-400/80" />
                <div className="flex items-center gap-2">
                  {CATEGORY_ICONS[category.id]}
                  <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-zinc-300">
                    {category.name}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-muted-foreground/50 ml-auto">
                  {category.skills.length} competencies
                </span>
              </div>

              {/* Skills Pill Badges */}
              <div className="flex items-center gap-3 sm:gap-4 flex-wrap">
                {category.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="group relative flex items-center gap-2.5 py-2.5 px-4 rounded-full border border-white/10 bg-zinc-950/70 hover:bg-zinc-900 hover:border-white/40 cursor-default transition-all duration-300 shadow-sm"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-zinc-500 group-hover:bg-emerald-400 transition-colors" />
                    <span className="text-xs sm:text-sm font-mono tracking-wide text-zinc-300 group-hover:text-white transition-colors">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Verified Note Banner */}
        <div className="mt-14 p-5 rounded-2xl border border-white/10 bg-zinc-900/30 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
            <span>Skills derived strictly from hands-on academic training, project implementations, and professional internships.</span>
          </div>
          <a
            href="#projects"
            className="text-zinc-200 hover:text-white flex items-center gap-1 uppercase tracking-wider font-semibold whitespace-nowrap"
          >
            See in Action →
          </a>
        </div>
      </div>
    </section>
  );
};

