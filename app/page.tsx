'use client'
import ProjectCard from '@/components/ProjectCard'
import Roadmap from '@/components/Roadmap'
import { projects } from '@/data/projects'
import { useEffect } from 'react'
import { SkillsSection as Skills } from '@/components/Skills'

export default function Home() {
  useEffect(() => {

  window.scrollTo(0, 0);
  }, []);

  return (
    <main className="w-full text-slate-200">
      {/* Hero Section */}
      <section className="relative pt-32 pb-40 px-6">
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block mb-6 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full backdrop-blur-md">
            <span className="text-sm font-medium text-purple-300">Вітаю у моєму портфоліо</span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-6 leading-[1.1] tracking-tight text-white">
            Привіт, я <span className="bg-gradient-to-r from-purple-400 via-fuchsia-500 to-purple-600 bg-clip-text text-transparent">АНТОН</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-400 mb-10 leading-relaxed max-w-2xl">
            Я створюю сучасні веб-додатки, фокусуючись на чистому коді, продуктивності та винятковому користувацькому досвіді.
          </p>
          <div className="flex flex-wrap gap-5">
            <a href="#projects" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)] hover:scale-105 active:scale-95">
              Переглянути проекти
            </a>
            <a href="#contact" className="bg-white/5 hover:bg-white/10 border border-white/10 text-white font-bold py-4 px-8 rounded-2xl transition-all backdrop-blur-md">
              Зв&apos;язатися зі мною
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-10 bg-gradient-to-r from-white to-slate-500 bg-clip-text text-transparent inline-block">
            Про мене
          </h2>
          <div className="space-y-6 text-lg text-slate-400 leading-relaxed">
            <p>
              Я — пристрасний <span className="text-white font-bold">Frontend розробник</span>, присвячений створенню інтуїтивно зрозумілих та візуально вражаючих інтерфейсів. Моя мета — подолати розрив між складною логікою бекенду та безшовним досвідом користувача.
            </p>
            <p>
              Маючи міцний фундамент у сучасних JavaScript-фреймворках та гостре око на дизайн, я перетворюю ідеї на готові до виробництва додатки.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative z-10">
        <Skills />
      </section>

      <Roadmap />

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-white">Вибрані проекти</h2>
          <p className="text-slate-400 text-lg mb-12">
            Добірка моїх нещодавніх робіт, де я застосував свої технічні навички для вирішення реальних завдань.
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
          <h2 className="text-5xl font-bold mb-8 text-white">Давайте поспілкуємось</h2>
          <p className="text-xl text-slate-400 mb-12 max-w-xl mx-auto">
            Я завжди відкритий до нових можливостей та співпраці. Напишіть мені, і ми створимо щось неймовірне разом!
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="mailto:bodnarashek93@gmail.com" className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-10 rounded-2xl transition-all shadow-[0_0_20px_rgba(147,51,234,0.3)]">
              📧 Написати мені
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