type Props = {
  title: string
  description: string
  github: string
  demo?: string
  technologies?: string[]
  image?: string
}

export default function ProjectCard({
  title,
  description,
  github,
  demo,
  technologies = [],
  image,
}: Props) {
  return (
    <div className="group relative bg-white/5 backdrop-blur-xl rounded-3xl border border-white/10 overflow-hidden hover:border-purple-500/40 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
      
      {/* Image Container - Делаем градиент более "ядовитым" и неоновым */}
      {image && (
        <div className="h-52 bg-gradient-to-br from-purple-600/20 via-fuchsia-500/20 to-indigo-600/20 flex items-center justify-center text-purple-200 text-sm font-medium overflow-hidden border-b border-white/5 relative">
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712]/80 to-transparent z-10" />
          <div className="text-center z-20 scale-110 group-hover:scale-125 transition-transform duration-700 opacity-80 uppercase tracking-widest">{image}</div>
        </div>
      )}

      {/* Content */}
      <div className="p-8">
        <h3 className="text-2xl font-black text-white mb-3 group-hover:text-purple-400 transition-colors">
          {title}
        </h3>
        <p className="text-slate-400 mb-6 leading-relaxed font-medium">
          {description}
        </p>

        {/* Technologies - Убираем синий, добавляем фиолетовый неон */}
        {technologies.length > 0 && (
          <div className="mb-8 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-purple-500/10 text-purple-300 text-[10px] uppercase tracking-wider font-bold rounded-lg border border-purple-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Links - Делаем кнопки более современными */}
        <div className="flex gap-4 pt-6 border-t border-white/5">
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-white/5 text-white rounded-xl hover:bg-white/10 border border-white/10 transition-all font-bold text-xs uppercase tracking-widest"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
            GitHub
          </a>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-purple-600 text-white rounded-xl hover:bg-purple-500 transition-all font-bold text-xs uppercase tracking-widest shadow-[0_0_15px_rgba(147,51,234,0.4)]"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Live Demo
            </a>
          )}
        </div>
      </div>
    </div>
  )
}