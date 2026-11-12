"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { ManuscriptLinks } from "@/components/projects/ManuscriptLinks";
import { ProjectGallery } from "@/components/projects/ProjectGallery";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

type ProjectDialogProps = {
  project: Project;
  onClose: () => void;
};

export function ProjectDialog({ project, onClose }: ProjectDialogProps) {
  const [galleryIndex, setGalleryIndex] = useState(0);
  const total = project.images.length;

  return (
    <Dialog open onOpenChange={(open) => (!open ? onClose() : undefined)}>
      <DialogContent
        showCloseButton={false}
        className={cn(
          "p-0",
          project.wideGallery ? "sm:max-w-5xl" : "sm:max-w-4xl",
        )}
        onKeyDown={(event) => {
          if (total < 2) return;
          if (event.key === "ArrowRight") {
            event.preventDefault();
            setGalleryIndex((current) => (current + 1) % total);
          } else if (event.key === "ArrowLeft") {
            event.preventDefault();
            setGalleryIndex((current) => (current - 1 + total) % total);
          }
        }}
      >
        <DialogTitle className="sr-only">{project.title}</DialogTitle>
        <DialogDescription className="sr-only">
          Detail peran editorial, sinopsis, galeri foto, dan tautan naskah untuk{" "}
          {project.title}.
        </DialogDescription>

        <DialogClose
          aria-label="Tutup detail buku"
          className="absolute right-3 top-3 z-30 flex h-9 w-9 items-center justify-center rounded-full border border-stone-200 bg-white/95 text-stone-500 shadow-md backdrop-blur transition-colors hover:bg-stone-100 hover:text-stone-800 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
        >
          <X className="h-5 w-5" />
        </DialogClose>

        <div className="grid grid-cols-1 md:grid-cols-12">
          <div className="border-b border-stone-200 bg-stone-50 p-5 pt-14 md:col-span-5 md:border-b-0 md:border-r md:p-6 md:pt-14">
            {total ? (
              <ProjectGallery
                images={project.images}
                title={project.title}
                index={galleryIndex}
                onIndexChange={setGalleryIndex}
              />
            ) : (
              <div className="flex aspect-[2/3] w-full flex-col justify-between rounded-lg border border-white/20 bg-gradient-to-br p-6 text-white shadow-2xl">
                <span className="text-xs font-medium">{project.categoryLabel}</span>
                <div className="my-auto text-center">
                  <div className="mb-3 text-4xl">{project.coverPattern}</div>
                  <p className="font-serif text-2xl font-bold leading-tight">
                    {project.title}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-stone-300">
                    {project.publisher}
                  </p>
                </div>
                <span className="text-xs font-semibold text-amber-300">{project.year}</span>
              </div>
            )}
          </div>

          <div className="space-y-4 p-5 sm:p-6 md:col-span-7">
            <div className="pr-10">
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <span className="whitespace-nowrap rounded-full border border-amber-300 bg-amber-100 px-2.5 py-0.5 text-xs font-semibold text-terracotta">
                  {project.badge}
                </span>
                <span className="text-xs text-stone-500">
                  • {project.publisher} ({project.year})
                </span>
              </div>

              <h2 className="font-serif text-2xl font-bold leading-tight text-stone-900 sm:text-3xl">
                {project.title}
              </h2>
              <p className="mt-0.5 text-sm font-semibold text-terracotta">
                Peran: {project.role}
              </p>
            </div>

            <div>
              <h3 className="mb-1 text-[11px] font-bold uppercase tracking-wider text-stone-500">
                Blurb:
              </h3>
              <p className="whitespace-pre-line rounded-lg border-l-4 border-terracotta bg-[#FAF7F2] p-3 text-sm italic leading-relaxed text-stone-700">
                {project.synopsis}
              </p>
            </div>

            <div>
              <h3 className="mb-1.5 text-[11px] font-bold uppercase tracking-wider text-stone-500">
                Kontribusi &amp; Tanggung Jawab El Syifa:
              </h3>
              <ul className="space-y-1.5 rounded-lg border border-stone-200 bg-stone-50 p-3.5 text-xs text-stone-700 sm:text-sm">
                {project.highlights.map((highlight) => (
                  <li key={highlight} className="flex items-start gap-2">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>

            <ManuscriptLinks manuscript={project.manuscript} />

            <div className="flex items-center justify-between border-t border-stone-200 pt-4">
              <span className="text-xs text-stone-500">Proyek Resmi Penerbitan</span>
              <DialogClose className="rounded-lg bg-stone-900 px-5 py-2 text-xs font-medium text-white transition-colors hover:bg-terracotta">
                Tutup
              </DialogClose>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
