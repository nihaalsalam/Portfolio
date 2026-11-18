import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight, FileDown, Terminal, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

const NAV_LINKS = [
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#stack' },
  { name: 'Work', href: '#projects' },
  { name: 'Experience', href: '#experience' },
  { name: 'Certifications', href: '#certifications' },
  { name: 'Contact', href: '#contact' },
];

export const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [isDark, setIsDark] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('theme');
      if (saved) return saved === 'dark';
      return true;
    }
    return true;
  });

  const toggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      root.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      root.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);

      // Section spy
      const sections = ['home', 'about', 'stack', 'projects', 'experience', 'certifications', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3.5 glass-nav shadow-2xl backdrop-blur-xl'
          : 'py-6 bg-transparent'
      }`}
    >
      <nav className="mx-auto px-4 sm:px-8 lg:px-12 max-w-7xl flex items-center justify-between">
        {/* Logo */}
        <a
          href="#home"
          className="group relative z-10 flex items-center gap-3 focus:outline-none"
        >
          <div className="relative">
            <img
              src="/images/profile-headshot.jpg"
              alt="Muhammed Nihal Salam"
              className="w-9 h-9 rounded-xl object-cover border border-white/20 group-hover:border-emerald-400/80 transition-all shadow-sm"
            />
            <span className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 rounded-full bg-emerald-400 border-2 border-[#0a0a0a]" />
          </div>
          <div className="flex flex-col">
            <span className="text-sm sm:text-base font-black tracking-tight uppercase text-foreground group-hover:opacity-80 transition-opacity">
              {PERSONAL_INFO.name.split(' ')[0]} {PERSONAL_INFO.name.split(' ')[1]}
            </span>
            <span className="text-[10px] font-mono text-muted-foreground tracking-wider uppercase">
              Full Stack Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          <ul className="flex items-center gap-7">
            {NAV_LINKS.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className={`relative text-xs font-semibold uppercase tracking-[0.18em] transition-colors py-1 group ${
                      isActive ? 'text-white' : 'text-muted-foreground hover:text-white'
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute bottom-0 left-0 h-[1.5px] bg-emerald-400 transition-all duration-300 ${
                        isActive ? 'w-full' : 'w-0 group-hover:w-full'
                      }`}
                    />
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2.5">
          {/* Small Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            className="p-2 sm:px-2.5 sm:py-2 rounded-full border border-white/10 bg-zinc-900/80 hover:bg-zinc-800 text-zinc-300 hover:text-white hover:border-white/30 transition-all duration-200 flex items-center gap-1.5 focus:outline-none"
            aria-label="Toggle theme mode"
            title={isDark ? "Switch to Light Theme" : "Switch to Dark Theme"}
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-blue-500" />
            )}
            <span className="hidden md:inline text-[11px] font-mono uppercase tracking-wider">
              {isDark ? "Light" : "Dark"}
            </span>
          </button>

          <a
            href="/resume.pdf"
            download="Muhammed_Nihal_Salam_Resume.pdf"
            className="hidden sm:flex items-center gap-2 px-3.5 py-2 rounded-full border border-white/10 bg-zinc-900/80 hover:bg-zinc-800 text-xs font-mono uppercase tracking-wider text-zinc-300 hover:text-white hover:border-white/30 transition-all duration-200"
            title="Download Full Resume"
          >
            <FileDown className="w-3.5 h-3.5 text-emerald-400" />
            <span>Resume</span>
          </a>

          <a
            href="#contact"
            className="hidden sm:flex items-center gap-1.5 px-4 py-2 rounded-full bg-white text-black hover:bg-zinc-200 text-xs font-semibold uppercase tracking-wider transition-all duration-200 shadow-sm"
          >
            <span>Let's Talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg bg-zinc-900/90 border border-white/10 text-zinc-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[65px] bg-zinc-950/95 border-b border-white/10 backdrop-blur-2xl px-6 py-8 space-y-6 shadow-2xl transition-all">
          <div className="flex flex-col space-y-4">
            {NAV_LINKS.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base font-medium uppercase tracking-widest text-zinc-300 hover:text-white transition-colors py-1 flex items-center justify-between border-b border-zinc-900"
              >
                <span>{link.name}</span>
                <span className="text-xs font-mono text-muted-foreground">→</span>
              </a>
            ))}
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <button
              onClick={() => {
                toggleTheme();
              }}
              className="w-full flex items-center justify-between px-4 py-3 rounded-xl border border-white/10 bg-zinc-900 text-xs font-mono uppercase tracking-wider text-zinc-200"
            >
              <span className="flex items-center gap-2">
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-blue-400" />}
                <span>{isDark ? "Switch to Light Mode" : "Switch to Dark Mode"}</span>
              </span>
              <span className="text-[10px] text-muted-foreground">{isDark ? "Dark Active" : "Light Active"}</span>
            </button>
            <a
              href="/resume.pdf"
              download="Muhammed_Nihal_Salam_Resume.pdf"
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl border border-white/10 bg-zinc-900 text-xs font-mono uppercase tracking-wider text-zinc-200"
            >
              <FileDown className="w-4 h-4 text-emerald-400" />
              <span>Download Resume (PDF)</span>
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-white text-black font-semibold text-xs uppercase tracking-wider"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

