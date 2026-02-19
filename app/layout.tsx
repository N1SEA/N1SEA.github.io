import '../globals.css'
import Link from "next/link";
import CursorGradient from '@/components/CursorGradient';
import { NextIntlClientProvider } from 'next-intl';
import LangSwitcher from '@/components/LangSwitcher';
import { notFound } from 'next/navigation';


const locales = ['en', 'uk'];

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: {params: Promise<{ locale: string }> }) {
  const { locale } = await params;

  return {
    title: locale === 'uk' ? 'Антон | Frontend розробник' : 'Anton | Frontend Developer',
    description: 'Portfolio Frontend Developer React & Next.js',
  };
}

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>
}) {
   const { locale } = await params

  if (!locales.includes(locale)) notFound();

  // 👉 СТАТИЧЕСКИЙ импорт переводов
  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="bg-[#030712] text-slate-200 antialiased">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <CursorGradient />

          <header className="sticky top-0 z-50 bg-[#030712]/60 backdrop-blur-xl border-b border-purple-500/10">
            <nav className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
              <Link
                href={`/${locale}`}
                className="text-2xl font-black bg-gradient-to-r from-purple-400 to-fuchsia-600 bg-clip-text text-transparent hover:drop-shadow-[0_0_10px_rgba(168,85,247,0.5)] transition-all"
              >
                ANTON
              </Link>

              <div className="flex items-center gap-6 md:gap-10">
                <LangSwitcher />
              </div>
            </nav>
          </header>

          <main className="relative z-10">
            {children}
          </main>

        </NextIntlClientProvider>
      </body>
    </html>
  )
}
