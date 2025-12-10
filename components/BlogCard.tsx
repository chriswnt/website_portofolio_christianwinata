interface BlogCardProps {
  week: number;
  title: string;
  coreQuestion: string;
  summary: string;
  proofLabel: string;
  proofLink: string;
  reflection: string[];
}

export default function BlogCard({
  week,
  title,
  coreQuestion,
  summary,
  proofLabel,
  proofLink,
  reflection,
}: BlogCardProps) {
  return (
    <article className="rounded-3xl border border-slate-200 bg-white/80 p-6 sm:p-8 mb-8 shadow-sm">
      <p className="text-xs font-medium tracking-[0.18em] uppercase text-toska-600 mb-2">
        Modul Mingguan · Minggu {week}
      </p>
      <h2 className="font-serif text-2xl sm:text-3xl text-slate-900 mb-4 leading-snug">
        Minggu {week} — {title}
      </h2>

      <div className="space-y-4 text-sm sm:text-base leading-relaxed text-slate-700">
        <div>
          <h3 className="font-semibold text-slate-800 mb-1">
            Pertanyaan Inti
          </h3>
          <p className="italic">{coreQuestion}</p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-800 mb-1">
            Ringkasan Pembahasan
          </h3>
          <p>{summary}</p>
        </div>

        <div>
          <h3 className="font-semibold text-slate-800 mb-1">
            Bukti Pembelajaran
          </h3>
          <a
            href={proofLink}
            target="_blank"
            className="inline-flex items-center text-toska-700 hover:text-toska-900 underline underline-offset-4"
          >
            {proofLabel}
          </a>
        </div>

        <div>
          <h3 className="font-semibold text-slate-800 mb-1">
            Refleksi Mingguan
          </h3>
          <div className="space-y-3">
            {reflection.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
