"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

type ProjectGalleryProps = {
  images: string[];
  title: string;
  index: number;
  onIndexChange: (index: number) => void;
};

export function ProjectGallery({ images, title, index, onIndexChange }: ProjectGalleryProps) {
  const [ratio, setRatio] = useState(2 / 3);
  const touchStartX = useRef<number | null>(null);
  const total = images.length;
  const current = images[index];

  useEffect(() => {
    setRatio(2 / 3);
  }, [current]);

  if (!total) return null;

  const goTo = (next: number) => onIndexChange(((next % total) + total) % total);

  return (
    <div className="space-y-3">
      <div
        className="relative w-full overflow-hidden rounded-lg border border-stone-200 bg-stone-900 shadow-2xl"
        style={{ aspectRatio: ratio }}
        onTouchStart={(event) => {
          touchStartX.current = event.touches[0].clientX;
        }}
        onTouchEnd={(event) => {
          if (touchStartX.current === null) return;
          const diff = event.changedTouches[0].clientX - touchStartX.current;
          if (Math.abs(diff) > 40) goTo(index + (diff < 0 ? 1 : -1));
          touchStartX.current = null;
        }}
      >
        <Image
          key={current}
          src={current}
          alt={`Sampul ${title} (${index + 1} dari ${total})`}
          fill
          sizes="(min-width: 768px) 420px, 90vw"
          className="object-contain"
          onLoad={(event) => {
            const image = event.currentTarget;
            if (image.naturalWidth && image.naturalHeight) {
              setRatio(image.naturalWidth / image.naturalHeight);
            }
          }}
        />

        {total > 1 ? (
          <>
            <button
              type="button"
              onClick={() => goTo(index - 1)}
              aria-label="Foto sebelumnya"
              className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-stone-950/70 text-white backdrop-blur-sm transition-colors hover:bg-terracotta"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => goTo(index + 1)}
              aria-label="Foto selanjutnya"
              className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-stone-950/70 text-white backdrop-blur-sm transition-colors hover:bg-terracotta"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
            <span
              aria-live="polite"
              className="absolute bottom-2 right-2 rounded-full border border-white/20 bg-stone-950/75 px-2.5 py-0.5 font-mono text-[11px] font-semibold text-amber-200"
            >
              {index + 1} / {total}
            </span>
          </>
        ) : null}
      </div>

      {total > 1 ? (
        <div className="grid grid-cols-4 gap-2">
          {images.map((image, imageIndex) => (
            <button
              key={image}
              type="button"
              onClick={() => goTo(imageIndex)}
              aria-label={`Lihat foto ${imageIndex + 1}`}
              aria-current={imageIndex === index ? "true" : undefined}
              className={cn(
                "relative aspect-[2/3] overflow-hidden rounded-md border bg-stone-100 transition-all",
                imageIndex === index
                  ? "border-terracotta opacity-100 ring-2 ring-terracotta"
                  : "border-stone-200 opacity-60 hover:opacity-100",
              )}
            >
              <Image
                src={image}
                alt=""
                fill
                sizes="120px"
                className="object-contain"
              />
            </button>
          ))}
        </div>
      ) : null}
    </div>
  );
}
