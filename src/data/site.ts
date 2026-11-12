export type NavItem = { label: string; href: string };

export type Stat = { value: string; suffix?: string; label: string };

export type SkillPillar = {
  icon: "editorial" | "publishing" | "project" | "tools";
  title: string;
  description: string;
  items: string[];
  footer: string;
};

export type ExperienceItem = {
  title: string;
  period: string;
  company: string;
  highlighted?: boolean;
  bullets?: string[];
  paragraph?: string;
};

export type ContactItem = {
  icon: "whatsapp" | "mail" | "linkedin" | "location";
  label: string;
  value: string;
  href?: string;
  cta?: string;
  accent: "emerald" | "terracotta" | "blue" | "stone";
};

export const site = {
  name: "El Syifa Thea Salsabila",
  role: "Editor",
  location: "Depok, Jawa Barat, Indonesia",
  email: "elsyifatheas@gmail.com",
  phoneDisplay: "0812-1668-1744",
  phoneHref: "https://wa.me/6281216681744",
  linkedin: "https://www.linkedin.com/in/el-syifa-thea-salsabila/",
  cvUrl: "/docs/CV_El_Syifa_Thea_Salsabila.pdf",
  quote: "Membacalah untuk mengasah empati dan logika. Menulislah untuk mencerdaskan kehidupan bangsa.",
  footerQuote: "Menghidupkan cerita, menyempurnakan setiap helai kata.",
  description:
    "Portofolio resmi El Syifa Thea Salsabila: Editor naskah buku fiksi, pengembang cerita, dan spesialis penerbitan end-to-end berlatar belakang S.Pd. Bahasa dan Sastra Indonesia Universitas Negeri Malang.",
} as const;

export const navItems: NavItem[] = [
  { label: "Profil", href: "#profil" },
  { label: "Keahlian", href: "#keahlian" },
  { label: "Pengalaman", href: "#pengalaman" },
  { label: "Karya Buku", href: "#karya" },
  { label: "Sentuhan Editor", href: "#sentuhan-editor" },
  { label: "Edukasi", href: "#edukasi" },
  { label: "Galeri", href: "#galeri" },
  { label: "Kontak", href: "#kontak" },
];

// disabled for now, will be re-enabled in the future
// export const heroStats: Stat[] = [
//   { value: "~2.000", label: "Pre-Orders Buku Komersial" },
//   { value: "20–24", label: "Buku / Tahun (1–2 / bulan)" },
//   { value: "3.81", suffix: "/4.00", label: "IPK Sastra Indonesia UM" },
//   { value: "7 Sem.", label: "Lulus Sarjana Tercepat" },
// ];

export const profilePhotos = [
  { src: "/images/el-syifa.jpg", alt: "El Syifa Thea Salsabila — foto profil 1" },
  { src: "/images/el-syifa1.jpg", alt: "El Syifa Thea Salsabila — foto profil 2" },
  { src: "/images/el-syifa2.jpg", alt: "El Syifa Thea Salsabila — foto profil 3" },
];

export const skillPillars: SkillPillar[] = [
  {
    icon: "editorial",
    title: "Content Editorial",
    description:
      "Penyuntingan naskah secara komprehensif mulai dari struktur cerita hingga tanda baca terkecil.",
    items: [
      "Copy Editing",
      "Proofreading",
      "Developmental Editing",
      "Content Development",
      "Final Quality Control",
      "Feature & News Writing",
    ],
    footer: "Standar KBBI & EYD",
  },
  {
    icon: "publishing",
    title: "Product & Project Management",
    description:
      "Pengembangan produk buku dari tahap negosiasi naskah hingga siap masuk mesin percetakan, dengan manajemen alur kerja terstruktur agar tenggat waktu dan kualitas buku tetap terjaga.",
    items: [
      "Author Pitching & Sourcing",
      "Negosiasi & Proposal Naskah",
      "Aplikasi & Administrasi ISBN",
      "Konsep Produk & Kemasan",
      "Visual Direction (Cover & Art)",
      "Koordinasi Cetak (Print Ops)",
      "Editorial Timelines & Workflow",
      "Author relations management",
      "Koordinasi dengan tim editor eksternal & tim lainnya yang terlibat.",
      "Monitoring Penjualan & Pra-Pesan",
    ],
    footer: "End-to-End Book Publishing • Kapasitas 20–24 Buku / Tahun",
  },
  {
    icon: "tools",
    title: "Tools",
    description:
      "Penguasaan aplikasi industri untuk tata letak dokumen naskah, desain visual, dan kolaborasi kerja.",
    items: [
      "Adobe InDesign",
      "Microsoft Office (Word & Excel)",
      "Google Workspace (Docs & Sheets)",
      "Canva (Visual Design & Briefs)",
      "CapCut (Promotional Video)",
    ],
    footer: "Workflow Digital & Cetak",
  },
];

export const experience: ExperienceItem[] = [
  {
    title: "Editor",
    period: "Januari 2025 – Sekarang",
    company: "AKAD MEDIA CAKRAWALA — Depok, Jawa Barat",
    highlighted: true,
    bullets: [
      "Mengelola pengembangan buku secara end-to-end, dari tahap pencarian naskah (author sourcing) dan penawaran (pitching), penyusunan proposal, penyuntingan, pra-cetak, hingga pemantauan pascapublikasi.",
      "Berkontribusi langsung pada kesuksesan komersial buku-buku seperti Romansa Opium, Through The Flower Shop Window, dan 5 Langkah dengan capaian sekitar 2.000 pre-orders.",
      "Mengordinasikan penulis, proofreader, layouter, tim desainer, tim promosi, dan kolaborator lintas fungsi untuk menjaga standar publikasi tetap prima.",
      "Menyusun editorial timelines dan memantau tenggat waktu proyek di berbagai judul naskah yang aktif secara simultan.",
      "Mengembangkan creative briefs untuk ilustrasi sampul, ilustrasi karakter interior, serta merchandise eksklusif bekerja sama dengan penulis dan manajemen.",
      "Menyunting naskah, mengordinasikan proofreading, tata letak (layout), dan melakukan final quality control sebelum naskah masuk ke percetakan.",
      "Mendukung operasional penerbitan termasuk aplikasi ISBN, koordinasi pesanan cetak, aktivitas promosi, dan pemantauan angka penjualan.",
      "Mendampingi promosi dan acara buku, termasuk jadwal book-tour yang mencakup 4 kota dalam 2 hari.",
      "Menjaga ritme produksi naskah 1–2 buku per bulan (sekitar 20–24 judul buku per tahun).",
    ],
  },
  {
    title: "Freelance Editor",
    period: "Agustus 2024 – Oktober 2024",
    company: "BUTTERFLIES BOOKS — Remote",
    bullets: [
      "Menyunting naskah buku dari segi ketepatan tata bahasa, keluwesan struktur kalimat, konsistensi cerita, keterbacaan (readability), dan standar mutu editorial.",
      "Berkolaborasi erat dengan tim penerbitan untuk memenuhi kriteria publikasi.",
      "Menyelesaikan penyuntingan sekitar 1 buku per bulan selama masa penugasan.",
    ],
  },
  {
    title: "Journalism Intern & Feature Writer",
    period: "2023",
    company: "LP2M UNIVERSITAS NEGERI MALANG × JAWA POS",
    bullets: [
      "Mewawancarai pimpinan universitas, dosen, dan staf, termasuk Rektor dan jajaran pejabat tinggi universitas.",
      "Melakukan riset mendalam dan menulis artikel profil untuk majalah resmi UMagazine, mentransformasikan hasil wawancara menjadi konten feature bernilai baca tinggi.",
      "Memproduksi 1 artikel profil komprehensif setiap minggu selama program magang berlangsung.",
    ],
  },
  {
    title: "Journalism Intern & News Reporter",
    period: "2023",
    company: "FAKULTAS SASTRA, UNIVERSITAS NEGERI MALANG",
    bullets: [
      "Meliput perhelatan akademik, seminar, pameran budaya, dan tamu kunjungan kehormatan fakultas.",
      "Menulis dan menyunting rilis berita untuk situs web resmi Fakultas Sastra dengan ritme 1 artikel per minggu.",
    ],
  },
  {
    title: "Academic Tutor & Private Tutor",
    period: "2020 – 2024",
    company: "PRIMAGAMA & INDEPENDENT TUTOR FREELANCE — Malang",
    paragraph:
      "Memberikan bimbingan akademis bagi siswa jenjang SD, SMP, hingga SMA. Menyesuaikan metode pengajaran dan materi pembelajaran bahasa/literasi sesuai kebutuhan belajar individual setiap peserta didik.",
  },
];

export const education = {
  degree: "Sarjana Pendidikan (S.Pd.)",
  program: "Pendidikan Bahasa dan Sastra Indonesia",
  institution: "Universitas Negeri Malang (UM) — Malang, Jawa Timur",
  gpa: "IPK: 3.81 / 4.00 (Cum Laude)",
  period: "Agustus 2021 – Januari 2025 (7 Semester)",
  summary:
    "Menyelesaikan seluruh kurikulum pendidikan sarjana dalam kurun waktu 7 semester dengan prestasi memuaskan. Fokus studi meliputi:",
  focus: [
    {
      title: "Linguistik & Sintaksis Indonesia",
      description:
        "Pendalaman kaidah morfologi, struktur kalimat majemuk, semantik bahasa Indonesia, dan PUEBI/EYD mutakhir.",
    },
    {
      title: "Telaah Prosa & Kritik Sastra",
      description:
        "Kritik sastra, analisis struktural naskah fiksi, pembentukan karakter, dan perkembangan sastra kontemporer Indonesia.",
    },
  ],
};

export const contactItems: ContactItem[] = [
  {
    icon: "whatsapp",
    label: "WhatsApp / Telepon",
    value: "0812-1668-1744",
    href: "https://wa.me/6281216681744",
    cta: "Kirim Pesan",
    accent: "emerald",
  },
  {
    icon: "mail",
    label: "Email Langsung",
    value: "elsyifatheas@gmail.com",
    href: "mailto:elsyifatheas@gmail.com",
    cta: "Tulis Email",
    accent: "terracotta",
  },
  {
    icon: "linkedin",
    label: "LinkedIn Resmi",
    value: "linkedin.com/in/el-syifa",
    href: "https://www.linkedin.com/in/el-syifa-thea-salsabila/",
    cta: "Buka Profil",
    accent: "blue",
  },
  {
    icon: "location",
    label: "Lokasi / Domisili",
    value: "Depok, Jawa Barat",
    cta: "Indonesia",
    accent: "stone",
  },
];

export const editorialPreviews = [
  {
    id: "draf",
    eyebrow: "Sebelum Disunting",
    title: "Draf Mentah Penulis",
    image: "/images/editorial/SAMPEL-1.png",
    alt: "Preview halaman draf mentah naskah sebelum disunting",
    accent: "rose" as const,
    badge: "Draf",
  },
  {
    id: "suntingan",
    eyebrow: "Hasil Penyuntingan",
    title: "Sentuhan Editorial El Syifa",
    image: "/images/editorial/SAMPEL-2.png",
    alt: "Preview halaman naskah hasil penyuntingan El Syifa",
    accent: "amber" as const,
    badge: "Suntingan",
  },
];
