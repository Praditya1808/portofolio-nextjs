"use client";

import Image from "next/image";
import { useState } from "react";
import { AlertCircle, CheckCircle2, Maximize2, X, ZoomIn, ZoomOut } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { Reveal } from "@/components/motion/Reveal";
import { editorialPreviews } from "@/data/site";
import { cn } from "@/lib/utils";

type EditorialPreview = (typeof editorialPreviews)[number];
type MobileView = "draf" | "suntingan";

export function Editorial() {
  const [mobileView, setMobileView] = useState<MobileView>("suntingan");
  const [active, setActive] = useState<EditorialPreview | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const openPreview = (preview: EditorialPreview) => {
    setZoomed(false);
    setActive(preview);
  };

  const closePreview = () => {
    setZoomed(false);
    setActive(null);
  };

  return (
    <section
      id="sentuhan-editor"
      className="relative overflow-hidden bg-stone-900 py-24 text-stone-100"
    >
      <div className="container-site relative z-10">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-amber-400">
            Interaktif • The Editorial Eye
          </span>
          <h2 className="mt-1.5 font-serif text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Sentuhan Editorial: Sebelum vs. Sesudah
          </h2>
          <p className="mt-2.5 text-sm text-stone-400 sm:text-base">
            Lihat perbandingan langsung bagaimana kepekaan bahasa dan analisis ritme mengubah
            draf mentah menjadi naskah yang matang, berdaya pikat emosional, dan patuh standar
            kebahasaan.
          </p>

          <div className="mt-6 inline-flex rounded-xl border border-stone-700 bg-stone-800 p-1 text-xs font-semibold lg:hidden">
            <button
              type="button"
              aria-pressed={mobileView === "draf"}
              onClick={() => setMobileView("draf")}
              className={cn(
                "rounded-lg px-5 py-2 transition-all",
                mobileView === "draf"
                  ? "bg-stone-900 text-white shadow"
                  : "text-stone-400 hover:text-white",
              )}
            >
              Draf Awal Naskah
            </button>
            <button
              type="button"
              aria-pressed={mobileView === "suntingan"}
              onClick={() => setMobileView("suntingan")}
              className={cn(
                "rounded-lg px-5 py-2 transition-all",
                mobileView === "suntingan"
                  ? "bg-stone-900 text-white shadow"
                  : "text-stone-400 hover:text-white",
              )}
            >
              Hasil Suntingan ✨
            </button>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2">
          {editorialPreviews.map((preview) => {
            const isRaw = preview.id === "draf";
            const isAmber = preview.accent === "amber";
            const visibleOnMobile = mobileView === preview.id;

            return (
              <Reveal
                key={preview.id}
                delay={isRaw ? 0 : 0.08}
                className={cn("h-full", visibleOnMobile ? "block" : "hidden lg:block")}
              >
                <article
                  className={cn(
                    "relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-7 shadow-2xl sm:p-9",
                    isRaw
                      ? "border border-stone-700/80 bg-stone-800/90"
                      : "border border-amber-500/30 bg-stone-800",
                  )}
                >
                  {!isRaw ? (
                    <div className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-amber-500/10 blur-2xl" />
                  ) : null}

                  <div className="relative z-10 space-y-4">
                    <div className="flex flex-col gap-1 border-b border-stone-700 pb-3.5 text-xs sm:flex-row sm:items-center sm:justify-between">
                      <span
                        className={cn(
                          "flex items-center gap-2 font-semibold",
                          isRaw ? "text-rose-400" : "text-emerald-400",
                        )}
                      >
                        {isRaw ? (
                          <AlertCircle className="h-4 w-4" />
                        ) : (
                          <CheckCircle2 className="h-4 w-4" />
                        )}
                        {preview.title}
                      </span>
                      <span
                        className={cn(
                          "font-medium",
                          isRaw ? "text-stone-400" : "text-amber-300",
                        )}
                      >
                        {preview.eyebrow}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => openPreview(preview)}
                      aria-haspopup="dialog"
                      aria-label={`Perbesar preview ${preview.title.toLowerCase()}`}
                      className={cn(
                        "group relative block w-full overflow-hidden rounded-xl border border-stone-700 bg-stone-950 text-left transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 focus-visible:ring-offset-2 focus-visible:ring-offset-stone-800",
                        isRaw
                          ? "hover:border-rose-400/50"
                          : "hover:border-amber-400/60",
                      )}
                    >
                      <span className="relative block aspect-[5/4] w-full overflow-hidden">
                        <Image
                          src={preview.image}
                          alt={preview.alt}
                          fill
                          sizes="(min-width: 1024px) 45vw, 92vw"
                          className="object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                        />
                      </span>

                      <span className="absolute inset-x-0 bottom-0 flex items-center justify-between gap-3 bg-gradient-to-t from-stone-950 via-stone-950/80 to-transparent px-4 pb-3 pt-10 text-[11px] font-medium text-stone-200">
                        <span className="inline-flex items-center gap-1.5">
                          <Maximize2
                            className={cn(
                              "h-3.5 w-3.5",
                              isAmber ? "text-amber-300" : "text-rose-300",
                            )}
                          />
                          Klik untuk memperbesar
                        </span>
                        <span className="font-mono text-[10px] uppercase tracking-wider text-stone-400">
                          {preview.badge}
                        </span>
                      </span>
                    </button>
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>

      {active ? (
        <Dialog open onOpenChange={(open) => (!open ? closePreview() : undefined)}>
          <DialogContent
            showCloseButton={false}
            className="max-h-[92vh] max-w-4xl border-stone-700 bg-stone-900 p-0 text-stone-100"
          >
            <DialogTitle className="sr-only">{active.title}</DialogTitle>
            <DialogDescription className="sr-only">
              {active.eyebrow}: {active.alt}
            </DialogDescription>

            <div className="flex items-start justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5">
              <div className="min-w-0">
                <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-amber-300">
                  {active.eyebrow}
                </p>
                <h2 className="font-serif text-lg font-bold leading-tight text-white sm:text-xl">
                  {active.title}
                </h2>
              </div>
              <DialogClose
                aria-label="Tutup preview naskah"
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-stone-300 transition-colors hover:bg-white/10 hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                <X className="h-5 w-5" />
              </DialogClose>
            </div>

            <div className="relative bg-stone-950">
              <div
                className={cn(
                  "h-[60vh] w-full sm:h-[64vh]",
                  zoomed ? "cursor-zoom-out overflow-auto" : "overflow-hidden",
                )}
              >
                <div
                  className={cn(
                    "flex w-full",
                    zoomed
                      ? "min-h-full items-start justify-start"
                      : "h-full items-center justify-center p-3 sm:p-5",
                  )}
                >
                  <Image
                    src={active.image}
                    alt={active.alt}
                    width={1298}
                    height={1771}
                    quality={95}
                    loading="eager"
                    onClick={() => setZoomed((value) => !value)}
                    className={cn(
                      "object-contain",
                      zoomed
                        ? "h-auto w-[220%] max-w-none shrink-0 cursor-zoom-out sm:w-[170%]"
                        : "h-full w-auto max-w-full cursor-zoom-in",
                    )}
                  />
                </div>
              </div>

              <button
                type="button"
                onClick={() => setZoomed((value) => !value)}
                aria-pressed={zoomed}
                aria-label={zoomed ? "Perkecil gambar naskah" : "Perbesar gambar naskah"}
                className="absolute right-3 top-3 z-20 inline-flex items-center gap-1.5 rounded-lg border border-white/20 bg-stone-950/80 px-3 py-2 text-xs font-semibold text-white shadow-lg backdrop-blur-sm transition-colors hover:bg-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300"
              >
                {zoomed ? <ZoomOut className="h-4 w-4" /> : <ZoomIn className="h-4 w-4" />}
                <span>{zoomed ? "Perkecil" : "Perbesar"}</span>
              </button>

              {!zoomed ? (
                <span className="pointer-events-none absolute bottom-3 left-3 z-20 rounded-full border border-white/20 bg-stone-950/75 px-3 py-1 text-[10px] font-medium text-stone-200 backdrop-blur-sm">
                  Klik gambar untuk memperbesar
                </span>
              ) : null}
            </div>
          </DialogContent>
        </Dialog>
      ) : null}
    </section>
  );
}
