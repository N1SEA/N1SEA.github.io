import { createProject } from "@/app/actions/projects"

export default function AdminPage() {
  return (
    <div className="max-w-2xl mx-auto p-10 bg-slate-900 text-white rounded-2xl mt-10">
      <h1 className="text-2xl font-bold mb-6">Додати новый проект 🚀</h1>
      
      <form action={createProject} className="flex flex-col gap-4">
        <input name="title" placeholder="Назва проекту" className="p-2 rounded bg-slate-800 border border-slate-700" required />
        <textarea name="description" placeholder="Опис" className="p-2 rounded bg-slate-800 border border-slate-700" required />
        <input name="tech" placeholder="Технології (через кому: React, TS, Tailwind)" className="p-2 rounded bg-slate-800 border border-slate-700" />
        <input name="github" placeholder="GitHub Link" className="p-2 rounded bg-slate-800 border border-slate-700" />
        <input name="link" placeholder="Live Demo Link" className="p-2 rounded bg-slate-800 border border-slate-700" />
        
        <button type="submit" className="bg-blue-600 hover:bg-blue-500 p-3 rounded font-bold transition">
          Зберегти проект
        </button>
      </form>
    </div>
  )
}