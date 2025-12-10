import SectionWrapper from "@/components/SectionWrapper";
import ShowcaseCard from "@/components/ShowcaseCard";

const works = [
  {
    type: "Podcast",
    title: "Refleksi Kewarganegaraan di Era Media Sosial",
    description:
      "Podcast singkat yang membahas tantangan sekaligus peluang media sosial bagi partisipasi warga negara muda.",
    link: "#", // ganti dengan link Spotify/YouTube dsb
  },
  {
    type: "Artikel",
    title: "Peran Mahasiswa Informatika dalam Menjaga Ruang Digital yang Sehat",
    description:
      "Artikel opini yang mengaitkan etika profesi, literasi digital, dan perlindungan hak asasi di dunia maya.",
    link: "#",
  },
  {
    type: "Infografis",
    title: "Peta Hak dan Kewajiban Warga Negara Indonesia",
    description:
      "Infografis yang merangkum hak dan kewajiban utama warga negara berdasarkan UUD 1945 dan peraturan terkait.",
    link: "#",
  },
];

export default function ShowcaseKaryaPage() {
  return (
    <SectionWrapper>
      <div className="mb-8">
        <p className="text-xs font-medium tracking-[0.18em] uppercase text-toska-600 mb-2">
          Showcase Karya
        </p>
        <h1 className="font-serif text-3xl sm:text-4xl text-slate-900 mb-2">
          Kurasi Karya Terbaik
        </h1>
        <p className="text-sm sm:text-base text-slate-700 max-w-3xl leading-relaxed">
          Bagian ini berisi beberapa karya yang menurut saya paling
          merepresentasikan proses belajar dalam mata kuliah Kewarganegaraan,
          baik dalam bentuk podcast, artikel, maupun infografis. Setiap karya
          dilengkapi dengan deskripsi singkat dan tautan untuk melihat versi
          lengkapnya.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {works.map((w) => (
          <ShowcaseCard key={w.title} {...w} />
        ))}
      </div>
    </SectionWrapper>
  );
}
