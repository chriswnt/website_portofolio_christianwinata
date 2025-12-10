"use client";

import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import { modules } from "../modulesData";

export default function ModulDetailPage() {
  const params = useParams<{ slug?: string }>();
  const slug = params?.slug ?? "";

  const modul = modules.find((m) => m.slug === slug) ?? modules[0];

  const router = useRouter();

  return (
    <main className="bg-slate-50 min-h-screen">
      <section className="mx-auto max-w-4xl px-4 py-14">
        {/* Breadcrumb (info saja) */}
        <div className="mb-4 text-xs text-slate-500">
          <Link href="/" className="hover:text-teal-700">
            Home
          </Link>
          <span> / </span>
          <span className="text-slate-700">{modul.week}</span>
        </div>

        {/* Header */}
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-teal-600">
          {modul.week}
        </p>
        <h1 className="mt-2 text-2xl sm:text-3xl font-serif text-slate-900">
          {modul.title}
        </h1>
        <p className="mt-3 text-sm sm:text-base text-slate-600">
          {modul.description}
        </p>

        {/* Isi Detail */}
        <div className="mt-8 space-y-6">
          {/* Pertanyaan Inti & Ringkasan */}
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-sm font-semibold text-slate-900">
              Pertanyaan Inti &amp; Ringkasan
            </h2>
            <p className="mt-2 text-sm text-slate-700">{modul.question}</p>
            <p className="mt-2 text-sm text-slate-700">{modul.summary}</p>
          </section>

          {/* Bukti Pembelajaran */}
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-sm font-semibold text-slate-900">
              Bukti Pembelajaran
            </h2>
            <p className="mt-2 text-sm text-slate-700">{modul.evidence}</p>
          </section>

          {/* Refleksi */}
          <section className="rounded-2xl bg-white p-5 shadow-sm ring-1 ring-slate-100">
            <h2 className="text-sm font-semibold text-slate-900">
              Refleksi Mingguan
            </h2>
            <p className="mt-2 text-sm text-slate-700">{modul.reflection}</p>
          </section>
        </div>

        {/* Tombol kembali & tombol PDF */}
        <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          {/* KEMBALI → pakai history.back() */}
          <button
            type="button"
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 rounded-full border border-teal-600 px-4 py-2 text-xs sm:text-sm font-medium text-teal-700 transition hover:bg-teal-600 hover:text-white"
          >
            ← Kembali ke Halaman Sebelumnya
          </button>

          {/* PDF */}
          <a
            href={modul.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-teal-600 px-6 py-3 text-xs sm:text-sm font-semibold text-white shadow-md transition hover:bg-teal-700"
          >
            📄 Buka PDF Materi Minggu Ini
          </a>
        </div>
      </section>
    </main>
  );
}
