"use client";

import { useState } from "react";   
import { motion, type Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { modules } from "./modul-mingguan/modulesData";

// VARIAN ANIMASI
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 }, // ease dihapus biar tipe aman
  },
};

const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.8 }, // sama, tanpa ease string
  },
};


// mapping gambar per modul (pakai slug)
const moduleImages: Record<string, string> = {
  pendahuluan: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
  "hukum-rakyat-negara":
    "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
  "identitas-nasional":
    "https://admin.visione.co.id/statis/dinamis/detail/1771.jpg",
  "ideologi-pancasila":
    "https://thecolumnist.id/images/artikel/the-columnist-pancasila-sebagai-dasar-dan-falsafah-hidup-indonesia-96.jpeg",
  "konstitusi":
    "https://awsimages.detik.net.id/community/media/visual/2022/03/18/supremasi-hukum-adalah-apa-ini-makna-dan-penjelasannya_169.jpeg?w=1200",
  "fungsi-dan-peran-negara":
    "https://muslimatnu.or.id/wp-content/uploads/2022/12/Anak-membawa-bendera-Foto-Istimewa-600x375.jpg",
  "demokrasi": "data:image/jpeg;base64,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",
  "multikulturalisme":
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c",
};

export default function HomePage() {
 const [openVideo, setOpenVideo] = useState(false);
  const [openPdf, setOpenPdf] = useState(false);
  const [pdfUrl, setPdfUrl] = useState<string | null>(null);
  return (
    <main className="bg-slate-50">
      {/* ================= HERO / HOME ================= */}
      <motion.section
        id="home"
        className="relative overflow-hidden border-b border-slate-100 bg-cover bg-center"
        style={{ backgroundImage: "url('/bg-hero.jpg')" }}
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/70 via-slate-900/40 to-slate-900/10" />

        {/* Ornamen */}
        <div className="pointer-events-none absolute -left-32 top-10 h-64 w-64 rounded-full bg-teal-400/25 blur-3xl" />
        <div className="pointer-events-none absolute right-[-60px] bottom-[-80px] h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto flex max-w-6xl flex-col-reverse gap-12 px-4 py-20 md:flex-row md:items-center md:py-24">
          {/* ============ KIRI: TEKS ============ */}
          <motion.div
            className="flex-1 space-y-7"
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/15 px-4 py-1 text-[11px] font-semibold tracking-[0.26em] text-teal-200 uppercase shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-300" />
              Portofolio Kewarganegaraan
            </div>

            <div className="space-y-2">
              <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl leading-tight text-white drop-shadow-lg">
                Halo, saya{" "}
                <span className="bg-gradient-to-r from-teal-200 via-emerald-200 to-sky-200 bg-clip-text text-transparent">
                  Christian Winata
                </span>
              </h1>
              <p className="text-xs sm:text-[11px] md:text-xs font-medium tracking-[0.3em] text-slate-200/80 uppercase">
                Mahasiswa Informatika · Universitas Matana
              </p>
            </div>

            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-slate-100/90">
              Website ini adalah portofolio pembelajaran mata kuliah{" "}
              <span className="font-semibold text-teal-200">Kewarganegaraan</span>{" "}
              Semester 3. Di sini saya merangkum modul mingguan, refleksi kritis,
              serta dokumentasi karya yang menggambarkan proses belajar menjadi
              warga negara yang aktif, kritis, dan bertanggung jawab di era
              digital.
            </p>

            <div className="flex flex-wrap gap-3">
              <Link
                href="#modul-mingguan"
                className="rounded-full bg-teal-500 px-6 py-2.5 text-sm font-semibold text-white shadow-lg shadow-teal-500/30 hover:bg-teal-600 transition"
              >
                Lihat Modul Mingguan
              </Link>

              <Link
                href="#showcase-karya"
                className="rounded-full border border-white/40 bg-white/10 px-6 py-2.5 text-sm font-semibold text-white hover:bg-white/20 transition"
              >
                Lihat Showcase Karya
              </Link>
            </div>

            <div className="flex flex-wrap gap-3 text-[11px] text-slate-100/80">
              <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 border border-white/20">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                Semester 3 · Mata Kuliah Kewarganegaraan
              </div>
              <div className="inline-flex items-center gap-2 rounded-full bg-white/5 px-3 py-1 border border-white/10">
                📚 Fokus: Demokrasi, HAM, & Konstitusi
              </div>
            </div>
          </motion.div>

       {/* ============ KANAN: FOTO ============ */}
<motion.div
  className="relative flex-1 flex items-center justify-center"
  variants={fadeUp}
  initial="hidden"
  animate="visible"
  transition={{ delay: 0.25 }}
  whileHover={{ scale: 1.01 }}
  whileTap={{ scale: 0.99 }}
>
  {/* Ornamen abstrak belakang foto */}
  <div className="pointer-events-none absolute inset-0">
    <div className="absolute -right-16 -top-10 h-96 w-96 rounded-full bg-teal-400/20 blur-3xl" />
    <div className="absolute -left-10 bottom-0 h-80 w-80 rounded-full bg-sky-400/25 blur-3xl" />
    <div className="absolute inset-[-100px] opacity-30 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.35),transparent_60%),radial-gradient(circle_at_bottom,rgba(56,189,248,0.35),transparent_70%)]" />
  </div>

  {/* Orbit */}
  <div className="relative flex items-center justify-center">
    <div className="absolute h-[480px] w-[480px] rounded-full border border-white/15 border-dashed animate-[spin_22s_linear_infinite]" />
    <div className="absolute h-[420px] w-[420px] rounded-full border border-white/20" />
    <div className="absolute h-[360px] w-[360px] rounded-full border border-white/30" />

    {/* Lingkaran kaca tengah */}
    <div className="absolute h-[300px] w-[300px] rounded-full bg-white/65 backdrop-blur-xl shadow-[0_24px_80px_rgba(15,23,42,0.55)]" />

    {/* Accents */}
    <div className="absolute -top-4 -left-4 h-12 w-12 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 blur-[2px] opacity-70" />
    <div className="absolute bottom-6 -right-4 h-8 w-8 rounded-full bg-teal-300/80 blur-[1px]" />

    {/* FOTO LEBIH BESAR */}
    <div className="relative z-10">
      <img
        src="/profile.png"
        alt="Christian Winata"
        className="h-[420px] w-auto object-contain drop-shadow-[0_30px_60px_rgba(0,0,0,0.45)]"
      />
    </div>
  </div>

  {/* kartu nama */}
  <div className="absolute -bottom-8 z-20 flex items-center gap-3 rounded-2xl bg-white/95 px-5 py-2.5 shadow-xl border border-slate-200">
    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-600 text-xs font-bold text-white">
      CW
    </div>
    <div className="text-xs leading-tight">
      <p className="font-semibold text-slate-900">Christian Winata</p>
      <p className="text-[11px] text-slate-500">
        “Belajar jadi warga negara yang kritis & bertanggung jawab”
      </p>
    </div>
  </div>

  {/* badge */}
  <div className="absolute -top-3 right-6 rounded-2xl bg-white/90 px-3 py-1.5 text-[11px] font-medium text-slate-700 shadow-md border border-slate-200">
    🧠 Berpikir Kritis
  </div>

  <div className="absolute top-14 -left-6 rounded-2xl bg-emerald-500/90 px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg shadow-emerald-500/40">
    🎯 Aktif & Partisipatif
  </div>

  <div className="absolute bottom-20 -right-8 rounded-2xl bg-sky-500/90 px-3 py-1.5 text-[11px] font-semibold text-white shadow-lg shadow-sky-500/40">
    ⚖️ Melek HAM & Konstitusi
  </div>

  {/* MENU LIHAT */}
  <motion.a
    href="#tentang-mata-kuliah"
    className="absolute -bottom-28 right-6 inline-flex items-center gap-2 rounded-full bg-slate-900/75 px-5 py-2 text-[11px] font-semibold text-slate-50 backdrop-blur border border-white/15 shadow-xl"
    whileHover={{ y: -2 }}
    whileTap={{ scale: 0.96 }}
  >
    <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-teal-500 text-[10px]">
      i
    </span>
    <span>Lihat Profil & Mata Kuliah</span>
  </motion.a>
</motion.div>
        </div>
      </motion.section>

      {/* ================= TENTANG MATA KULIAH ================= */}
     <motion.section
  id="tentang-mata-kuliah"
  className="mx-auto max-w-5xl px-4 py-12"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.35 }}
>
        <p className="text-xs font-semibold tracking-[0.22em] text-slate-500">
          TENTANG MATA KULIAH
        </p>

        <h2 className="mt-2 font-serif text-2xl sm:text-3xl text-slate-900">
          Kewarganegaraan di Era Digital
        </h2>

        <div className="mt-6 grid gap-6 text-sm sm:text-base leading-relaxed text-slate-700 md:grid-cols-2">
          <p>
            Mata kuliah Kewarganegaraan membekali mahasiswa dengan pemahaman
            mendasar tentang hak dan kewajiban warga negara, prinsip demokrasi,
            konstitusi, serta pentingnya supremasi hukum dalam kehidupan
            bermasyarakat.
          </p>
          <p>
            Portofolio ini merangkum proses belajar saya melalui modul mingguan,
            tugas, serta refleksi personal yang berkembang dari waktu ke waktu.
          </p>
        </div>
      </motion.section>

      {/* ================= MODUL MINGGUAN ================= */}
      <section
        id="modul-mingguan"
        className="mx-auto max-w-6xl px-4 py-16 border-t border-slate-100"
      >
        <motion.div
          className="text-center mb-10"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.3 }}
        >
          <p className="text-xs font-semibold tracking-[0.22em] text-teal-600 uppercase">
            MODUL MINGGUAN
          </p>
          <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-slate-900">
            Ringkasan Modul
          </h2>
          <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-teal-500" />
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-slate-600">
            Setiap kartu di bawah ini mewakili satu pertemuan. Klik{" "}
            <span className="font-semibold">“Lihat Detail Modul”</span> untuk
            membaca pertanyaan inti, ringkasan materi, bukti pembelajaran, dan
            refleksi mingguan.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
  {modules.map((mod, index) => {
    const imgUrl =
      moduleImages[mod.slug] ??
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb";

    return (
      <motion.article
        key={mod.slug}
        className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-md shadow-slate-900/5 ring-1 ring-slate-100 cursor-pointer transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:ring-teal-500/40"
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        transition={{ duration: 0.5, delay: 0.05 * index }}
        whileHover={{ y: -8 }}
        whileTap={{ scale: 0.97 }}
      >
        {/* Ornamen glow halus saat hover */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-teal-50 via-transparent to-sky-50 transition-opacity duration-300"
        />

        {/* Cover */}
        <div className="relative h-40 w-full overflow-hidden">
          <img
            src={imgUrl}
            alt={mod.shortTitle}
            className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900/35 via-slate-900/10 to-slate-900/60" />
          <div className="absolute left-4 bottom-4">
            <p className="text-[11px] font-semibold tracking-[0.24em] text-teal-200 uppercase">
              {mod.week}
            </p>
            <p className="mt-1 text-sm font-semibold text-white drop-shadow">
              {mod.shortTitle}
            </p>
          </div>
        </div>

        {/* Isi kartu */}
        <div className="flex flex-1 flex-col gap-3 px-4 pt-4 pb-5 relative z-[1]">
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
            {mod.title}
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
            {mod.description}
          </p>

          {/* Baris bawah: info PDF + tombol detail */}
          <div className="mt-auto pt-3 flex items-center justify-between gap-2 text-[11px] sm:text-xs">
            {/* Badge PDF */}
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-slate-600">
              <span className="text-sm">📄</span>
              <span className="font-medium">PDF materi</span>
            </span>

            {/* Tombol Lihat Detail */}
            <Link
              href={`/modul-mingguan/${mod.slug}`}
              className="inline-flex items-center gap-1 rounded-full border border-teal-600/40 bg-teal-50 px-3 py-1.5 text-[11px] sm:text-xs font-semibold text-teal-700 shadow-sm transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white group-hover:border-teal-600"
            >
              <span>Lihat Detail Modul</span>
              <span
                aria-hidden
                className="text-[13px] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              >
                ↗
              </span>
            </Link>
          </div>
        </div>
      </motion.article>
    );
  })}
</div>

      </section>

    {/* ================= SHOWCASE KARYA ================= */}
<motion.section
  id="showcase-karya"
  className="relative mx-auto max-w-6xl px-4 py-20 border-t border-slate-100"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
>
  {/* Ornamen lembut di background */}
  <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-teal-100/50 blur-3xl" />
  <div className="pointer-events-none absolute right-[-80px] bottom-0 h-80 w-80 rounded-full bg-sky-100/60 blur-3xl" />
  <div className="pointer-events-none absolute inset-x-0 bottom-8 h-32 bg-gradient-to-t from-slate-50 to-transparent" />

  <div className="relative space-y-10">
    {/* Judul */}
    <div className="text-center">
      <p className="text-xs font-semibold tracking-[0.22em] text-teal-600 uppercase">
        SHOWCASE KARYA
      </p>
      <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-slate-900">
        Karya Terpilih
      </h2>
      <div className="mx-auto mt-3 h-1 w-24 rounded-full bg-teal-500" />
      <p className="mt-4 max-w-2xl mx-auto text-sm sm:text-base text-slate-600">
        Beberapa karya yang merefleksikan pemahaman saya tentang kewarganegaraan
        di era digital: mulai dari podcast diskusi, artikel reflektif, hingga
        infografis edukatif.
      </p>
    </div>

    {/* PODCAST – kartu besar */}
    <motion.article
      className="flex flex-col overflow-hidden rounded-3xl bg-white/90 backdrop-blur shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 md:flex-row transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-teal-100/90"
      variants={fadeUp}
    >
      {/* Thumbnail – klik buka POPUP YouTube */}
      <motion.button
        type="button"
        whileTap={{ scale: 0.97 }}
        className="relative w-full md:w-1/2 aspect-video md:aspect-auto md:min-h-[260px] overflow-hidden cursor-pointer group"
        onClick={() => setOpenVideo(true)}
      >
        <Image
          src="https://img.youtube.com/vi/mmXRWM3RZPY/maxresdefault.jpg"
          alt="Podcast Peristiwa 1998 & Hak Asasi Manusia"
          fill
          className="object-cover opacity-85 group-hover:scale-105 group-hover:opacity-70 transition-all duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/40 via-slate-900/10 to-transparent" />

        {/* Tombol play di tengah */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-white/85 backdrop-blur shadow-xl group-hover:scale-110 group-active:scale-95 transition">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-10 w-10 text-teal-700"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </div>
        </div>

        <div className="absolute bottom-3 right-4 rounded-full bg-black/60 px-3 py-1 text-[11px] font-medium text-white">
          Klik untuk menonton
        </div>
      </motion.button>

      {/* Deskripsi podcast */}
      <div className="flex flex-1 flex-col gap-3 px-6 py-5 md:px-7 md:py-6">
        <div className="inline-flex flex-wrap items-center gap-2 text-[11px] font-medium text-teal-700">
          <span className="inline-flex h-6 items-center rounded-full bg-teal-50 px-3">
            🎧 Podcast
          </span>
          <span className="inline-flex h-6 items-center rounded-full bg-slate-50 px-3 text-slate-600">
            Peristiwa 1998 &amp; HAM
          </span>
        </div>

        <h3 className="font-semibold text-slate-900 text-base sm:text-lg">
         Podcast – Analisis Politik Tragedi 1998 & Manipulasi Sejarah di Era Modern
        </h3>

        <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
        Episode diskusi bersama Albani Ilmi mahasiswa FISIP UI, aktivis HAM, dan individu yang telah mendapatkan sertifikasi resmi yang mengakui kompetensinya untuk berbicara mengenai isu-isu politik dan sosial. Dalam podcast ini, Bang Bani membedah secara kritis penyangkalan tragedi pemerkosaan massal 1998 oleh Fadli Zon, mengulas upaya manipulasi sejarah oleh pihak berkuasa, serta menjelaskan bagaimana etnis Tionghoa dan perempuan menjadi target kekerasan dalam konflik politik.

Diskusi ini menekankan pentingnya literasi sejarah, kesadaran HAM, dan kepekaan politik bagi generasi muda agar praktik revisi sejarah dan kekerasan berbasis identitas tidak kembali terulang.
        </p>

        <div className="mt-1 flex flex-wrap gap-2 text-[11px]">
          <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 font-medium text-teal-700">
            Podcast
          </span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium text-slate-600">
            Peristiwa 1998
          </span>
          <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium text-slate-600">
            HAM
          </span>
        </div>

        <div className="mt-3 flex flex-wrap items-center justify-between gap-2 text-xs">
          <a
            href="https://youtu.be/mmXRWM3RZPY?si=Le2JZddEzrfIXv_E"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-800"
          >
            Buka di YouTube
            <span aria-hidden>↗</span>
          </a>

          <span className="inline-flex items-center gap-1 text-[11px] text-slate-500">
            ⏱️ <span>Durasi ± 25 menit</span>
          </span>
        </div>
      </div>
    </motion.article>

    {/* Subjudul kecil untuk grid bawah */}
    <div className="flex items-center justify-between">
      <div className="flex items-center gap-2 text-xs font-semibold tracking-[0.18em] text-slate-500 uppercase">
        <span className="inline-block h-[1px] w-6 bg-slate-300" />
        Karya Tulis &amp; Visual
      </div>
    </div>

    {/* Dua karya di bawah */}
    <div className="grid gap-6 md:grid-cols-2">
      {/* Artikel */}
      <motion.article
        className="flex flex-col overflow-hidden rounded-2xl bg-white/90 backdrop-blur shadow-md shadow-slate-900/5 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-teal-100/80"
        variants={fadeUp}
      >
        {/* Thumbnail – klik untuk preview PDF */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          className="relative h-40 w-full overflow-hidden text-left group"
          onClick={() => {
            setPdfUrl("/materi/artikel-ilmiah-pkn.pdf");
            setOpenPdf(true);
          }}
        >
          <Image
            src="/materi/artikel-thumbnail.png"
            alt="Artikel Hak dan Kewajiban Warga Negara"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent group-hover:from-black/45 transition-colors duration-300" />
          <div className="absolute bottom-2 right-3 rounded-full bg-black/65 px-3 py-1 text-[11px] font-medium text-white">
            Klik untuk preview PDF
          </div>
        </motion.button>

        <div className="flex flex-1 flex-col gap-3 px-5 pt-4 pb-5">
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
            Artikel Ilmiah - REVISI SEJARAH DAN ANCAMAN DEMOKRASI KASUS 
PENYANGKALAN PEMERKOSAAN MASSAL 1998 OLEH 
FADLI ZON 
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
           Artikel ilmiah ini membahas secara kritis revisi sejarah dan ancaman terhadap demokrasi melalui studi kasus penyangkalan pemerkosaan massal tahun 1998 oleh Fadli Zon. Tulisan ini menelaah bagaimana upaya distorsi sejarah dapat merusak fondasi demokrasi, mengaburkan fakta pelanggaran HAM berat, serta memengaruhi kesadaran publik tentang keadilan dan kebenaran.

Selain itu, artikel ini mengaitkan isu tersebut dengan hak dan kewajiban warga negara menurut UUD 1945, terutama dalam konteks perlindungan HAM, partisipasi demokratis, dan tanggung jawab moral generasi muda. Pembahasan menjadi relevan bagi mahasiswa Informatika di era digital, karena mereka berperan dalam menjaga ruang informasi yang sehat dari misinformasi dan manipulasi sejarah.
          </p>

          <div className="mt-1 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 font-medium text-teal-700">
              Artikel
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium text-slate-600">
              Hak &amp; Kewajiban
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium text-slate-600">
              UUD 1945
            </span>
          </div>

          {/* Info PDF */}
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
            <span className="inline-flex items-center gap-1">
              📄 <span>PDF Artikel tersedia</span>
            </span>
            <a
              href="/materi/artikel-ilmiah-pkn.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800"
            >
              Buka PDF
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="mt-3">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800"
              onClick={() => {
                setPdfUrl("/materi/artikel-ilmiah-pkn.pdf");
                setOpenPdf(true);
              }}
            >
              Lihat detail artikel
              <span aria-hidden>↗</span>
            </button>
          </div>
        </div>
      </motion.article>

      {/* Infografis */}
      <motion.article
        className="flex flex-col overflow-hidden rounded-2xl bg-white/90 backdrop-blur shadow-md shadow-slate-900/5 ring-1 ring-slate-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:ring-teal-100/80"
        variants={fadeUp}
      >
        {/* Thumbnail – klik untuk preview PDF */}
        <motion.button
          type="button"
          whileTap={{ scale: 0.97 }}
          className="relative h-40 w-full overflow-hidden text-left group"
          onClick={() => {
            setPdfUrl("/materi/infografis-data-presentasi-artikel.pdf");
            setOpenPdf(true);
          }}
        >
          <Image
            src="/materi/infografis-thumbnail.png"
            alt="Infografis Partisipasi Warga Negara"
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent group-hover:from-black/45 transition-colors duration-300" />
          <div className="absolute bottom-2 right-3 rounded-full bg-black/65 px-3 py-1 text-[11px] font-medium text-white">
            Klik untuk preview PDF
          </div>
        </motion.button>

        <div className="flex flex-1 flex-col gap-3 px-5 pt-4 pb-5">
          <h3 className="font-semibold text-slate-900 text-sm sm:text-base">
            Analisis Kuantitatif Revisi Sejarah dan Dampaknya terhadap Kesadaran Demokratis Mahasiswa
          </h3>
          <p className="text-xs sm:text-sm leading-relaxed text-slate-600">
            Presentasi ini menyajikan data kuantitatif yang mendukung pembahasan dalam artikel ilmiah mengenai revisi sejarah tragedi pemerkosaan massal 1998. Analisis 
            mencakup tingkat literasi sejarah, persepsi publik terhadap penyangkalan peristiwa 1998, serta pengaruh misinformasi terhadap sikap dan partisipasi warga negara. 
            Data ini digunakan untuk melihat bagaimana distorsi sejarah dapat mengancam demokrasi dan mengapa pemahaman kritis mahasiswa khususnya di era digital menjadi sangat penting.
          </p>

          <div className="mt-1 flex flex-wrap gap-2 text-[11px]">
            <span className="rounded-full border border-teal-100 bg-teal-50 px-3 py-1 font-medium text-teal-700">
              Infografis
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium text-slate-600">
              Partisipasi
            </span>
            <span className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 font-medium text-slate-600">
              Civic Education
            </span>
          </div>

          {/* Info PDF */}
          <div className="mt-2 flex items-center justify-between text-[11px] text-slate-500">
            <span className="inline-flex items-center gap-1">
              📄 <span>PDF Infografis tersedia</span>
            </span>
            <a
              href="/materi/infografis-data-presentasi-artikel.pdf"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800"
            >
              Buka PDF
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="mt-3">
            <button
              type="button"
              className="inline-flex items-center gap-1 text-xs font-semibold text-teal-700 hover:text-teal-800"
              onClick={() => {
                setPdfUrl("/materi/infografis-data-presentasi-artikel.pdf");
                setOpenPdf(true);
              }}
            >
              Lihat detail infografis
              <span aria-hidden>↗</span>
            </button>
          </div>
        </div>
      </motion.article>
    </div>
  </div>
</motion.section>

{/* MODAL VIDEO YOUTUBE */}
{openVideo && (
  <div className="fixed inset-0 z-[70] flex items-center justify-center">
    <div
      className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm"
      onClick={() => setOpenVideo(false)}
    />
    <div className="relative z-10 w-[92vw] max-w-4xl aspect-video bg-black rounded-2xl overflow-hidden shadow-2xl">
      <iframe
        src="https://www.youtube.com/embed/mmXRWM3RZPY?autoplay=1"
        title="Podcast Peristiwa 1998 & HAM"
        className="w-full h-full"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <button
        onClick={() => setOpenVideo(false)}
        className="absolute top-2 right-2 rounded-full bg-black/60 px-2 py-1 text-xs text-white hover:bg-black/80"
      >
        ✕ Tutup
      </button>
    </div>
  </div>
)}

{/* MODAL PREVIEW PDF */}
{openPdf && pdfUrl && (
  <div className="fixed inset-0 z-[60] flex items-center justify-center">
    <div
      className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
      onClick={() => setOpenPdf(false)}
    />
    <div className="relative z-10 mx-auto h-[80vh] w-[92vw] max-w-4xl rounded-2xl bg-white shadow-xl overflow-hidden flex flex-col">
      <div className="flex items-center justify-between px-4 py-2 border-b border-slate-200 bg-slate-50">
        <p className="text-sm font-semibold text-slate-800">Preview PDF</p>
        <button
          onClick={() => setOpenPdf(false)}
          className="rounded-full px-2 py-1 text-slate-500 hover:bg-slate-200"
        >
          ✕
        </button>
      </div>
      <iframe src={pdfUrl} className="flex-1 w-full" />
    </div>
  </div>
)}




 {/* ================= REFLEKSI AKHIR ================= */}
<motion.section
  id="refleksi-akhir"
  className="relative mx-auto max-w-6xl px-4 py-20 border-t border-slate-100"
  variants={fadeUp}
  initial="hidden"
  whileInView="visible"
  viewport={{ once: false, amount: 0.3 }}
>

  {/* Ornamen lembut background */}
  <div className="pointer-events-none absolute -left-40 top-10 h-72 w-72 rounded-full bg-teal-50/60 blur-3xl" />
  <div className="pointer-events-none absolute right-[-80px] bottom-0 h-80 w-80 rounded-full bg-sky-50/80 blur-3xl" />
  <div className="pointer-events-none absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-slate-50 to-transparent" />

  <div className="relative">
    {/* Heading */}
    <div className="mb-10">
      <p className="text-xs font-semibold tracking-[0.22em] text-slate-400 uppercase">
        REFLEKSI AKHIR
      </p>
      <h2 className="mt-2 font-serif text-3xl sm:text-4xl text-slate-900">
        Refleksi Akhir
      </h2>
      <p className="mt-3 max-w-xl text-sm sm:text-base text-slate-600">
        Berisi refleksi akhir pembelajaran kewarganegaraan selama satu semester,
        ditulis dari sudut pandang saya sebagai mahasiswa Informatika.
      </p>
    </div>

    {/* Kartu artikel gaya blog / berita */}
    <motion.article
      variants={fadeUp}
      className="relative overflow-hidden rounded-3xl bg-white/95 backdrop-blur shadow-lg shadow-slate-900/5 ring-1 ring-slate-100 px-6 py-8 md:px-10 md:py-10"
    >
      {/* Ornamen garis gradasi */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400" />

      {/* META BAR */}
      <div className="flex flex-wrap items-center gap-3 text-[11px] font-medium text-slate-500 mb-6">
        <span className="inline-flex items-center gap-2 rounded-full bg-teal-50 px-3 py-1 text-teal-700">
          📘 Refleksi pribadi
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1">
          Semester 3 · Kewarganegaraan
        </span>
        <span className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1">
          Mahasiswa Informatika
        </span>
      </div>

      {/* GRID UTAMA */}
      <div className="grid gap-10 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
        {/* Kolom teks utama + gambar di tengah/bawah */}
        <div className="space-y-6 text-sm sm:text-base leading-relaxed text-slate-700 max-w-4xl">
          {/* Paragraf awal + gambar di samping */}
          <div className="md:flex md:items-start md:gap-6">
            <div className="md:flex-1 space-y-5">
              <p>
                Selama satu semester mempelajari Kewarganegaraan, saya menyadari
                bahwa menjadi warga negara bukan hanya soal status di KTP,
                tetapi tentang peran aktif dalam kehidupan bermasyarakat,
                berbangsa, dan bernegara. Melalui setiap modul, saya diajak
                untuk melihat kembali hubungan antara rakyat, hukum, dan negara,
                memahami kedudukan UUD 1945, serta mengaitkannya dengan
                realitas kehidupan sehari-hari sebagai mahasiswa Informatika di
                era digital.
              </p>

              <p>
                Melalui materi tentang hak dan kewajiban warga negara, saya
                belajar bahwa menuntut hak tanpa menjalankan kewajiban akan
                membuat kehidupan bernegara tidak seimbang. Studi kasus,
                diskusi, dan artikel yang saya susun membantu saya
                merefleksikan: apakah selama ini saya sudah mempraktikkan
                nilai-nilai yang saya tuntut dari negara? Dari sini, saya
                merasa perlu untuk lebih disiplin, jujur, dan bertanggung jawab,
                baik dalam akademik maupun dalam interaksi di ruang digital.
              </p>
            </div>

            {/* Gambar 1 di samping teks */}
            <div className="mt-4 md:mt-0 md:w-48 lg:w-56">
              <div className="relative w-full rounded-2xl bg-slate-50 px-3 py-3">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0Ba_esRr35_VlU4C-LryNLIr-qE3V3W0UZg&s"
                  alt="Ilustrasi partisipasi warga negara"
                  className="mx-auto max-h-40 w-auto object-contain"
                />
              </div>
              <p className="mt-2 text-[11px] text-slate-500">
                Partisipasi warga negara sebagai roh dari kewarganegaraan yang
                hidup, bukan hanya konsep di atas kertas.
              </p>
            </div>
          </div>

          {/* Kutipan refleksi */}
          <div className="rounded-2xl border border-teal-100 bg-teal-50/60 px-4 py-3 text-[13px] italic text-teal-900">
            “Pertanyaan paling penting yang saya dapat dari mata kuliah ini
            bukan lagi ‘apa yang negara sudah berikan kepada saya?’, tetapi
            ‘apakah saya sudah menjadi warga negara yang layak saya tuntut
            haknya?’.”
          </div>

          <p>
            Pengalaman mengerjakan podcast tentang peristiwa 1998 dan HAM
            membuka mata saya bahwa pelanggaran hak asasi bukan sekadar catatan
            sejarah, tetapi meninggalkan luka yang masih dirasakan kelompok
            tertentu hingga hari ini. Kesadaran ini mendorong saya untuk lebih
            peka terhadap isu-isu ketidakadilan, tidak mudah menertawakan atau
            meremehkan pengalaman korban, serta lebih kritis terhadap upaya
            “pemutihan” sejarah di media maupun percakapan sehari-hari.
          </p>

          <p>
            Melalui infografis dan tugas-tugas kreatif lainnya, saya belajar
            bahwa partisipasi warga negara bisa dimulai dari hal sederhana:
            menyebarkan informasi yang benar, tidak ikut menyebarkan hoaks,
            menghargai perbedaan, dan berani menyampaikan pendapat dengan cara
            yang santun dan bertanggung jawab. Sebagai mahasiswa Informatika,
            saya merasa terpanggil untuk menggunakan teknologi bukan hanya demi
            kenyamanan pribadi, tetapi juga sebagai sarana edukasi publik dan
            penguatan demokrasi.
          </p>

          {/* Gambar 2 di bagian bawah teks */}
          <div className="pt-2">
            <div className="relative w-full rounded-2xl bg-slate-50 px-3 py-3">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTYxpTgFC4JNWc1a0PYIksqM-QlNI_Q5KVQA&s"
                alt="Ilustrasi demokrasi dan HAM"
                className="mx-auto max-h-48 w-auto object-contain"
              />
            </div>
            <p className="mt-2 text-[11px] text-slate-500 text-center md:text-left">
              Merah putih sebagai pengingat bahwa demokrasi, HAM, dan
              kewarganegaraan saling terkait dan perlu terus dirawat.
            </p>
          </div>

          <p>
            Pada akhir pembelajaran ini, saya menyimpulkan bahwa menjadi warga
            negara yang baik berarti terus belajar, mau dikoreksi, dan berani
            berubah. Saya ingin melanjutkan perjalanan ini dengan: lebih kritis
            pada isu sosial-politik, lebih aktif mengikuti kegiatan yang
            membangun kepedulian, serta menjaga etika dalam setiap jejak digital
            yang saya tinggalkan. Portofolio ini bukan sekadar dokumentasi
            tugas, tetapi catatan proses saya berkembang sebagai warga negara
            Indonesia yang kritis, partisipatif, dan bertanggung jawab di era
            digital.
          </p>

          {/* >>> BLOK BARU: PERBANDINGAN SEBELUM–SESUDAH <<< */}
          <div className="mt-4 rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-500 mb-3">
              Perubahan saya sebagai warga negara
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl bg-white px-4 py-3 border border-slate-100">
                <p className="text-[11px] font-semibold text-slate-600 mb-2">
                  Sebelum mata kuliah ini
                </p>
                <ul className="space-y-1.5 text-[12px] text-slate-600">
                  <li>• Melihat kewarganegaraan hanya sebagai pelajaran wajib.</li>
                  <li>• Kurang peka pada isu HAM dan ketidakadilan.</li>
                  <li>• Menggunakan media sosial tanpa terlalu memikirkan dampak.</li>
                </ul>
              </div>
              <div className="rounded-2xl bg-teal-50 px-4 py-3 border border-teal-100">
                <p className="text-[11px] font-semibold text-teal-700 mb-2">
                  Sesudah mata kuliah ini
                </p>
                <ul className="space-y-1.5 text-[12px] text-teal-900">
                  <li>• Memandang kewarganegaraan sebagai identitas dan tanggung jawab.</li>
                  <li>• Lebih kritis dan empatik terhadap isu sosial-politik & HAM.</li>
                  <li>• Lebih sadar etika dalam setiap jejak digital yang saya tinggalkan.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar: fitur konsep pendukung */}
        <div className="space-y-5 text-xs sm:text-[13px] text-slate-700">
          {/* Perjalanan satu semester */}
          <div className="rounded-2xl border border-slate-100 bg-slate-50/80 px-4 py-4">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-500 mb-2">
              Perjalanan satu semester
            </p>
            <ol className="space-y-1.5">
              <li>
                <span className="font-semibold text-teal-700">M1–M2:</span>{" "}
                Identitas warga negara &amp; konstitusi.
              </li>
              <li>
                <span className="font-semibold text-teal-700">M3–M4:</span>{" "}
                Hak &amp; kewajiban warga negara di era digital.
              </li>
              <li>
                <span className="font-semibold text-teal-700">M5–M6:</span>{" "}
                Demokrasi, partisipasi, dan ruang publik.
              </li>
              <li>
                <span className="font-semibold text-teal-700">M7–M8:</span>{" "}
                HAM, keadilan sosial, dan refleksi praktik.
              </li>
            </ol>

            {/* Progress bar sederhana */}
            <div className="mt-3">
              <div className="flex justify-between text-[11px] mb-1 text-slate-500">
                <span>Proses belajar</span>
                <span>100%</span>
              </div>
              <div className="h-1.5 w-full rounded-full bg-slate-200 overflow-hidden">
                <div className="h-full w-full rounded-full bg-gradient-to-r from-teal-400 via-sky-400 to-indigo-400" />
              </div>
            </div>
          </div>

          {/* Nilai yang dibawa */}
          <div className="rounded-2xl border border-teal-100 bg-teal-50/60 px-4 py-4">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-teal-700 mb-2">
              Nilai yang saya bawa
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium">
                Kritis &amp; reflektif
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium">
                Tanggung jawab digital
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium">
                Empati pada korban
              </span>
              <span className="rounded-full bg-white px-3 py-1 text-[11px] font-medium">
                Cinta konstitusi
              </span>
            </div>
          </div>

          {/* Highlight pembelajaran */}
          <div className="rounded-2xl border border-slate-100 bg-white px-4 py-4">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-slate-500 mb-2">
              Highlight pembelajaran
            </p>
            <ul className="space-y-2">
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span>Memahami hubungan rakyat, hukum, dan negara.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span>
                  Mengaitkan UUD 1945 dengan kehidupan digital sehari-hari.
                </span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span>Membangun kepekaan pada isu HAM dan ketidakadilan.</span>
              </li>
              <li className="flex gap-2">
                <span className="mt-[3px] h-1.5 w-1.5 rounded-full bg-teal-500" />
                <span>
                  Menyadari peran teknologi sebagai ruang etika dan partisipasi.
                </span>
              </li>
            </ul>
          </div>

          {/* Komitmen ke depan */}
          <div className="rounded-2xl border border-indigo-100 bg-indigo-50/70 px-4 py-4">
            <p className="text-[11px] font-semibold tracking-[0.16em] uppercase text-indigo-700 mb-2">
              Komitmen ke depan
            </p>
            <ul className="space-y-2">
              <li className="flex items-start gap-2">
                <span className="mt-[3px] text-xs">✅</span>
                <span>
                  Lebih kritis terhadap isu sosial-politik dan kebijakan publik.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] text-xs">✅</span>
                <span>
                  Aktif mengikuti kegiatan yang membangun kepedulian sosial.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] text-xs">✅</span>
                <span>
                  Menjaga etika dalam setiap jejak digital yang saya tinggalkan.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-[3px] text-xs">✅</span>
                <span>
                  Menggunakan keahlian Informatika untuk edukasi publik dan
                  penguatan demokrasi.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </motion.article>
  </div>
</motion.section>


    </main>
  );
}