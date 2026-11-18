import React from 'react';
import { GraduationCap, Calendar, MapPin, Award, BookOpen, CheckCircle2 } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section
      id="education"
      className="relative py-20 md:py-24 border-t border-white/10 bg-background text-foreground"
    >
      <div className="container mx-auto px-4 sm:px-8 lg:px-12 max-w-6xl">
        <div className="flex flex-col gap-4 mb-12 sm:mb-16">
          <span className="title-counter">[005 / ACADEMICS]</span>
          <h2 className="title">Education</h2>
          <p className="text-base sm:text-lg text-muted-foreground font-light max-w-xl">
            Formal undergraduate academic qualification in engineering and computer science.
          </p>
        </div>

        {/* Education Highlight Card */}
        <div className="relative rounded-3xl border border-white/10 bg-zinc-950/80 p-6 sm:p-10 transition-all duration-300 hover:border-white/30 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Left Col: Degree and Institution */}
            <div className="lg:col-span-8 space-y-4">
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 font-mono text-xs uppercase tracking-wider font-semibold">
                  Bachelor of Engineering
                </span>
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5 text-zinc-500" />
                  {EDUCATION.period}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black uppercase text-white tracking-tight">
                {EDUCATION.degree}
              </h3>

              <div className="flex items-center gap-2 text-zinc-300 font-medium text-base">
                <GraduationCap className="w-5 h-5 text-emerald-400" />
                <span>{EDUCATION.institution}</span>
              </div>

              <div className="flex items-center gap-1.5 text-xs font-mono text-muted-foreground">
                <MapPin className="w-3.5 h-3.5" />
                <span>{EDUCATION.location}</span>
              </div>

              {/* Highlights */}
              <div className="pt-4 space-y-2.5">
                {EDUCATION.highlights.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-400 font-light">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Col: CGPA Metric Card */}
            <div className="lg:col-span-4 flex flex-col justify-center items-center lg:items-end">
              <div className="w-full sm:w-auto p-6 sm:p-8 rounded-2xl border border-white/10 bg-zinc-900/60 text-center space-y-2">
                <div className="text-xs font-mono text-muted-foreground uppercase tracking-widest flex items-center justify-center gap-1.5">
                  <Award className="w-4 h-4 text-amber-400" />
                  <span>Cumulative Grade</span>
                </div>
                <div className="text-4xl sm:text-5xl font-black font-mono text-white tracking-tight">
                  7.8 <span className="text-sm font-normal text-muted-foreground">/ 10</span>
                </div>
                <div className="text-[11px] font-mono text-emerald-400">
                  Consistent Academic Standing
                </div>
              </div>
            </div>

            {/* Academic & Graduation Convocation Photos */}
            <div className="lg:col-span-12 pt-6 border-t border-white/10 space-y-4">
              <div className="flex items-center justify-between text-xs font-mono text-muted-foreground uppercase tracking-widest">
                <span className="flex items-center gap-2 text-zinc-300">
                  <Award className="w-4 h-4 text-emerald-400" />
                  <span>Graduation Day & Academic Milestones</span>
                </span>
                <span className="text-zinc-500">Yenepoya Institute of Technology</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* Stage Ceremony Photo */}
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-video">
                  <img
                    src="/images/graduation-stage.jpg"
                    alt="15th Graduation Day Certificate Awarding"
                    className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-85 group-hover:contrast-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none group-hover:from-black group-hover:via-black/30 transition-all duration-500" />
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-zinc-300 bg-zinc-950/80 px-2 py-1 rounded-md backdrop-blur-sm border border-white/5">
                    15th Graduation Day · Degree Awarding
                  </div>
                </div>

                {/* Outdoor Cap & Gown */}
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-video">
                  <img
                    src="/images/graduation-outdoor.jpg"
                    alt="Convocation Cap and Gown"
                    className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-85 group-hover:contrast-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none group-hover:from-black group-hover:via-black/30 transition-all duration-500" />
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-zinc-300 bg-zinc-950/80 px-2 py-1 rounded-md backdrop-blur-sm border border-white/5">
                    Academic Convocation & Certificate
                  </div>
                </div>

                {/* Mentor Photo */}
                <div className="group relative rounded-2xl overflow-hidden border border-white/10 bg-zinc-900 aspect-video">
                  <img
                    src="/images/graduation-mentor.jpg"
                    alt="Graduation with Faculty and Mentors"
                    className="w-full h-full object-cover object-center transition-all duration-500 ease-out group-hover:scale-105 group-hover:brightness-85 group-hover:contrast-115"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-transparent to-transparent pointer-events-none group-hover:from-black group-hover:via-black/30 transition-all duration-500" />
                  <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-zinc-300 bg-zinc-950/80 px-2 py-1 rounded-md backdrop-blur-sm border border-white/5">
                    Faculty & Mentorship Milestone
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

