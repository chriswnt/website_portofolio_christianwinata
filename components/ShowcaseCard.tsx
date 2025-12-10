import Link from "next/link";

interface ShowcaseCardProps {
  type: "Podcast" | "Artikel" | "Infografis" | string;
  title: string;
  description: string;
  link: string;
}

export default function ShowcaseCard({
  type,
  title,
  description,
  link,
}: ShowcaseCardProps) {
  return (
    <article className="group rounded-3xl border border-slate-200 bg-white/80 p-5 sm:p-6 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between mb-3">
        <span className="inline-flex items-center rounded-full bg-toska-50 px-3 py-1 text-xs font-medium text-toska-700 border border-toska-100">
          {type}
        </span>
        <span className="h-8 w-8 rounded-full border border-slate-200 flex items-center justify-center text-xs text-slate-400 group-hover:border-toska-400 group-hover:text-toska-500">
          {/* thumbnail/icon sederhana */}
          🎧
        </span>
      </div>

      <h3 className="font-serif text-lg sm:text-xl text-slate-900 mb-2">
        {title}
      </h3>
      <p className="text-sm text-slate-600 mb-4 leading-relaxed">
        {description}
      </p>

      <Link
        href={link}
        target="_blank"
        className="inline-flex items-center text-sm font-medium text-toska-700 hover:text-toska-900"
      >
        Buka Karya
        <span className="ml-1">↗</span>
      </Link>
    </article>
  );
}
