"use client";

import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import { useReducedMotion } from "framer-motion";
import { profilePhotos, site } from "@/data/site";
import { cn } from "@/lib/utils";

const AUTO_DELAY = 30000;

export function PhotoCarousel() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const [dragOffset, setDragOffset] = useState(0);
  const dragging = useRef(false);
  const startX = useRef(0);
  const reduceMotion = useReducedMotion();

  const total = profilePhotos.length;

  const goTo = useCallback(
    (next: number) => {
      setIndex(((next % total) + total) % total);
    },
    [total],
  );

  useEffect(() => {
    if (paused || reduceMotion) return;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % total);
    }, AUTO_DELAY);
    return () => window.clearInterval(timer);
  }, [index, paused, reduceMotion, total]);

  const onPointerDown = (event: React.PointerEvent<HTMLDivElement>) => {
    if ((event.target as HTMLElement).closest("button")) return;
    dragging.current = true;
    startX.current = event.clientX;
    event.currentTarget.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!dragging.current) return;
    setDragOffset(event.clientX - startX.current);
  };

  const finishDrag = () => {
    if (!dragging.current) return;
    dragging.current = false;
    if (dragOffset < -50) goTo(index + 1);
    else if (dragOffset > 50) goTo(index - 1);
    setDragOffset(0);
  };

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Foto profil El Syifa Thea Salsabila"
      className="relative aspect-[4/5] w-full cursor-grab touch-pan-y select-none overflow-hidden rounded-[1.35rem] bg-stone-200 shadow-inner ring-1 ring-white/60 active:cursor-grabbing"
      onPointerDown={onPointerDown}
      onPointerMove={onPointerMove}
      onPointerUp={finishDrag}
      onPointerCancel={finishDrag}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
    >
      <div
        className="flex h-full will-change-transform"
        style={{
          transform: `translateX(calc(${-index * 100}% + ${dragOffset}px))`,
          transition:
            dragging.current || reduceMotion
              ? "none"
              : "transform 0.45s cubic-bezier(0.25, 1, 0.5, 1)",
        }}
      >
        {profilePhotos.map((photo, photoIndex) => (
          <div key={photo.src} className="relative h-full w-full shrink-0">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 420px, 90vw"
              className="object-cover object-top"
              priority={photoIndex === 0}
            />
            <span className="absolute left-3.5 top-3.5 z-20 inline-flex items-center gap-1.5 rounded-full border border-white/60 bg-white/85 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider text-terracotta shadow-sm backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-forest" />
              Potret {photoIndex + 1}
            </span>
          </div>
        ))}
      </div>

      {/* Garis bingkai tipis di dalam foto */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-2.5 z-10 rounded-[1.1rem] border border-white/30"
      />

      <button
        type="button"
        aria-label="Foto sebelumnya"
        onClick={() => goTo(index - 1)}
        className="absolute left-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-terracotta shadow-lg backdrop-blur-md transition-all hover:-translate-x-0.5 hover:bg-white hover:text-terracotta-dark"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>

      <button
        type="button"
        aria-label="Foto selanjutnya"
        onClick={() => goTo(index + 1)}
        className="absolute right-3 top-1/2 z-30 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/70 bg-white/85 text-terracotta shadow-lg backdrop-blur-md transition-all hover:translate-x-0.5 hover:bg-white hover:text-terracotta-dark"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute right-3.5 top-3.5 z-30 flex items-center gap-2 rounded-full border border-white/60 bg-white/85 px-2.5 py-1.5 shadow-sm backdrop-blur-md">
        <div className="flex items-center gap-1" aria-label="Pilih foto profil">
          {profilePhotos.map((photo, photoIndex) => (
            <button
              key={photo.src}
              type="button"
              aria-label={`Tampilkan foto ${photoIndex + 1}`}
              aria-current={photoIndex === index ? "true" : undefined}
              onClick={() => goTo(photoIndex)}
              className="flex h-6 w-6 items-center justify-center p-0"
            >
              <span
                className={cn(
                  "block h-2 rounded-full transition-all duration-300",
                  photoIndex === index ? "w-5 bg-terracotta" : "w-2 bg-terracotta/25",
                )}
              />
            </button>
          ))}
        </div>
        <span className="pl-1.5 font-mono text-[11px] font-semibold text-terracotta">
          {index + 1}/{total}
        </span>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-20 flex flex-col justify-end bg-gradient-to-t from-[#2D1812]/95 via-[#40251D]/45 to-transparent p-5 pt-16 text-paper">
        <div className="mb-1.5 flex items-center gap-2">
          <span aria-hidden="true" className="h-px w-6 bg-amber-300/90" />
          <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-amber-300">
            {site.role}
          </span>
        </div>
        <p className="font-serif text-[1.6rem] font-bold leading-tight">{site.name}</p>
        <p className="mt-1 flex items-center gap-1.5 text-xs text-stone-300">
          <MapPin className="h-3 w-3 text-amber-300" />
          {site.location}
        </p>
      </div>
    </div>
  );
}
