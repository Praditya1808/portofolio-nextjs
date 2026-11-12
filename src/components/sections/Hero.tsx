import { ArrowDown, Download } from "lucide-react";
import { Reveal } from "@/components/motion/Reveal";
import { PhotoCarousel } from "@/components/sections/PhotoCarousel";
import { site } from "@/data/site"; 

export function Hero() {
  const nameParts = site.name.trim().split(/\s+/);
  const highlightName = nameParts.slice(0, Math.min(2, nameParts.length)).join(" ");
  const restName = nameParts.slice(2).join(" ");

  return (
    <section
      id="profil"
      className="relative overflow-hidden border-b border-stone-200/70 pb-20 pt-12 md:pb-28 md:pt-20"
    >
      <div className="container-site">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 xl:gap-16">
          <div className="space-y-7 lg:col-span-7">
            <Reveal>
              <div className="inline-flex items-center gap-2.5 rounded-full border border-amber-300/80 bg-amber-100/90 px-3.5 py-1.5 text-xs font-semibold text-terracotta-dark">
                <span className="h-2 w-2 animate-pulse-soft rounded-full bg-terracotta" />
                {site.role}
              </div>
            </Reveal>

            <Reveal delay={0.05} className="space-y-3">
              <div className="flex items-center gap-3">
                <span
                  aria-hidden="true"
                  className="h-px w-9 bg-gradient-to-r from-terracotta/60 to-transparent sm:w-12"
                />
                <p className="font-serif text-3xl italic text-stone-500 sm:text-4xl">Hi, I&apos;m</p>
              </div>
              <h1 className="font-serif text-4xl font-bold leading-[1.12] tracking-tight text-stone-900 sm:text-5xl lg:text-[3.5rem] xl:text-[4rem]">
                <span className="relative inline-block whitespace-nowrap text-forest">
                  <em className="italic">{highlightName}</em>
                  <svg
                    aria-hidden="true"
                    viewBox="0 0 220 12"
                    preserveAspectRatio="none"
                    className="absolute -bottom-1.5 left-0 h-2.5 w-full text-amber-500/80 sm:-bottom-2 sm:h-3"
                  >
                    <path
                      d="M2 8.5C40 3.5 90 2.5 140 5c30 1.5 55 2.5 78 1"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="4"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                {restName ? <>{" "}{restName}</> : null}
              </h1>
            </Reveal>

            <Reveal delay={0.1}>
              <p className="max-w-2xl text-base leading-relaxed text-stone-600 sm:text-lg">
                Editor with end-to-end book publishing and manuscript development, contributing to
                commercially book with approximately 2.000 pre-orders. Manages and delivering 1–2
                books per month, coordinating authors and cross-functional teams from proposal
                development through printing and post-publication activities. Holds a Bachelor of
                Education in Indonesian Language and Literature from Universitas Negeri Malang,
                completed in 7 semesters with a 3.81/4.00 GPA.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-wrap items-center gap-3.5 pt-2 text-xs font-semibold sm:text-sm">
                <a
                  href={site.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl bg-terracotta px-6 py-3.5 text-white shadow-md transition-all hover:bg-terracotta-dark"
                >
                  <Download className="h-4 w-4" />
                  <span>Unduh CV Lengkap (PDF)</span>
                </a>
                <a
                  href="#pengalaman"
                  className="inline-flex items-center gap-2 rounded-xl border border-stone-300 bg-white px-6 py-3.5 text-stone-800 shadow-sm transition-all hover:bg-stone-100"
                >
                  <span>Rekam Jejak Karier</span>
                  <ArrowDown className="h-4 w-4 text-stone-500" />
                </a>
              </div>
            </Reveal>

            {/* <Reveal delay={0.2}>
              <dl className="grid grid-cols-2 gap-6 border-t border-stone-200 pt-8 sm:grid-cols-4">
                {heroStats.map((stat) => (
                  <div key={stat.label} className="border-l-2 border-amber-600/40 pl-4">
                    <dd className="font-serif text-3xl font-bold leading-none text-stone-900 sm:text-4xl">
                      {stat.value}
                      {stat.suffix ? (
                        <span className="font-sans text-sm text-stone-500">{stat.suffix}</span>
                      ) : null}
                    </dd>
                    <dt className="mt-1 text-xs font-medium text-stone-500">{stat.label}</dt>
                  </div>
                ))}
              </dl>
            </Reveal> */}
          </div>

          <Reveal delay={0.15} className="flex justify-center lg:col-span-5 lg:justify-end">
            <div className="relative isolate w-full max-w-[420px]">
              <div className="absolute -inset-6 -z-10 rounded-[3rem] bg-gradient-to-tr from-amber-200/60 via-rose-100/40 to-emerald-200/50 blur-3xl" />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 translate-x-3 translate-y-4 rounded-[2.1rem] bg-amber-100/80 ring-1 ring-amber-300/60"
              />
              <div
                aria-hidden="true"
                className="absolute inset-0 -z-10 -translate-x-2.5 -translate-y-2.5 rounded-[2.1rem] border border-emerald-300/60"
              />

              <div className="relative rounded-[2rem] border border-white/70 bg-white/90 p-3 shadow-[0_36px_70px_-30px_rgba(81,50,41,0.5)] backdrop-blur-sm sm:p-3.5">
                <PhotoCarousel />

                <div className="relative mt-3 space-y-2 overflow-hidden rounded-2xl border border-amber-200/60 bg-gradient-to-br from-amber-50/80 via-stone-50 to-emerald-50/50 p-4">
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute -left-1 -top-3 font-serif text-6xl leading-none text-amber-400/25"
                  >
                    &ldquo;
                  </span>
                  <p className="relative text-center font-serif text-sm italic leading-relaxed text-stone-700 sm:text-[15px]">
                    &ldquo;{site.quote}&rdquo;
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
