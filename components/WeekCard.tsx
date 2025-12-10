// components/WeekCard.tsx
import Link from "next/link";

type ModuleData = {
  slug: string;
  week: string;
  title: string;
  shortTitle: string;
  description: string;
  gradient: string;
};

type WeekCardProps = {
  item?: ModuleData;
  mod?: ModuleData;
} & Partial<ModuleData>;

/**
 * WeekCard serbaguna.
 * Dia coba ambil data dari props.item, props.mod, atau langsung dari props
 * supaya tetap jalan walaupun cara pemanggilannya beda-beda.
 */
export default function WeekCard(props: WeekCardProps) {
  const mod: ModuleData = (props.item || props.mod || props) as ModuleData;
  const weekNumber = mod.week?.replace("Minggu ", "") || "";

  return (
    <article className="group h-full rounded-3xl border border-slate-100 bg-white/90 p-4 shadow-sm shadow-slate-900/5 backdrop-blur-sm transition hover:-translate-y-1.5 hover:shadow-lg hover:border-teal-200">
      {/* Baris atas: label minggu + info kecil */}
      <div className="mb-3 flex items-center justify-between">
        <span className="inline-flex items-center rounded-full bg-teal-50 px-3 py-1 text-[11px] font-semibold tracking-[0.18em] text-teal-700 uppercase">
          {mod.week}
        </span>
        <span className="text-[11px] text-slate-400">
          Materi &amp; Refleksi
        </span>
      </div>

      {/* Isi utama: thumbnail + teks */}
      <div className="flex gap-4">
        {/* Thumbnail gradient (cover PDF) */}
        <div
          className={`
            relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-2xl
            bg-gradient-to-br ${mod.gradient}
            shadow-sm shadow-slate-900/10
          `}
        >
          <div className="absolute inset-1 rounded-xl border border-white/60" />
          <div className="absolute bottom-2 left-2 right-2">
            <p className="text-[9px] font-semibold tracking-[0.18em] text-white/80 uppercase">
              Minggu {weekNumber}
            </p>
            <p className="mt-1 text-[11px] font-semibold text-white drop-shadow line-clamp-2">
              {mod.shortTitle}
            </p>
          </div>
        </div>

        {/* Teks di kanan */}
        <div className="flex-1 flex flex-col">
          <h3 className="text-sm sm:text-[15px] font-semibold text-slate-900">
            {mod.title}
          </h3>
          <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-600 line-clamp-4">
            {mod.description}
          </p>
        </div>
      </div>

      {/* Footer: chip + link */}
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
  );
}
