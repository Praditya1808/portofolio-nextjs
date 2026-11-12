import { Reveal } from "@/components/motion/Reveal";
import { ContactGlyph, type ContactGlyphName } from "@/components/ui/contact-glyph";
import { contactItems, type ContactItem } from "@/data/site";
import { cn } from "@/lib/utils";

const glyphMap: Record<ContactItem["icon"], ContactGlyphName> = {
  whatsapp: "whatsapp",
  mail: "email",
  linkedin: "social",
  location: "location",
};

const accentMap: Record<ContactItem["accent"], { icon: string; cta: string }> = {
  emerald: { icon: "bg-whatsapp-light text-whatsapp-dark", cta: "text-whatsapp-dark" },
  terracotta: { icon: "bg-amber-50 text-terracotta", cta: "text-terracotta" },
  blue: { icon: "bg-linkedin-light text-linkedin", cta: "text-linkedin" },
  stone: { icon: "bg-stone-100 text-stone-600", cta: "text-stone-500" },
};

export function Contact() {
  return (
    <section id="kontak" className="border-t border-stone-200/80 bg-stone-100/70 py-24">
      <div className="container-site space-y-12 text-center">
        <Reveal className="mx-auto max-w-2xl">
          <span className="section-eyebrow">Terhubung dengan Saya</span>
          <h2 className="section-heading mt-1.5">
            Mari Membangun Komunikasi &amp; Kolaborasi
          </h2>
          <p className="mt-2.5 text-sm text-stone-600 sm:text-base">
            Terbuka untuk diskusi mengenai dunia perbukuan, pertukaran wawasan editorial naskah
            fiksi, kerja sama penerbitan, maupun jejaring profesional literasi.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 text-left sm:grid-cols-2 lg:grid-cols-4">
          {contactItems.map((item, index) => {
            const accent = accentMap[item.accent];

            const content = (
              <>
                <div
                  className={cn(
                    "mb-4 flex h-12 w-12 items-center justify-center rounded-xl transition-transform group-hover:scale-110",
                    accent.icon,
                  )}
                >
                  <ContactGlyph name={glyphMap[item.icon]} className="h-6 w-6" />
                </div>
                <p className="text-xs font-medium text-stone-500">{item.label}</p>
                <p className="mt-0.5 truncate text-base font-bold text-stone-900">
                  {item.value}
                </p>
                {item.cta ? (
                  <span className={cn("mt-3 inline-block text-xs font-semibold", accent.cta)}>
                    {item.cta} &rarr;
                  </span>
                ) : null}
              </>
            );

            const cardClasses =
              "group block rounded-2xl border border-stone-200/90 bg-white p-6 transition-all";

            return (
              <Reveal key={item.label} delay={index * 0.05}>
                {item.href ? (
                  <a
                    href={item.href}
                    target={item.href.startsWith("mailto:") ? undefined : "_blank"}
                    rel={item.href.startsWith("mailto:") ? undefined : "noopener noreferrer"}
                    className={cn(cardClasses, "hover:border-terracotta hover:shadow-md")}
                  >
                    {content}
                  </a>
                ) : (
                  <div className={cardClasses}>{content}</div>
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
