export type AuthorGalleryPhoto = {
  src: string;
  alt: string;
  caption: string;
  /** Opsional: nama penulis yang ada di foto. */
  author?: string;
  /** Opsional: judul buku yang dikerjakan bersama. */
  book?: string;
};

/**
 * Galeri "Editor & Penulis".
 *
 * Cara menambah foto:
 * 1. Simpan file foto di `public/images/gallery/`.
 * 2. Tambahkan entri baru di bawah dengan `src` mengarah ke file tersebut.
 * 3. Isi `caption`, dan opsional `author` / `book`.
 *
 * Jumlah foto tidak dibatasi, tetapi galeri hanya menampilkan maksimal 8 foto
 * dalam dua baris (4 + 4 atau 4 + 3) agar komposisinya tetap rapi.
 * Entri `foto-1.jpg` s.d. `foto-6.jpg` saat ini adalah placeholder dan bisa diganti.
 */
export const authorGallery: AuthorGalleryPhoto[] = [
  {
    src: "/images/gallery/foto-1.jpg",
    alt: "Editor bersama penulis — foto 1",
    caption: "Editor bersama penulis",
  },
  {
    src: "/images/gallery/foto-2.jpg",
    alt: "Editor bersama penulis — foto 2",
    caption: "Editor bersama penulis",
  },
  {
    src: "/images/gallery/foto-3.jpg",
    alt: "Editor bersama penulis — foto 3",
    caption: "Editor bersama penulis",
  },
  {
    src: "/images/gallery/foto-4.jpg",
    alt: "Editor bersama penulis — foto 4",
    caption: "Editor bersama penulis",
  },
  {
    src: "/images/gallery/foto-5.jpg",
    alt: "Editor bersama penulis — foto 5",
    caption: "Editor bersama penulis",
  },
  {
    src: "/images/gallery/foto-6.jpg",
    alt: "Editor bersama penulis — foto 6",
    caption: "Editor bersama penulis",
  },
  {
    src: "/images/gallery/foto-6.jpg",
    alt: "Editor bersama penulis — foto 7",
    caption: "Editor bersama penulis",
  },
];
