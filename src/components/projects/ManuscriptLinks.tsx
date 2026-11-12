import { BookOpen, ExternalLink, Lock, ShieldCheck } from "lucide-react";
import { externalLinkProps, normalizeManuscriptUrl } from "@/lib/manuscript";
import type { ProjectManuscript } from "@/types/project";

type ManuscriptLinksProps = {
  manuscript?: ProjectManuscript;
};

export function ManuscriptLinks({ manuscript }: ManuscriptLinksProps) {
  const sampleUrl = normalizeManuscriptUrl(manuscript?.sampleUrl);
  const fullUrl = normalizeManuscriptUrl(manuscript?.fullUrl);

  if (!sampleUrl && !fullUrl) return null;

  const accessNote =
    typeof manuscript?.accessNote === "string" ? manuscript.accessNote.trim() : "";

  return (
    <div className="rounded-xl border border-stone-200 bg-amber-50 p-3.5">
      {accessNote ? (
        <p className="flex items-start gap-2 text-[11px] leading-snug text-stone-600">
          <ShieldCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-terracotta" />
          <span>{accessNote}</span>
        </p>
      ) : null}

      <div className="mt-2.5 flex flex-col gap-2 sm:flex-row">
        {sampleUrl ? (
          <a
            href={sampleUrl}
            {...externalLinkProps(sampleUrl)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg bg-terracotta px-4 py-2 text-xs font-medium text-white transition-colors hover:bg-terracotta-dark"
          >
            <BookOpen className="h-3.5 w-3.5" />
            <span>{manuscript?.sampleLabel || "Baca Sampel"}</span>
            <ExternalLink className="h-3 w-3" />
          </a>
        ) : null}

        {fullUrl ? (
          <a
            href={fullUrl}
            {...externalLinkProps(fullUrl)}
            className="inline-flex flex-1 items-center justify-center gap-1.5 rounded-lg border border-stone-300 bg-white px-4 py-2 text-xs font-medium text-stone-700 transition-colors hover:border-terracotta hover:text-terracotta"
          >
            <Lock className="h-3.5 w-3.5" />
            <span>{manuscript?.fullLabel || "Minta Akses Naskah"}</span>
          </a>
        ) : null}
      </div>
    </div>
  );
}
