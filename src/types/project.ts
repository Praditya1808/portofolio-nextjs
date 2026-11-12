export type ProjectManuscript = {
  sampleUrl?: string;
  sampleLabel?: string;
  fullUrl?: string;
  fullLabel?: string;
  accessNote?: string;
};

export type Project = {
  id: number;
  title: string;
  publisher: string;
  year: string;
  role: string;
  badge: string;
  category: string;
  categoryLabel: string;
  wideGallery?: boolean;
  coverBg: string;
  coverAccent: string;
  coverPattern: string;
  images: string[];
  manuscript?: ProjectManuscript;
  synopsis: string;
  highlights: string[];
};
