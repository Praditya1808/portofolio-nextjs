import { site } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-stone-800 bg-stone-900 py-12 text-xs text-stone-400">
      <div className="container-site flex flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="flex items-center gap-3">
          <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-800 font-serif text-sm font-bold text-amber-200">
            ES
          </span>
          <div>
            <p className="font-serif text-base font-bold text-stone-200">{site.name}</p>
            <p className="text-stone-400">Editor • Depok, Indonesia</p>
          </div>
        </div>

        <p className="text-center font-serif italic text-stone-400 sm:text-right">
          &ldquo;{site.footerQuote}&rdquo;
        </p>

        <p className="text-center text-stone-400 sm:text-right">
          &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
