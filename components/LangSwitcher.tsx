"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "next/navigation";

export default function LangSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLanguage = () => {
    const nextLocale = locale === "uk" ? "en" : "uk";
    
    // Заменяем текущую локаль в пути на новую
    const newPath = pathname.replace(`/${locale}`, `/${nextLocale}`);
    router.push(newPath);
  };

  return (
    <button
      onClick={toggleLanguage}
      className="fixed top-6 right-24 z-[100] group flex items-center gap-2 px-4 py-2 bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl hover:border-purple-500/50 transition-all duration-300 shadow-2xl"
    >
      {/* Светящаяся точка-индикатор */}
      <span className="relative flex h-2 w-2">
        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
        <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
      </span>

      <div className="flex items-center font-bold text-xs tracking-widest text-slate-300 group-hover:text-white transition-colors">
        <span className={locale === "uk" ? "text-purple-400" : ""}>UA</span>
        <span className="mx-1 opacity-30">/</span>
        <span className={locale === "en" ? "text-purple-400" : ""}>EN</span>
      </div>

      {/* Эффект свечения при наведении */}
      <div className="absolute inset-0 rounded-2xl bg-purple-500/0 group-hover:bg-purple-500/5 blur-xl transition-all -z-10" />
    </button>
  );
}