import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { education } from "@/data/site";

export function Education() {
  return (
    <section id="edukasi" className="py-24">
      <div className="container-narrow">
        <Reveal className="mb-14 text-center">
          <span className="section-eyebrow">Latar Belakang Akademis</span>
          <h2 className="section-heading mt-1.5">Pendidikan &amp; Prestasi</h2>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="relative overflow-hidden rounded-3xl border border-stone-200/90 bg-white p-8 shadow-sm sm:p-12">
            <div className="flex flex-col items-start justify-between gap-6 border-b border-stone-200 pb-8 md:flex-row md:items-center">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-terracotta">
                  {education.degree}
                </span>
                <h3 className="mt-1 font-serif text-2xl font-bold text-stone-900 sm:text-3xl">
                  {education.program}
                </h3>
                <p className="mt-1 text-sm font-medium text-stone-600 sm:text-base">
                  {education.institution}
                </p>
              </div>
              <div className="shrink-0 md:text-right">
                <span className="inline-block rounded-full border border-amber-300 bg-amber-100 px-4 py-1.5 text-xs font-bold text-amber-900 sm:text-sm">
                  {education.gpa}
                </span>
                <p className="mt-2 text-xs font-medium text-stone-500">{education.period}</p>
              </div>
            </div>

            <div className="space-y-5 pt-8 text-sm leading-relaxed text-stone-700">
              <p>{education.summary}</p>
              <div className="grid grid-cols-1 gap-4 pt-1 md:grid-cols-2">
                {education.focus.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-2xl border border-stone-200/80 bg-stone-50 p-4 sm:p-5"
                  >
                    <h4 className="mb-1.5 flex items-center gap-2 text-sm font-bold text-stone-900 sm:text-base">
                      <CheckCircle2 className="h-4 w-4 shrink-0 text-emerald-600" />
                      {item.title}
                    </h4>
                    <p className="text-xs text-stone-600 sm:text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
