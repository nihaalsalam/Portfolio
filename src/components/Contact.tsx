import React, { useState } from 'react';
import {
  Mail,
  Phone,
  Send,
  Check,
  Copy,
  MessageSquare,
  ArrowUpRight,
  MapPin,
  Sparkles,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [copiedEmail, setCopiedEmail] = useState(false);
  const [submittedStatus, setSubmittedStatus] = useState<string | null>(null);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert('Please fill out all required fields.');
      return;
    }

    // Compose mailto link
    const mailSubject = encodeURIComponent(
      formData.subject ? `[Portfolio Inquiry] ${formData.subject}` : `[Portfolio Inquiry] From ${formData.name}`
    );
    const mailBody = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:${PERSONAL_INFO.email}?subject=${mailSubject}&body=${mailBody}`;
    setSubmittedStatus('Inquiry ready in your mail client. Thank you!');
    setTimeout(() => setSubmittedStatus(null), 5000);
  };

  return (
    <section
      id="contact"
      className="relative pt-20 md:pt-28 lg:pt-36 pb-20 bg-background overflow-hidden border-t border-white/10"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-6xl relative z-10 space-y-16">
        {/* Section Heading matching Reference Website */}
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto space-y-4">
          <span className="title-counter">[007 / CONTACT]</span>
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tighter uppercase text-white leading-tight">
            Have a project in mind?<br />
            <span className="text-zinc-400">Let’s build something amazing together.</span>
          </h2>
          <p className="text-base sm:text-lg font-light text-muted-foreground max-w-xl">
            Currently open for full-time Software Developer, Full Stack Engineer, and AI Engineering roles.
          </p>
        </div>

        {/* Contact Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Direct Contact Info & Quick Connect Cards */}
          <div className="lg:col-span-5 space-y-4">
            {/* Email Card with Copy Button */}
            <div className="p-6 rounded-3xl border border-white/10 bg-zinc-950/80 space-y-3 shadow-xl">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2.5 text-xs font-mono text-muted-foreground uppercase tracking-wider">
                  <Mail className="w-4 h-4 text-emerald-400" />
                  <span>Direct Email</span>
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg border border-white/10 bg-zinc-900 text-[11px] font-mono text-zinc-300 hover:text-white hover:border-white/30 transition-all"
                  title="Copy email to clipboard"
                >
                  {copiedEmail ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400" />
                      <span className="text-emerald-400">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" />
                      <span>Copy</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="text-base sm:text-lg font-bold text-white hover:text-emerald-400 transition-colors block break-all font-mono"
              >
                {PERSONAL_INFO.email}
              </a>
              <p className="text-xs text-muted-foreground font-light">
                Prompt response time within 24 hours.
              </p>
            </div>

            {/* Phone & Location Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase">
                  <Phone className="w-3.5 h-3.5 text-blue-400" />
                  <span>Phone / Call</span>
                </div>
                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="text-sm font-semibold text-white hover:text-blue-400 transition-colors font-mono block"
                >
                  {PERSONAL_INFO.phone}
                </a>
              </div>

              <div className="p-5 rounded-2xl border border-white/10 bg-zinc-950/80 space-y-2">
                <div className="flex items-center gap-2 text-xs font-mono text-muted-foreground uppercase">
                  <MapPin className="w-3.5 h-3.5 text-amber-400" />
                  <span>Location</span>
                </div>
                <div className="text-sm font-semibold text-white font-mono">
                  {PERSONAL_INFO.location}
                </div>
              </div>
            </div>

            {/* Social Cards */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <a
                href={PERSONAL_INFO.linkedIn}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border border-white/10 bg-zinc-950/80 hover:border-white/30 hover:bg-zinc-900/80 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <LinkedinIcon className="w-5 h-5 text-blue-400" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">LinkedIn</div>
                    <div className="text-[10px] font-mono text-muted-foreground">/in/nihalsalam</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-5 rounded-2xl border border-white/10 bg-zinc-950/80 hover:border-white/30 hover:bg-zinc-900/80 transition-all flex items-center justify-between group"
              >
                <div className="flex items-center gap-3">
                  <GithubIcon className="w-5 h-5 text-zinc-200" />
                  <div>
                    <div className="text-xs font-bold text-white uppercase tracking-wider">GitHub</div>
                    <div className="text-[10px] font-mono text-muted-foreground">/nihaalsalam</div>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-zinc-500 group-hover:text-white transition-colors" />
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Contact Form */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl border border-white/10 bg-zinc-950/80 backdrop-blur-xl shadow-2xl space-y-6">
              <div className="flex items-center justify-between border-b border-white/10 pb-4">
                <div className="flex items-center gap-2 text-emerald-400 font-mono text-xs font-bold uppercase tracking-wider">
                  <MessageSquare className="w-4 h-4" />
                  <span>Send Direct Message</span>
                </div>
                <span className="text-[10px] font-mono text-muted-foreground">
                  Immediate Dispatch
                </span>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Alex Morgan"
                      className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-zinc-900/70 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                      Your Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@company.com"
                      className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-zinc-900/70 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Subject
                  </label>
                  <input
                    type="text"
                    value={formData.subject}
                    onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                    placeholder="e.g. Full Stack Developer Opportunity / Project Inquiry"
                    className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-zinc-900/70 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-zinc-400 uppercase tracking-wider">
                    Message *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your team, tech stack, or project..."
                    className="w-full px-4 py-3 rounded-2xl border border-white/10 bg-zinc-900/70 text-sm text-white placeholder-zinc-500 focus:outline-none focus:border-emerald-400 transition-colors resize-none"
                  />
                </div>

                {submittedStatus && (
                  <div className="p-3 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-mono">
                    {submittedStatus}
                  </div>
                )}

                <div className="pt-2 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-white text-zinc-950 font-bold text-xs uppercase tracking-wider hover:bg-zinc-200 transition-all shadow-lg hover:shadow-white/10"
                  >
                    <span>Send Message</span>
                    <Send className="w-4 h-4 text-emerald-600" />
                  </button>

                  <a
                    href="https://wa.me/919745225339"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 text-xs font-mono text-muted-foreground hover:text-emerald-400 transition-colors"
                  >
                    <span>Quick WhatsApp Connect →</span>
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
