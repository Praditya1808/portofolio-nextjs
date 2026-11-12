"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useSpring } from "framer-motion";
import { Reveal } from "@/components/motion/Reveal";
import { experience } from "@/data/site";
import { cn } from "@/lib/utils";

export function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 0.8", "end 0.45"],
  });
  const lineProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 26,
    restDelta: 0.001,
  });

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

        <div ref={timelineRef} className="relative ml-4 space-y-12 sm:ml-8">
          <span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-0.5 rounded-full bg-stone-200"
          />
          <motion.span
            aria-hidden="true"
            className="absolute inset-y-0 left-0 w-0.5 origin-top rounded-full bg-gradient-to-b from-terracotta via-amber-400 to-forest/60"
            style={{ scaleY: reduceMotion ? 1 : lineProgress }}
          />
          {experience.map((item, index) => (
            <Reveal key={`${item.title}-${item.period}`} delay={index * 0.04}>
              <article className="group relative pl-7 sm:pl-10">
                {item.highlighted ? (
                  <span
                    aria-hidden="true"
                    className="absolute -left-[9px] top-1.5 h-4 w-4 animate-dot-pulse rounded-full bg-terracotta/40"
                  />
                ) : null}
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
                  <motion.ul
                    className="ml-4 mt-4 list-outside list-disc space-y-2.5 text-xs leading-relaxed text-stone-600 sm:text-sm"
                    initial={reduceMotion ? false : "hidden"}
                    whileInView="show"
                    viewport={{ once: true, margin: "-40px" }}
                    variants={{
                      hidden: {},
                      show: { transition: { staggerChildren: 0.045 } },
                    }}
                  >
                    {item.bullets.map((bullet) => (
                      <motion.li
                        key={bullet}
                        variants={{
                          hidden: { opacity: 0, x: -6 },
                          show: {
                            opacity: 1,
                            x: 0,
                            transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
                          },
                        }}
                      >
                        {bullet}
                      </motion.li>
                    ))}
                  </motion.ul>
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
