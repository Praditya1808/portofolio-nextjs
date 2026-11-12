import Image from "next/image";
import { Check, Star } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { skillPillars, type SkillPillar } from "@/data/site";
import { cn } from "@/lib/utils";

const iconMap: Record<SkillPillar["icon"], { src: string; alt: string }> = {
  editorial: { src: "/assets/edit.png", alt: "Ikon editing" },
  publishing: { src: "/assets/book.png", alt: "Ikon publishing" },
  project: { src: "/assets/closure.png", alt: "Ikon project" },
  tools: { src: "/assets/pen-tool.png", alt: "Ikon tools" },
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
          <p className="mt-3 inline-flex items-center justify-center gap-1.5 text-xs font-medium text-stone-500">
            <Star
              aria-hidden="true"
              className="h-3.5 w-3.5 fill-amber-300 text-amber-500"
            />
            Expertise
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3 xl:gap-8">
          {skillPillars.map((pillar, index) => {
            const icon = iconMap[pillar.icon];
            return (
              <Reveal key={pillar.title} delay={index * 0.06}>
                <article className="group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl border border-stone-200/90 bg-white p-7 shadow-sm transition-all duration-300 ease-out hover:-translate-y-1.5 hover:border-amber-300 hover:shadow-[0_26px_48px_-24px_rgba(81,50,41,0.45)]">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute inset-x-0 top-0 h-1 origin-left scale-x-0 rounded-full bg-gradient-to-r from-amber-300 via-amber-400 to-forest/70 transition-transform duration-500 ease-out group-hover:scale-x-100"
                  />
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-12 -top-12 h-36 w-36 rounded-full bg-amber-100/0 blur-2xl transition-colors duration-500 group-hover:bg-amber-100/90"
                  />
                  <div className="relative">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-amber-50 text-terracotta ring-1 ring-amber-200/70 transition-all duration-300 ease-out group-hover:-rotate-3 group-hover:scale-110 group-hover:bg-amber-100 group-hover:ring-amber-300">
                      <Image
                        src={icon.src}
                        alt={icon.alt}
                        width={28}
                        height={28}
                        className="h-7 w-7 object-contain transition-transform duration-300 ease-out group-hover:scale-105"
                      />
                    </div>
                    <h3 className="mb-2 font-serif text-xl font-bold text-stone-900 transition-colors duration-300 group-hover:text-terracotta">
                      {pillar.title}
                    </h3>
                    <p className="mb-5 text-xs leading-relaxed text-stone-600">
                      {pillar.description}
                    </p>
                    <ul className="space-y-2.5 text-xs text-stone-700 sm:text-sm">
                      {pillar.items.map((item) => {
                        const isTopSkill = pillar.topSkills?.includes(item);
                        return (
                          <li
                            key={item}
                            className={cn(
                              "flex items-start gap-2.5 transition-transform duration-300 ease-out group-hover:translate-x-0.5",
                              isTopSkill && "font-medium text-stone-900",
                            )}
                          >
                            {isTopSkill ? (
                              <Star
                                aria-hidden="true"
                                className="mt-0.5 h-4 w-4 shrink-0 fill-amber-300 text-amber-500 transition-all duration-300 group-hover:rotate-12 group-hover:scale-110"
                              />
                            ) : (
                              <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600 transition-colors duration-300 group-hover:text-terracotta" />
                            )}
                            <span>
                              {item}
                              {isTopSkill ? (
                                <span className="sr-only"> — Expertise</span>
                              ) : null}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                  <div className="relative mt-6 border-t border-stone-100 pt-3.5 text-xs font-semibold text-terracotta transition-colors duration-300 group-hover:border-amber-200">
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
