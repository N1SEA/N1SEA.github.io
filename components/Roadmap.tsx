"use client";
import { motion } from "framer-motion";
import { roadmap } from "../data/roadmap";

export default function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-6 relative z-10 overflow-hidden">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-20 text-white text-center">Мій шлях</h2>
        
        <div className="relative">
          {/* Вертикальная линия */}
          <div className="absolute left-4 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-white/10 rounded-full" />
          
          <div className="space-y-24">
            {roadmap.map((item, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <div key={index} className={`relative flex items-center justify-between md:justify-normal w-full ${isEven ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Точка на линии */}
                  <div className="absolute left-4 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-[#030712] border-2 border-purple-500 rounded-full z-20 shadow-[0_0_15px_rgba(168,85,247,1)]" />

                  {/* Анимированная карточка */}
                  <motion.div 
                    initial={{ opacity: 0, x: isEven ? 100 : -100 }} // Начальная позиция (вылет за экран)
                    whileInView={{ opacity: 1, x: 0 }}               // Позиция при появлении на экране
                    viewport={{ once: true, margin: "-100px" }}      // Анимация сработает один раз
                    transition={{ duration: 0.6, ease: "easeOut" }}  // Параметры плавности
                    className="w-[calc(100%-3rem)] md:w-[45%] bg-white/5 backdrop-blur-xl border border-white/10 p-8 rounded-[2rem] hover:border-purple-500/40 transition-all ml-12 md:ml-0 shadow-2xl"
                  >
                    <div className="flex items-center gap-4 mb-3">
                      <span className="text-purple-400 font-black tracking-tighter text-2xl opacity-50">#0{index + 1}</span>
                      <span className="px-3 py-1 bg-purple-500/10 text-purple-300 text-xs font-bold rounded-md border border-purple-500/20 uppercase tracking-widest">
                        {item.year}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-white mb-3">{item.title}</h3>
                    <p className="text-slate-400 leading-relaxed font-medium">{item.description}</p>
                  </motion.div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}