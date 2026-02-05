import './globals.css'

export const metadata = {
  title: 'Антон | Frontend розробник',
  description: 'Портфоліо Frontend розробника на React & Next.js',
  keywords: 'React, Next.js, TypeScript, Frontend, Розробник',
  author: 'Антон',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ru">
      <body className="bg-slate-50">
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
          <nav className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
            <a href="/" className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              Anton
            </a>
            <div className="flex gap-8 md:gap-12">
              <a href="#skills" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Навички
              </a>
              <a href="#projects" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Проекти
              </a>
              <a href="#contact" className="text-slate-600 hover:text-blue-600 transition-colors font-medium">
                Контакт
              </a>
            </div>
          </nav>
        </header>

        <main className="min-h-screen">
          {children}
        </main>

        <footer className="bg-slate-900 text-white py-12">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <p className="text-slate-400">
              © 2026 Антон. Всі права захищені.
            </p>
          </div>
        </footer>
      </body>
    </html>
  )
}
