import { cn } from "@/lib/utils";

const glyphSources = {
  whatsapp: "/assets/whatsapp.png",
  email: "/assets/email.png",
  social: "/assets/social.png",
  location: "/assets/location.png",
} as const;

export type ContactGlyphName = keyof typeof glyphSources;

type ContactGlyphProps = {
  name: ContactGlyphName;
  className?: string;
};

/**
 * Menampilkan aset PNG sebagai mask, sehingga bentuk aslinya tetap utuh
 * tetapi warnanya mengikuti `currentColor` dari container (aksen kartu).
 */
export function ContactGlyph({ name, className }: ContactGlyphProps) {
  const mask = `url("${glyphSources[name]}")`;

  return (
    <span
      aria-hidden="true"
      className={cn("block shrink-0 bg-current", className)}
      style={{
        WebkitMaskImage: mask,
        maskImage: mask,
        WebkitMaskRepeat: "no-repeat",
        maskRepeat: "no-repeat",
        WebkitMaskPosition: "center",
        maskPosition: "center",
        WebkitMaskSize: "contain",
        maskSize: "contain",
      }}
    />
  );
}
