import Image from "next/image";
import { Reveal } from "@/components/motion/Reveal";
import { authorGallery, type AuthorGalleryPhoto } from "@/data/gallery";
import { cn } from "@/lib/utils";

function MarqueeRow({
  photos,
  duration = 40,
  reverse = false,
}: {
  photos: AuthorGalleryPhoto[];
  duration?: number;
  reverse?: boolean;
}) {
  // Duplikasi foto agar marquee mengalir mulus tanpa sela di layar lebar
  const displayPhotos = [...photos, ...photos];

  return (
    <div className="group/row relative w-full overflow-hidden motion-reduce:overflow-x-auto">
      <div
        className="flex w-max animate-marquee will-change-transform group-hover/row:[animation-play-state:paused] motion-reduce:animate-none"
        style={{
          animationDuration: `${duration}s`,
          animationDirection: reverse ? "reverse" : "normal",
          willChange: "transform",
          transform: "translateZ(0)",
        }}
      >
        {[0, 1].map((copy) => (
          <div
            key={copy}
            aria-hidden={copy === 1 ? "true" : undefined}
            className="flex w-max shrink-0"
          >
            {displayPhotos.map((photo, index) => (
              <figure
                key={`${copy}-${photo.src}-${index}`}
                className="group/card relative mr-4 aspect-[4/3] w-[270px] shrink-0 overflow-hidden rounded-2xl border border-stone-200 bg-stone-100 shadow-sm transition-all duration-300 hover:z-10 hover:border-amber-300 hover:shadow-md sm:w-[330px] lg:w-[380px]"
              >
                <Image
                  src={photo.src}
                  alt={copy === 0 ? photo.alt : ""}
                  fill
                  sizes="(min-width: 1024px) 380px, (min-width: 640px) 330px, 270px"
                  className="object-cover transition-transform duration-700 ease-out group-hover/card:scale-105"
                />

                <figcaption className="absolute inset-x-0 bottom-0 flex flex-col gap-0.5 bg-gradient-to-t from-stone-950/90 via-stone-950/40 to-transparent px-3.5 pb-3.5 pt-10 text-white sm:px-4 sm:pb-4">
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

      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-10 bg-gradient-to-r from-paper to-transparent sm:w-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-10 bg-gradient-to-l from-paper to-transparent sm:w-20" />
    </div>
  );
}

export function Gallery() {
  const total = authorGallery.length;

  if (!total) return null;

  // Baris 1: urutan awal (0..total)
  const row1Photos = authorGallery;
  // Baris 2: offset agar kedua baris tidak sama persis posisinya
  const offset = Math.ceil(total / 2);
  const row2Photos = [...authorGallery.slice(offset), ...authorGallery.slice(0, offset)];

  return (
    <section id="galeri" className="overflow-hidden border-t border-stone-200/90 bg-paper py-24">
      <div className="container-site mb-12">
        <Reveal className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
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

      <div className="space-y-4 sm:space-y-5">
        <MarqueeRow photos={row1Photos} duration={38} />
        <MarqueeRow photos={row2Photos} duration={44} />
      </div>
    </section>
  );
}
