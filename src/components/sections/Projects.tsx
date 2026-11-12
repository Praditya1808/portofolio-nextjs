"use client";

import { useRef, useState } from "react";
import { Reveal } from "@/components/motion/Reveal";
import { ProjectCard } from "@/components/projects/ProjectCard";
import { ProjectDialog } from "@/components/projects/ProjectDialog";
import projects from "@/data/projects.json";
import type { Project } from "@/types/project";

export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);
  const triggerRef = useRef<HTMLElement | null>(null);
  const items = projects as Project[];

  const openProject = (project: Project) => {
    triggerRef.current =
      document.activeElement instanceof HTMLElement ? document.activeElement : null;
    setSelected(project);
  };

  const closeProject = () => {
    setSelected(null);
    window.requestAnimationFrame(() => triggerRef.current?.focus());
  };

  return (
    <section id="karya" className="border-t border-stone-200/90 bg-stone-100/60 py-24">
      <div className="container-site">
        <Reveal className="mb-12 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="section-eyebrow">Portofolio Karya</span>
            <h2 className="section-heading mt-1.5">Buku &amp; Proyek yang Ditangani</h2>
            <p className="mt-2 max-w-xl text-sm text-stone-600 sm:text-base">
              Klik pada sampul buku untuk melihat rincian peran editorial, sinopsis, dan
              kontribusi El Syifa pada naskah tersebut.
            </p>
          </div>

          <div className="flex flex-wrap gap-2 text-xs font-semibold sm:text-sm">
            <span
              aria-current="true"
              className="rounded-lg bg-terracotta px-4 py-2 text-white shadow-sm"
            >
              Semua Proyek
            </span>
            <span className="rounded-lg bg-stone-200 px-4 py-2 text-stone-700">
              {items.length} Judul
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:gap-10">
          {items.map((project, index) => (
            <Reveal key={project.id} delay={(index % 3) * 0.05}>
              <ProjectCard project={project} onSelect={() => openProject(project)} />
            </Reveal>
          ))}
        </div>
      </div>

      {selected ? (
        <ProjectDialog project={selected} onClose={closeProject} />
      ) : null}
    </section>
  );
}
