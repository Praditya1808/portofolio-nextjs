"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { FileText, Menu, MessageCircle, X } from "lucide-react";
import { navItems, site } from "@/data/site";
import { cn } from "@/lib/utils";

export function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeId, setActiveId] = useState("profil");
  const pendingHash = useRef<string | null>(null);
  const reduceMotion = useReducedMotion();

  useEffect(() => {
    const sections = navItems
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((section): section is HTMLElement => Boolean(section));

    const onScroll = () => {
      const position = window.scrollY + 120;
      let current = sections[0]?.id ?? "";
      for (const section of sections) {
        if (position >= section.offsetTop) current = section.id;
      }
      if (
        sections.length > 0 &&
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4
      ) {
        current = sections[sections.length - 1].id;
      }
      setActiveId(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };
    const onResize = () => {
      if (window.matchMedia("(min-width: 1024px)").matches) setMenuOpen(false);
    };

    window.addEventListener("keydown", onKeyDown);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("resize", onResize);
    };
  }, [menuOpen]);

  const handleMobileNavigate = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    event.preventDefault();
    pendingHash.current = href;
    setMenuOpen(false);
  };

  const handleMenuExitComplete = () => {
    const href = pendingHash.current;
    if (!href) return;
    pendingHash.current = null;
    window.history.replaceState(null, "", href);
    const target = document.querySelector<HTMLElement>(href);
    target?.scrollIntoView({
      behavior: reduceMotion ? "auto" : "smooth",
      block: "start",
    });
  };

  return (
    <header className="sticky top-0 z-40 border-b border-stone-200/80 bg-[#FAF8F5]/95 backdrop-blur-md">
      <div className="container-site flex h-20 items-center justify-between gap-6">
        <a href="#profil" className="group flex shrink-0 items-center gap-3.5">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-900 font-serif text-lg font-bold text-amber-200 shadow-sm transition-colors group-hover:bg-terracotta group-hover:text-white">
            ES
          </span>
          <span className="leading-tight">
            <span className="block font-serif text-xl font-bold tracking-tight text-stone-900 transition-colors group-hover:text-terracotta sm:text-2xl">
              {site.name}
            </span>
            <span className="block text-[11px] font-semibold uppercase tracking-widest text-stone-500">
              {site.role}
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-5 text-sm font-medium lg:flex" aria-label="Navigasi utama">
          {navItems.map((item) => {
            const active = activeId === item.href.slice(1);
            return (
              <a
                key={item.href}
                href={item.href}
                aria-current={active ? "true" : undefined}
                className={cn(
                  "whitespace-nowrap transition-colors hover:text-terracotta",
                  active ? "font-bold text-terracotta" : "text-stone-600",
                )}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <div className="hidden shrink-0 items-center gap-3 md:flex lg:hidden xl:flex">
          <a
            href={site.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-stone-300 bg-white px-4 py-2.5 text-xs font-semibold tracking-wide text-stone-700 shadow-sm transition-all hover:border-stone-400 hover:text-terracotta"
          >
            <FileText className="h-4 w-4 text-terracotta" />
            <span>Curriculum Vitae</span>
          </a>
          <a
            href={site.phoneHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-stone-900 px-5 py-2.5 text-xs font-semibold tracking-wide text-white shadow-sm transition-all hover:bg-terracotta"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Hubungi Saya</span>
          </a>
        </div>

        <button
          type="button"
          aria-label={menuOpen ? "Tutup menu navigasi" : "Buka menu navigasi"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
          className="rounded-lg p-2 text-stone-700 transition-colors hover:bg-stone-100 hover:text-stone-900 lg:hidden"
        >
          {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      <AnimatePresence initial={false} onExitComplete={handleMenuExitComplete}>
        {menuOpen ? (
          <motion.div
            id="mobile-menu"
            key="mobile-menu"
            initial={reduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={reduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.22, ease: "easeOut" }}
            className="overflow-hidden border-b border-stone-200 bg-white shadow-lg lg:hidden"
          >
            <nav className="space-y-3 px-6 py-5" aria-label="Navigasi mobile">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(event) => handleMobileNavigate(event, item.href)}
                  className="block text-sm font-semibold text-stone-800 transition-colors hover:text-terracotta"
                >
                  {item.label}
                </a>
              ))}
              <div className="space-y-2 border-t border-stone-100 pt-3">
                <a
                  href={site.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-lg border border-stone-300 bg-white py-2.5 text-center text-xs font-semibold text-stone-800"
                >
                  Unduh Curriculum Vitae (PDF)
                </a>
                <a
                  href={site.phoneHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full rounded-lg bg-stone-900 py-2.5 text-center text-xs font-semibold text-white"
                >
                  Hubungi via WhatsApp
                </a>
              </div>
            </nav>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </header>
  );
}
