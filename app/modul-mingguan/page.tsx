// app/modul-mingguan/page.tsx
import Link from "next/link";
import { modules } from "./modulesData";

export default function ModulMingguanPage() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-50 via-slate-50 to-slate-100">
      <section className="mx-auto max-w-6xl px-4 py-16">
        {/* HEADER ATAS */}
        <div className="text-center mb-12">
          <p className="text-[11px] font-semibold tracking-[0.28em] text-teal-600 uppercase">
            MODUL MINGGUAN
          </p>
          <h1 className="mt-3 font-serif text-3xl sm:text-4xl text-slate-900">
            Ringkasan Modul Pembelajaran
          </h1>
          <div className="mx-auto mt-4 h-1.5 w-32 rounded-full bg-gradient-to-r from-teal-500 via-emerald-400 to-sky-400" />
          <p className="mt-4 max-w-3xl mx-auto text-sm sm:text-base text-slate-600">
            Modul-modul ini merangkum perjalanan pembelajaran Kewarganegaraan
            selama satu semester. Pilih salah satu untuk membaca pertanyaan
            inti, ringkasan materi, bukti pembelajaran, dan refleksi mingguan.
          </p>
        </div>

        {/* GRID KARTU BARU */}
        <div className="grid gap-7 md:grid-cols-2 lg:grid-cols-3">
          {modules.map((mod) => (
            <article
              key={mod.slug}
              className="group relative flex flex-col rounded-3xl border border-slate-100 bg-white/90 p-5 shadow-sm shadow-slate-900/5 backdrop-blur-sm transition hover:-translate-y-1.5 hover:shadow-xl hover:border-teal-200"
            >
              {/* BARIS ATAS: MINGGU + TAG */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-teal-700 uppercase">
                  {mod.week}
                </span>
                <span className="text-[11px] text-slate-400">
                  Materi PDF • Refleksi
                </span>
              </div>

              {/* BADAN KARTU: THUMBNAIL + TEKS */}
              <div className="flex gap-4">
                {/* Thumbnail “cover PDF” */}
                <div
                  className={`
                    relative h-28 w-24 flex-shrink-0 overflow-hidden rounded-2xl 
                    bg-gradient-to-br ${mod.gradient}
                    shadow-sm shadow-slate-900/10
                  `}
                >
                  <div className="absolute inset-1 rounded-xl border border-white/60" />
                  <div className="absolute bottom-2 left-2 right-2">
                    <p className="text-[9px] font-semibold tracking-[0.18em] text-white/80 uppercase">
                      Minggu {mod.week.replace("Minggu ", "")}
                    </p>
                    <p className="mt-1 text-[11px] font-semibold text-white drop-shadow line-clamp-2">
                      {mod.shortTitle}
                    </p>
                  </div>
                </div>

                {/* Teks utama */}
                <div className="flex-1 flex flex-col">
                  <h2 className="text-sm sm:text-[15px] font-semibold text-slate-900">
                    {mod.title}
                  </h2>
                  <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-4">
                    {mod.description}
                  </p>
                </div>
              </div>

              {/* FOOTER: CHIP + LINK */}
              <div className="mt-4 flex items-center justify-between text-[11px] sm:text-xs">
                <span className="inline-flex items-center gap-1 rounded-full bg-slate-50 px-2.5 py-1 text-slate-500 group-hover:bg-teal-50 group-hover:text-teal-700">
                  <span className="text-[12px]">📄</span>
                  <span>PDF materi tersedia</span>
                </span>

                <Link
                  href={`/modul-mingguan/${mod.slug}`}
                  className="inline-flex items-center gap-1 font-semibold text-teal-700 hover:text-teal-800"
                >
                  Lihat Detail Modul
                  <span
                    aria-hidden
                    className="transition-transform group-hover:translate-x-0.5"
                  >
                    ↗
                  </span>
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
