import React from 'react';
import { ArrowUp, Mail, Heart, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="w-full bg-zinc-950 border-t border-white/10 text-muted-foreground py-12 sm:py-16">
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          {/* Brand Info */}
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
              </div>
              <span className="text-base sm:text-lg font-black uppercase text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-400">
              Full Stack Developer • Python & Django • AI & Cloud
            </p>
          </div>

          {/* Social Links & Back To Top */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href={PERSONAL_INFO.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-xs font-mono uppercase tracking-wider text-zinc-400 hover:text-white transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>

            <button
              onClick={scrollToTop}
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-zinc-900 hover:bg-zinc-800 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white hover:border-white/30 transition-all"
              aria-label="Scroll to top"
            >
              <span>Top</span>
              <ArrowUp className="w-3 h-3 text-emerald-400" />
            </button>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground/70">
          <div>
            © {currentYear} {PERSONAL_INFO.name}. All rights reserved.
          </div>
          <div className="flex items-center gap-2">
            <span>Crafted with React, TypeScript & Tailwind CSS</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
