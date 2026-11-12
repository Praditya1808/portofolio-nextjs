import { BookOpen, Check, Cpu, PenLine, Users, type LucideIcon } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { skillPillars, type SkillPillar } from "@/data/site";

const iconMap: Record<SkillPillar["icon"], LucideIcon> = {
  editorial: PenLine,
  publishing: BookOpen,
  project: Users,
  tools: Cpu,
};

export function Expertise() {
  return (
    <section id="keahlian" className="border-b border-stone-200/80 bg-stone-100/60 py-24">
      <div className="container-site">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="section-eyebrow">Keahlian &amp; Kompetensi</span>
          <h2 className="section-heading mt-1.5">Editorial &amp; Jurnalisme</h2>
          <p className="mt-2.5 text-sm text-stone-600 sm:text-base">
            Editing, proofreading, layouting, news writing, feature writing, ghost writing.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4 xl:gap-8">
          {skillPillars.map((pillar, index) => {
            const Icon = iconMap[pillar.icon];
            return (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <article className="flex h-full flex-col justify-between rounded-2xl border border-stone-200/90 bg-white p-7 shadow-sm transition-all hover:border-terracotta/40 hover:shadow-md">
                  <div>
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-terracotta">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-bold text-stone-900">
                      {pillar.title}
                    </h3>
                    <p className="mb-5 text-xs leading-relaxed text-stone-600">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2.5 text-xs text-stone-700 sm:text-sm">
                      {pillar.items.map((item) => (
                        <li key={item} className="flex items-start gap-2.5">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="mt-6 border-t border-stone-100 pt-3.5 text-xs font-semibold text-terracotta">
                    {pillar.footer}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
