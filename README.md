# El Syifa Thea Salsabila — Portfolio (Next.js)

Versi modern dari portofolio El Syifa Thea Salsabila. Situs lama (HTML/CSS/JS di root repo) tetap dipertahankan dan tidak diubah oleh project ini.

## Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript**
- **Tailwind CSS 3**
- **Radix UI Dialog** (modal proyek & lightbox preview naskah)
- **Framer Motion** (reveal animation)
- **Lucide React** (ikon)
- Konten lokal berbasis **JSON/TS** di `src/data`
- Siap deploy ke **Vercel**

## Menjalankan

```bash
cd portfolio-next
npm install
npm run dev
```

Buka http://localhost:3000.

Perintah lain:

```bash
npm run typecheck   # cek TypeScript
npm run build       # production build
npm run start       # jalankan hasil build
```

> Hentikan `npm run dev` sebelum menjalankan `npm run build`. Keduanya memakai folder `.next` yang sama, sehingga build yang berjalan bersamaan bisa membuat dev server menampilkan halaman tanpa CSS.

## Struktur

```
src/
├── app/
│   ├── layout.tsx        # metadata, font, JSON-LD
│   └── page.tsx          # komposisi seluruh section
├── components/
│   ├── layout/           # Header, Footer, BackToTop
│   ├── motion/           # Reveal wrapper (Framer Motion)
│   ├── projects/         # ProjectCard, ProjectDialog, ProjectGallery, ManuscriptLinks
│   ├── sections/         # Hero, Expertise, Experience, Projects, Editorial, Education, Contact
│   └── ui/               # primitive ala shadcn (Button, Dialog)
├── data/
│   ├── projects.json     # data buku/proyek
│   └── site.ts           # profil, statistik, keahlian, pengalaman, edukasi, kontak, editorial
├── lib/                  # utils, validasi URL naskah
├── styles/
│   └── globals.css       # Tailwind + tema + efek buku 3D
└── types/                # tipe Project
```

## Mengubah Konten

- **Buku/proyek:** `src/data/projects.json` — tambahkan foto ke `public/images/books/`, lalu isi `images`. Untuk menampilkan tombol naskah, isi `manuscript.sampleUrl` dan/atau `fullUrl` (hanya `https://` dan `mailto:` yang diterima).
- **Profil, pengalaman, edukasi, kontak, preview editorial:** `src/data/site.ts`.
- **Foto profil:** ganti file di `public/images/` dan sesuaikan `profilePhotos` di `site.ts`.
- **Preview editorial:** ganti `public/images/editorial/SAMPEL-1.png` dan `SAMPEL-2.png`.
- **CV:** ganti `public/docs/CV_El_Syifa_Thea_Salsabila.pdf`.
- **Ikon kontak:** `public/assets/whatsapp.png`, `email.png`, `social.png`, `location.png`. Ikon dipakai sebagai CSS mask, jadi warnanya mengikuti aksen kartu (hijau WhatsApp, terracotta email, biru LinkedIn, stone lokasi) di `src/components/sections/Contact.tsx`. Cukup ganti PNG-nya (disarankan 512×512, latar transparan) untuk mengubah bentuk ikon.

## Deploy ke Vercel

1. Import repo ini ke Vercel.
2. Set **Root Directory** ke `portfolio-next`.
3. (Opsional) Set environment variable `NEXT_PUBLIC_SITE_URL` dengan domain final, agar Open Graph image memakai URL absolut yang benar.
4. Deploy. Tidak diperlukan server backend.

## Aksesibilitas

- Modal dan lightbox memakai Radix Dialog: fokus terperangkap, `Escape` menutup, dan judul/deskripsi terbaca screen reader.
- Galeri mendukung tombol panah kiri/kanan saat modal terbuka.
- Animasi menghormati `prefers-reduced-motion`.
