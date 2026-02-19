import '../globals.css'
import Link from "next/link";
import CursorGradient from '@/components/CursorGradient';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, getTranslations } from 'next-intl/server';
import LangSwitcher from '@/components/LangSwitcher';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  // Можно добавить переводы для title/description, если создать секцию Metadata в JSON
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
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  // Проверка на корректность локали
  if (!['en', 'uk'].includes(locale)) notFound();

  // Получаем сообщения для провайдера
  const messages = await getMessages();
  const t = await getTranslations('Layout');

  return (
    <html lang={locale} className="scroll-smooth">
      <body className="bg-[#030712] text-slate-200 antialiased">
        <NextIntlClientProvider messages={messages}>
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
                <div className="hidden md:flex gap-8">
                  <a href="#skills" className="text-sm uppercase tracking-widest text-slate-400 hover:text-purple-400 transition-colors font-semibold">
                    {t('nav.skills')}
                  </a>
                  <a href="#roadmap" className="text-sm uppercase tracking-widest text-slate-400 hover:text-purple-400 transition-colors font-semibold">
                    {t('nav.roadmap')}
                  </a>
                  <a href="#projects" className="text-sm uppercase tracking-widest text-slate-400 hover:text-purple-400 transition-colors font-semibold">
                    {t('nav.projects')}
                  </a>
                  <a href="#contact" className="text-sm uppercase tracking-widest text-slate-400 hover:text-purple-400 transition-colors font-semibold">
                    {t('nav.contact')}
                  </a>
                </div>
                
                {/* Кнопка переключения языка */}
                <LangSwitcher />
              </div>
            </nav>
          </header>

          <main className="relative z-10">
            {children}
          </main>

          <footer className="border-t border-purple-500/10 py-12 mt-20">
            <div className="max-w-5xl mx-auto px-6 text-center">
              <p className="text-slate-500 text-sm tracking-wide">
                © 2026 <span className="text-purple-500/80">{locale === 'uk' ? 'Антон' : 'Anton'}</span>. {t('footer.rights')}.
              </p>
            </div>
          </footer>
        </NextIntlClientProvider>
      </body>
    </html>
  )
}