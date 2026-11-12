# 🚀 Modern Personal Portfolio Website

Website portofolio pribadi yang dibangun dengan pendekatan **Modern Jamstack / Static-First Architecture**. Dirancang untuk kecepatan akses maksimal, SEO-friendly, serta fleksibilitas tinggi dalam kustomisasi komponen UI interaktif seperti *custom modal* dan mikro-animasi yang estetik.

## 🛠️ Tech Stack

* **Framework:** [Next.js](https://nextjs.org/) (App Router)

* **Language:** TypeScript

* **Styling:** [Tailwind CSS](https://tailwindcss.com/)

* **UI Primitives & Custom Modals:** [Shadcn UI](https://ui.shadcn.com/) & [Radix UI](https://www.radix-ui.com/)

* **Animations:** [Framer Motion](https://www.framer.com/motion/)

* **Content Layer:** Local MDX / JSON (atau Headless CMS seperti Sanity / Notion API)

* **Deployment & Edge CDN:** [Vercel](https://vercel.com/)

## 🏗️ Arsitektur Sistem

Sistem ini menggunakan pola **Serverless & Edge-Cached Architecture** untuk memastikan waktu muat (*First Contentful Paint*) mendekati instan tanpa perlu mengelola server backend tradisional.

### Diagram Alur Arsitektur (System Flow)

```
flowchart TD
    subgraph Content_Layer ["1. Content & Data Layer"]
        A[("Local Data<br/>(MDX / JSON)")]
        B[("Headless CMS<br/>(Opsional: Notion / Sanity)")]
    end

    subgraph Dev_Pipeline ["2. Development & CI/CD"]
        C["GitHub Repository"]
        D["Vercel Build Engine<br/>(SSG / ISR Compilation)"]
    end

    subgraph Edge_Delivery ["3. Edge Network & Hosting"]
        E(("Global Edge CDN"))
        F["Serverless Functions<br/>(API Routes / Contact Form)"]
    end

    subgraph Client_UI ["4. Client Browser (User)"]
        G["Static HTML & CSS<br/>(Instant Load)"]
        H["Interactive UI Layer<br/>(Tailwind + Shadcn Custom Modals + Framer Motion)"]
    end

    A & B -->|Fetch at Build Time| D
    C -->|Git Push Trigger| D
    D -->|Deploy Static Assets| E
    D -->|Deploy API| F
    E -->|Serve Cached Pages| G
    G -->|Hydrate UI| H
    H <-->|Form Submit / Dynamic Fetch| F

```

## 🧩 Alur Kerja Komponen & Custom Modal

Untuk menjaga performa tetap ringan namun tetap memiliki tampilan estetik dan interaktif:

1. **Static Generation (SSG):** Halaman utama, daftar proyek, dan profil dirender menjadi file statis saat proses *build* sehingga langsung disajikan oleh CDN.

2. **Client-Side Hydration & Modals:** Komponen interaktif seperti *Project Detail Modal*, *Image Lightbox*, dan navigasi menggunakan **Radix UI / Shadcn** yang di-style dengan **Tailwind CSS** dan dianimasikan dengan **Framer Motion**. Data detail proyek dimuat secara dinamis atau langsung dari *state* lokal tanpa *reload* halaman.

```
sequenceDiagram
    actor User
    participant CDN as Edge CDN
    participant UI as Next.js Client UI
    participant Modal as Custom Modal (Shadcn + Framer)

    User->>CDN: Akses URL Portofolio
    CDN-->>User: Kirim Static HTML/CSS (Super Cepat)
    User->>UI: Klik Kartu Proyek
    UI->>Modal: Trigger State Open + Pass Project Data
    Modal-->>User: Render Animasi Pop-up Estetik (Zero Page Reload)

```

## 📂 Struktur Direktori yang Disarankan

```
├── public/                 # Aset statis (gambar, ikon, CV PDF)
├── src/
│   ├── app/                # Halaman & routing utama (App Router)
│   ├── components/
│   │   ├── ui/             # Komponen dasar (Button, Custom Modal, Dialog)
│   │   ├── sections/       # Bagian halaman (Hero, Projects, About, Contact)
│   │   └── motion/         # Wrapper animasi Framer Motion
│   ├── data/               # File JSON / MDX untuk konten proyek & pengalaman
│   ├── lib/                # Fungsi utilitas & helper
│   └── styles/             # Konfigurasi global CSS & tema Tailwind
├── next.config.mjs         # Konfigurasi framework
├── tailwind.config.ts      # Kustomisasi warna, font, & animasi
└── package.json

```

## 🚀 Cara Menjalankan di Lokal (Local Setup)

1. **Clone repository ini:**

   ```
   git clone https://github.com/username/portfolio-website.git
   cd portfolio-website
   
   ```

2. **Install dependencies:**

   ```
   npm install
   
   ```

3. **Jalankan server development:**

   ```
   npm run dev
   
   ```

4. **Buka di browser:**
   Akses `http://localhost:3000` untuk melihat hasilnya.

## 🎨 Kustomisasi Estetika & Modal

* **Warna & Tipografi:** Ubah variabel tema di `src/styles/globals.css` dan `tailwind.config.ts`.

* **Custom Modals:** Komponen modal berada di `src/components/ui/dialog.tsx`. Kamu dapat memodifikasi efek *backdrop-blur*, *border-radius*, serta kurva animasi masuk/keluar menggunakan properti `motion.div` dari Framer Motion.