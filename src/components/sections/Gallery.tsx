import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { authorGallery } from "@/data/gallery";

export function Gallery() {
  const photos = authorGallery;
  const total = photos.length;

  if (!total) return null;

  const duration = Math.max(24, total * 7);

  return (
    <section id="galeri" className="overflow-hidden border-t border-stone-200/90 bg-paper py-24">
      <div className="container-site">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="section-eyebrow">Dokumentasi</span>
            <h2 className="section-heading mt-1.5">Editor &amp; Penulis</h2>
            <p className="mt-2 max-w-xl text-sm text-stone-600 sm:text-base">
              Momen kebersamaan dan kolaborasi bersama para penulis dalam setiap proses
              penerbitan.
            </p>
          </div>

          <span className="inline-flex w-fit items-center rounded-lg bg-stone-200 px-4 py-2 text-xs font-semibold text-stone-700 sm:text-sm">
            {total} Foto
          </span>
        </Reveal>
      </div>

      <div className="group relative w-full overflow-hidden motion-reduce:overflow-x-auto">
        <div
          className="flex w-max animate-marquee group-hover:[animation-play-state:paused] motion-reduce:animate-none"
          style={{ animationDuration: `${duration}s` }}
        >
          {[0, 1].map((copy) => (
            <div
              key={copy}
              aria-hidden={copy === 1 ? "true" : undefined}
              className="flex w-max shrink-0"
            >
              {photos.map((photo, index) => (
                <figure
                  key={`${copy}-${photo.src}-${index}`}
                  className="relative mr-4 aspect-[4/3] w-[260px] shrink-0 overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm sm:w-[320px] lg:w-[360px]"
                >
                  <Image
                    src={photo.src}
                    alt={copy === 0 ? photo.alt : ""}
                    fill
                    sizes="(min-width: 1024px) 360px, (min-width: 640px) 320px, 260px"
                    className="object-cover"
                  />

                  <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent px-3 pb-3 pt-10 text-white sm:px-4 sm:pb-4">
                    <span className="text-xs font-semibold leading-snug sm:text-sm">
                      {photo.caption}
                    </span>
                    {photo.author || photo.book ? (
                      <span className="text-[10px] text-stone-300 sm:text-xs">
                        {[photo.author, photo.book].filter(Boolean).join(" • ")}
                      </span>
                    ) : null}
                  </figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-8 bg-gradient-to-r from-paper to-transparent sm:w-16" />
        <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-8 bg-gradient-to-l from-paper to-transparent sm:w-16" />
      </div>
    </section>
  );
}
