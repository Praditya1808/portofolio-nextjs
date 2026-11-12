import Image from "next/image";
import { ArrowRight, Images } from "lucide-react";
import type { Project } from "@/types/project";
import { cn } from "@/lib/utils";

type ProjectCardProps = {
  project: Project;
  onSelect: () => void;
};

export function ProjectCard({ project, onSelect }: ProjectCardProps) {
  const cover = project.images[0];
  const photoCount = project.images.length;

  return (
    <article
      role="button"
      tabIndex={0}
      aria-label={`Lihat detail ${project.title}`}
      onClick={(event) => {
        event.currentTarget.focus();
        onSelect();
      }}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect();
        }
      }}
      className="book-card group cursor-pointer rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-4 focus-visible:ring-offset-stone-100"
    >
      <div
        className={cn(
          "book-card-inner relative flex aspect-[2/3] w-full flex-col justify-between overflow-hidden border border-white/10 bg-gradient-to-br p-6 text-white",
          project.coverBg,
        )}
      >
        {cover ? (
          <Image
            src={cover}
            alt={`Sampul ${project.title}`}
            fill
            sizes="(min-width: 1280px) 30vw, (min-width: 640px) 45vw, 90vw"
            className="object-cover"
          />
        ) : null}

        <div
          className={cn(
            "pointer-events-none absolute inset-0",
            cover
              ? "bg-gradient-to-t from-black/85 via-black/10 to-black/50"
              : "bg-black/15 mix-blend-overlay",
          )}
        />

        {!cover ? (
          <div className="absolute -bottom-8 -right-8 select-none text-8xl opacity-15">
            {project.coverPattern}
          </div>
        ) : null}

        <div className="relative z-10 flex items-start justify-between gap-1">
          <span className="max-w-[62%] rounded border border-white/20 bg-white/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-white backdrop-blur-sm">
            {project.categoryLabel}
          </span>
          <span className="rounded border border-amber-400/40 bg-amber-950/70 px-2 py-0.5 text-[10px] font-medium text-amber-200">
            {project.badge}
          </span>
        </div>

        {!cover ? (
          <div className="relative z-10 my-auto px-1 text-center">
            <div className="mb-2 text-3xl opacity-85">{project.coverPattern}</div>
            <p className="mb-2 font-serif text-2xl font-bold leading-tight tracking-wide drop-shadow-sm transition-colors group-hover:text-amber-200">
              {project.title}
            </p>
            <p className="text-[11px] font-medium uppercase tracking-widest text-stone-300">
              {project.publisher}
            </p>
          </div>
        ) : null}

        <div className="relative z-10 flex items-center justify-between gap-2 border-t border-white/20 pt-3 text-[11px] text-stone-300">
          <span className="max-w-[140px] truncate font-medium text-amber-200/90">
            {project.role}
          </span>
          <span className="flex shrink-0 items-center gap-2">
            {photoCount > 1 ? (
              <span className="inline-flex items-center gap-1 rounded border border-white/20 bg-black/45 px-1.5 py-0.5 text-[10px] font-medium text-white backdrop-blur-sm">
                <Images className="h-3 w-3" />
                {photoCount}
              </span>
            ) : null}
            <span className="flex items-center gap-1 font-serif italic text-amber-100 transition-transform group-hover:translate-x-1">
              Detail <ArrowRight className="inline h-3 w-3" />
            </span>
          </span>
        </div>
      </div>

      <div className="mt-3 px-1">
        <h3 className="font-serif text-lg font-bold leading-snug text-stone-900 transition-colors group-hover:text-terracotta">
          {project.title}
        </h3>
        <p className="mt-0.5 flex items-center gap-1.5 text-xs text-stone-600">
          <span>{project.publisher}</span> • <span>{project.year}</span>
        </p>
        <p className="mt-1 text-xs font-medium text-terracotta">Peran: {project.role}</p>
      </div>
    </article>
  );
}
