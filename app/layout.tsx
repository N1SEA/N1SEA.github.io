import './globals.css'
import Link from "next/link";
import CursorGradient from '@/components/CursorGradient';

// Стандартные метаданные Next.js (теперь без динамики)
export const metadata = {
  title: 'ANTON | Frontend Developer',
  description: 'Portfolio Frontend Developer React & Next.js',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-[#030712] text-slate-200 antialiased">
        {/* Градиент за курсором остается */}
        <CursorGradient />

        <header className="sticky top-0 z-50 bg-[#030712]/60 backdrop-blur-xl border-b border-purple-500/10">
          <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
            <Link
              href="/"
              className="text-2xl font-black bg-gradient-to-r from-purple-400 to-fuchsia-600 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all"
            >
              ANTON
            </Link>

            {/* Блок навигации (можно добавить ссылки на секции позже) */}
            <div className="flex items-center gap-6 md:gap-10">
              <Link href="#projects" className="hover:text-purple-400 transition-colors">Projects</Link>
              <Link href="#contact" className="hover:text-purple-400 transition-colors">Contact</Link>
            </div>
          </nav>
        </header>

        <main className="relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
