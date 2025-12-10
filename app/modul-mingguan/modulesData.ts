// app/modul-mingguan/modulesData.ts

export type ModuleItem = {
  slug: string;
  week: string;
  title: string;
  shortTitle: string;
  description: string;
  question: string;
  summary: string;
  evidence: string;
  reflection: string;
  gradient: string;
  pdfUrl: string;
};

export const modules: ModuleItem[] = [
  {
    slug: "pendahuluan",
    week: "Minggu 1",
    shortTitle: "Pendahuluan",
    title: "Pendahuluan Pendidikan Kewarganegaraan",
    description:
      "Gambaran umum mata kuliah, mengapa warga negara perlu kritis dan bertanggung jawab di era digital.",
    question:
      "Mengapa mahasiswa Informatika perlu mempelajari Pendidikan Kewarganegaraan di tengah perkembangan teknologi?",
    summary:
      "Pertemuan ini mengajak mahasiswa mengenali tujuan, ruang lingkup, serta kompetensi yang diharapkan dari mata kuliah Kewarganegaraan. Dibahas peran warga negara yang sadar hak dan kewajiban, serta tantangan baru di era digital seperti disinformasi, polarisasi, dan etika penggunaan teknologi.",
    evidence:
      "PPT Pendahuluan, catatan kelas, serta refleksi awal tentang pengalaman pribadi sebagai warga negara.",
    reflection:
      "Setelah pertemuan ini, saya menyadari bahwa menjadi warga negara bukan sekadar status di KTP, tetapi peran aktif dalam menjaga nilai demokrasi, menghargai perbedaan, dan menggunakan teknologi secara bertanggung jawab.",
    gradient: "from-emerald-300 via-teal-400 to-teal-600",
    pdfUrl: "/materi/minggu1-pendahuluan.pdf.pdf",
  },
  {
    slug: "hukum-rakyat-negara",
    week: "Minggu 2",
    shortTitle: "Hukum, Rakyat, Negara",
    title: "Rakyat, Hukum, Negara & Segitiga Kekuasaan",
    description:
      "Mengkaji relasi negara, hukum, dan rakyat melalui teori kontrak sosial dan konsep legitimasi kekuasaan.",
    question:
      "Bagaimana teori kontrak sosial menjelaskan hubungan antara rakyat, hukum, dan negara dalam suatu sistem politik?",
    summary:
      "Pertemuan ini membahas teori kontrak sosial (Hobbes, Locke, Rousseau) sebagai dasar terbentuknya negara dan hukum. Negara dipahami sebagai hasil kesepakatan rakyat untuk melindungi hak-hak dasar. Dibahas juga unsur-unsur pembentuk negara serta berbagai bentuk negara berdasarkan legitimasi ideologi dan distribusi kekuasaan.",
    evidence:
      "PPT Rakyat–Hukum–Negara, diskusi kelas mengenai contoh pelanggaran kontrak sosial di Indonesia, dan catatan tentang teori Hobbes, Locke, dan Rousseau.",
    reflection:
      "Saya belajar bahwa kekuasaan negara seharusnya selalu kembali kepada persetujuan rakyat. Ketika negara tidak lagi melindungi hak warganya, kontrak sosial secara moral dipertanyakan.",
    gradient: "from-sky-300 via-cyan-400 to-teal-500",
    pdfUrl: "/materi/minggu2-hukum-rakyat-negara.pdf.pdf",
  },
  {
    slug: "identitas-nasional",
    week: "Minggu 3",
    shortTitle: "Identitas Nasional",
    title: "Sejarah Pembentukan Identitas Nasional Indonesia",
    description:
      "Menelusuri proses historis lahirnya identitas nasional Indonesia dari zaman kolonial hingga kemerdekaan.",
    question:
      "Bagaimana proses sejarah membentuk identitas nasional Indonesia yang ber-Bhinneka Tunggal Ika?",
    summary:
      "Materi ini mengulas perjalanan bangsa Indonesia dari masa penjajahan, tumbuhnya kesadaran kebangsaan, lahirnya Sumpah Pemuda, hingga Proklamasi 1945. Identitas nasional dilihat sebagai konstruksi historis yang terus dibangun melalui pengalaman kolektif rakyat.",
    evidence:
      "PPT Identitas Nasional, tugas ringkasan kronologi, dan pencarian contoh simbol-simbol identitas Indonesia.",
    reflection:
      "Saya menyadari bahwa identitas nasional bukan sesuatu yang statis, melainkan hasil perjuangan panjang yang perlu terus dirawat di tengah arus globalisasi.",
    gradient: "from-orange-300 via-amber-400 to-rose-400",
    pdfUrl: "/materi/minggu3-identitas-nasional.pdf.pdf",
  },
  {
    slug: "ideologi-pancasila",
    week: "Minggu 4",
    shortTitle: "Ideologi dan Falsafah Bangsa",
    title: "Ideologi dan Falsafah Bangsa: Pancasila",
    description:
      "Mengkaji Pancasila sebagai dasar negara, pandangan hidup, dan ideologi terbuka bangsa Indonesia.",
    question:
      "Apa makna Pancasila sebagai ideologi terbuka dan bagaimana penerapannya dalam kehidupan berbangsa?",
    summary:
      "Pertemuan ini membahas Pancasila sebagai dasar filsafat negara dan sumber nilai bagi penyusunan hukum dan kebijakan. Dibahas sifatnya yang terbuka, mampu berdialog dengan perkembangan zaman tanpa kehilangan jati diri.",
    evidence:
      "PPT Ideologi & Falsafah Bangsa, analisis kasus penerapan nilai Pancasila di lingkungan kampus atau masyarakat.",
    reflection:
      "Saya belajar bahwa Pancasila bukan sekadar hafalan lima sila, tetapi kerangka nilai yang harus dihidupi dalam keputusan sehari-hari.",
    gradient: "from-teal-300 via-emerald-400 to-lime-400",
    pdfUrl: "/materi/minggu4-ideologi-falsafah-bangsa.pdf.pdf",
  },
  {
    slug: "konstitusi",
    week: "Minggu 5",
    shortTitle: "Konstitusi",
    title: "Konstitusi dan Supremasi UUD 1945",
    description:
      "Memahami fungsi konstitusi sebagai hukum dasar tertulis dan pelindung hak warga negara.",
    question:
      "Mengwhy konstitusi menjadi tolok ukur utama dalam menilai keabsahan suatu kebijakan negara?",
    summary:
      "Dibahas pengertian konstitusi, sejarah perubahan UUD 1945, serta prinsip-prinsip dasar seperti negara hukum, kedaulatan rakyat, pemisahan kekuasaan, dan perlindungan HAM.",
    evidence:
      "PPT Konstitusi, latihan membaca pasal-pasal UUD 1945, dan diskusi tentang contoh pelanggaran konstitusi.",
    reflection:
      "Saya menyadari bahwa memahami konstitusi membantu warga negara lebih kritis terhadap kebijakan publik dan penegakan hukum.",
    gradient: "from-indigo-300 via-sky-400 to-teal-400",
    pdfUrl: "/materi/minggu5-konstitusi.pdf.pdf",
  },
  {
    slug: "fungsi-dan-peran-negara",
    week: "Minggu 6",
    shortTitle: "Fungsi dan Peran Negara",
    title: "Fungsi dan Peran Negara dalam Kehidupan Berbangsa",
    description:
      "Membahas mengapa negara dibutuhkan, fungsi-fungsi pokok negara, dan bagaimana perannya hadir dalam kehidupan warga.",
    question:
      "Apa saja fungsi utama negara dan bagaimana peran negara seharusnya dirasakan oleh warga negara dalam kehidupan sehari-hari?",
    summary:
      "Materi ini mengulas alasan lahirnya negara, tujuan negara menurut berbagai teori, serta fungsi-fungsi pokok negara seperti penegakan hukum, perlindungan warga, pelayanan publik, dan pembangunan. Dibahas juga contoh ketika fungsi negara berjalan baik maupun ketika negara gagal menjalankan perannya.",
    evidence:
      "PPT Fungsi dan Peran Negara, diskusi kelas tentang contoh peran negara di bidang pendidikan, kesehatan, dan keamanan, serta tugas kecil mengamati pelayanan publik di lingkungan sekitar.",
    reflection:
      "Saya belajar bahwa negara bukan konsep abstrak. Negara hadir dalam bentuk layanan, aturan, dan kebijakan yang setiap hari saya rasakan. Karena itu, penting untuk terlibat dan mengkritisi peran negara ketika tidak berjalan sesuai tujuan keadilan dan kesejahteraan.",
    gradient: "from-emerald-300 via-teal-400 to-sky-400",
    pdfUrl: "/materi/minggu6-fungsi-dan-Peran-Negara.pdf.pdf",
  },
  {
    slug: "demokrasi",
    week: "Minggu 7",
    shortTitle: "Demokrasi",
    title: "Demokrasi dan Partisipasi Warga Negara",
    description:
      "Membahas konsep demokrasi, sistem pemilu, serta bentuk-bentuk partisipasi politik warga negara.",
    question:
      "Apa saja bentuk partisipasi politik yang sehat dalam sistem demokrasi dan bagaimana tantangannya di Indonesia?",
    summary:
      "Materi ini mengulas prinsip-prinsip demokrasi, peran lembaga perwakilan, pemilu yang jujur dan adil, serta risiko seperti politik uang, hoaks, dan apatisme.",
    evidence:
      "PPT Demokrasi, analisis contoh berita tentang pemilu, dan refleksi pengalaman pribadi dalam pemilihan.",
    reflection:
      "Saya belajar bahwa demokrasi hanya akan hidup jika warga negaranya mau terlibat secara kritis, bukan sekadar datang ke TPS.",
    gradient: "from-teal-300 via-cyan-400 to-sky-400",
    pdfUrl: "/materi/minggu7-demokrasi.pdf.pdf",
  },
  {
    slug: "multikulturalisme",
    week: "Minggu 8",
    shortTitle: "Multikulturalisme",
    title: "Multikulturalisme & Kebhinekaan Indonesia",
    description:
      "Menggali tantangan dan peluang hidup dalam masyarakat majemuk yang multikultural.",
    question:
      "Bagaimana cara membangun sikap inklusif di tengah perbedaan agama, etnis, dan budaya di Indonesia?",
    summary:
      "Dibahas konsep multikulturalisme, toleransi, serta bahaya diskriminasi dan ujaran kebencian. Materi menekankan peran warga negara dalam merawat kebhinekaan.",
    evidence:
      "PPT Multikulturalisme, studi kasus konflik SARA, dan tugas refleksi tentang pengalaman hidup dalam masyarakat majemuk.",
    reflection:
      "Saya menyadari bahwa menghargai perbedaan bukan hanya slogan, tapi latihan sikap setiap hari dalam cara berbicara dan bertindak.",
    gradient: "from-rose-300 via-pink-400 to-teal-400",
    pdfUrl: "/materi/minggu8-multikulturalisme.pdf.pdf",
  },
];
