"use client"
import { Badge } from "@/components/ui/badge"
import { motion } from "framer-motion"

const skillGroups = [
  {
    title: "Frontend Development",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
  },
  {
    title: "State & Tools",
    skills: ["Zustand", "Redux", "Git", "Postman"]
  },
  {
    title: "UI Libraries",
    skills: ["Shadcn/ui", "Ant Design", "Radix UI"]
  }
];

export function SkillsSection() {
  return (
    <section className="relative z-10 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 tracking-tight text-white">
          Мій <span className="text-primary">Стек</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl border border-white/5 bg-white/[0.02] backdrop-blur-sm hover:border-primary/50 transition-all duration-500 group"
            >
              <h3 className="text-xl font-semibold mb-6 text-slate-300 group-hover:text-primary transition-colors">
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills?.map((skill) => (
                  <Badge
                    key={skill}
                    variant="outline"
                    className="bg-primary/5 text-primary-foreground/80 border-primary/20 hover:bg-primary hover:text-white transition-all duration-300"
                  >
                    {skill}
                  </Badge>
                )) || group.skills.map((skill) => (
                   <Badge
                    key={skill}
                    variant="outline"
                    className="bg-primary/5 text-slate-300 border-white/10 hover:border-primary/50 hover:bg-primary/20 transition-all duration-300 py-1 px-3"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}