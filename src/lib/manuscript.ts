export function normalizeManuscriptUrl(value?: string) {
  const raw = typeof value === "string" ? value.trim() : "";
  if (!raw) return "";
  if (/^https:\/\/[^\s]+$/i.test(raw)) return raw;
  if (/^mailto:[^\s]+$/i.test(raw)) return raw;
  return "";
}

export function externalLinkProps(url: string) {
  return /^mailto:/i.test(url)
    ? {}
    : { target: "_blank", rel: "noopener noreferrer" as const };
}
