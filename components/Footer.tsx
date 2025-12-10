import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white/70 mt-8">
      <div className="body-container py-6 text-xs sm:text-sm text-slate-500 flex flex-col sm:flex-row gap-2 sm:items-center sm:justify-between">
        <div>
          <p className="font-medium text-slate-700">
            [NAMA LENGKAP ANDA]
          </p>
          <p>Portofolio Kewarganegaraan – Semester 3</p>
        </div>
        <div className="flex gap-4">
          <Link
            href="mailto:emailkamu@example.com"
            className="hover:text-toska-600"
          >
            emailkamu@example.com
          </Link>
          <Link
            href="https://instagram.com/usernamekamu"
            className="hover:text-toska-600"
          >
            Instagram
          </Link>
        </div>
      </div>
    </footer>
  );
}
