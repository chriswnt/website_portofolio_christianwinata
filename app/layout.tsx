import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
  title: "Christian Winata – Portofolio",
  icons: {
    icon: "/icon.png",
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id">
      <body className="bg-slate-50 text-slate-900">
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
