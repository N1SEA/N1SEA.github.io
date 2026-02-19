'use client'
import ProjectCard from '@/components/ProjectCard'
import Roadmap from '@/components/Roadmap'
import { projects } from '@/data/projects'
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('Index');
  
  const skills = [
    { category: t('skills.frontend'), items: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'Redux', 'React Query'] },
    { category: t('skills.backend'), items: ['Node.js', 'Express', 'PostgreSQL', 'MongoDB', 'Prisma'] },
    { category: t('skills.tools'), items: ['Git', 'Docker', 'Webpack', 'Jest', 'REST API', 'GraphQL'] },
  ]

  
  return (
    <main className="w-full text-slate-200">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-md">
            <span className="text-sm font-medium text-purple-300">{t('hero.welcome')}</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-white">
            {t('hero.greeting')} <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">{t('hero.name')}</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            {t('hero.description')}
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:scale-105 active:scale-95">
              {t('hero.viewProjects')}
            </a>
            <a href="#contact" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 px-8 rounded-2xl transition-all backdrop-blur-md">
              {t('hero.contact')}
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent inline-block">
            {t('about.title')}
          </h2>
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
              {t.rich('about.p1', {
                span: (chunks) => <span className="text-white font-bold">{chunks}</span>
              })}
            </p>
            <p>{t('about.p2')}</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-12 text-white">{t('skills.title')}</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {skills.map((skillGroup) => (
              <div key={skillGroup.category} className="bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-3xl hover:border-purple-500/40 transition-all group">
                <h3 className="text-xl font-bold text-purple-400 mb-6 group-hover:text-purple-300 transition-colors">{skillGroup.category}</h3>
                <ul className="space-y-4">
                  {skillGroup.items.map((skill) => (
                    <li key={skill} className="flex items-center gap-3 text-slate-300">
                      <span className="w-1.5 h-1.5 bg-purple-500 rounded-full shadow-[0_0_8px_rgba(168,85,247,0.8)]"></span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Roadmap />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-white">{t('projects.title')}</h2>
          <p className="text-slate-400 text-lg mb-12">
            {t('projects.subtitle')}
          </p>
          <div className="grid gap-8">
            {projects.map(project => (
              <div key={project.title} className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl overflow-hidden hover:border-purple-500/30 transition-all">
                <ProjectCard {...project} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 text-white">{t('contact.title')}</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
            {t('contact.description')}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:bodnarashek93@gmail.com" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              📧 Email
            </a>
            <a href="https://github.com/N1SEA" target="_blank" rel="noopener noreferrer" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 px-10 rounded-2xl transition-all backdrop-blur-md">
              🐙 GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}