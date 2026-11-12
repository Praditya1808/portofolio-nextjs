import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/data/site";
import { cn } from "@/lib/utils";

export function Experience() {
  return (
    <section id="pengalaman" className="py-24">
      <div className="container-narrow">
        <Reveal className="mb-16 text-center">
          <span className="section-eyebrow">Rekam Jejak Profesional</span>
          <h2 className="section-heading mt-1.5">Pengalaman Kerja &amp; Karier</h2>
          <p className="mx-auto mt-2 max-w-xl text-sm text-stone-600 sm:text-base">
            Dedikasi mendalam di industri penerbitan buku komersial, jurnalisme kampus, serta
            bimbingan literasi akademik.
          </p>
        </Reveal>

        <div className="relative ml-4 space-y-12 border-l-2 border-stone-200 sm:ml-8">
          {experience.map((item, index) => (
            <Reveal key={`${item.title}-${item.period}`} delay={index * 0.04}>
              <article className="group relative pl-7 sm:pl-10">
                <span
                  className={cn(
                    "absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-4 border-paper transition-transform group-hover:scale-125",
                    item.highlighted ? "bg-terracotta" : "bg-stone-400",
                  )}
                />
                <div className="mb-1 flex flex-wrap items-baseline gap-3">
                  <h3
                    className={cn(
                      "font-serif font-bold text-stone-900",
                      item.highlighted ? "text-2xl sm:text-3xl" : "text-xl sm:text-2xl",
                    )}
                  >
                    {item.title}
                  </h3>
                  <span
                    className={cn(
                      "rounded-full px-3 py-1 text-xs font-semibold",
                      item.highlighted
                        ? "bg-amber-100 text-terracotta"
                        : "bg-stone-200 text-stone-600",
                    )}
                  >
                    {item.period}
                  </span>
                </div>
                <p className="text-sm font-semibold text-stone-700 sm:text-base">
                  {item.company}
                </p>

                {item.bullets?.length ? (
                  <ul className="ml-4 mt-4 list-outside list-disc space-y-2.5 text-xs leading-relaxed text-stone-600 sm:text-sm">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                ) : null}

                {item.paragraph ? (
                  <p className="mt-2 text-xs leading-relaxed text-stone-600 sm:text-sm">
                    {item.paragraph}
                  </p>
                ) : null}
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
