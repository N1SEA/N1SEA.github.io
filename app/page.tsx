import ProjectCard from '@/components/ProjectCard'
import { projects } from '@/data/projects'

export default function Home() {
  const skills = [
    { category: 'Frontend', items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'React Query'] },
    { category: 'Backend', items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Prisma'] },
    { category: 'Tools & Misc', items: ['Git', 'Docker', 'Webpack', 'Jest', 'REST API', 'GraphQL'] },
  ]

  return (
    <main className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-20 pb-32 px-6 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
        <div className="max-w-4xl mx-auto">
          <div className="inline-block mb-6 px-4 py-2 bg-blue-500/20 border border-blue-400/30 rounded-full">
            <span className="text-sm font-medium text-blue-200">👋 Ласкаво просимо!</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
            Привіт! Я <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">Антон</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-300 mb-8 leading-relaxed">
            Frontend розробник з досвідом у створенні сучасних, чутливих веб-додатків на React та Next.js
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#projects" className="btn btn-primary text-lg px-8 py-3">
              Переглянути проекти
            </a>
            <a href="#contact" className="btn btn-outline border-white text-white hover:bg-white/10 text-lg px-8 py-3">
              Зв'язатися
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Про мене</h2>
          <p className="text-lg text-slate-600 mb-6 leading-relaxed">
            Я натхненний Front-end розробник з 3+ років досвіду у розробці масштабованих веб-додатків. Спеціалізуюсь на створенні інтуїтивних користувацьких інтерфейсів, використовуючи новітні технології та найкращі практики.
          </p>
          <p className="text-lg text-slate-600 leading-relaxed">
            Коли я не працюю над кодом, я люблю вчитися новим технологіям, брати участь у open-source проектах та допомагати іншим розробникам.
          </p>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Мої навички</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white p-6 rounded-xl border border-slate-200 hover:border-blue-400 transition-colors">
                <h3 className="text-xl font-bold text-slate-900 mb-4">{skillGroup.category}</h3>
                <ul className="space-y-3">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-slate-700">
                      <span className="w-2 h-2 bg-blue-600 rounded-full"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="section-title">Мої проекти</h2>
          <p className="text-slate-600 text-lg mb-12">
            Ось деякі з моїх останніх робіт, які демонструють мої навички розробки
          </p>
          <div className="grid gap-6">
            {projects.map(project => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-slate-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="section-title">Давайте працювати разом</h2>
          <p className="text-lg text-slate-600 mb-8">
            У вас є цікавий проект? Я завжди відкритий для нових можливостей!
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            <a href="mailto:bodnarashek93@gmail.com" className="btn btn-primary text-lg px-8 py-3">
              📧 Email
            </a>
            <a href="https://github.com/N1SEA" target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-lg px-8 py-3">
              🐙 GitHub
            </a>
            <a href="https://linkedin.com/in/username" target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-lg px-8 py-3">
              💼 LinkedIn
            </a>
            <a href="https://twitter.com/username" target="_blank" rel="noopener noreferrer" className="btn btn-secondary text-lg px-8 py-3">
              𝕏 Twitter
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
