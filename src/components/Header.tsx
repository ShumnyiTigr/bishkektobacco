import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

export const Header = () => {
  const { lang, setLang } = useLang();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-hairline"
          : "bg-transparent"
      }`}
    >
      <div className="container-edge flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="font-serif text-gold text-base md:text-lg tracking-wide leading-tight">
          BISHKEK <span className="font-normal italic">Tobacco</span> <span className="hidden sm:inline">Manufacturing</span>
        </a>
        <div className="flex items-center gap-2 text-xs tracking-[0.2em]">
          <button
            onClick={() => setLang("en")}
            className={`transition-colors ${lang === "en" ? "text-gold" : "text-ivory/50 hover:text-ivory"}`}
          >
            EN
          </button>
          <span className="text-ivory/30">|</span>
          <button
            onClick={() => setLang("ru")}
            className={`transition-colors ${lang === "ru" ? "text-gold" : "text-ivory/50 hover:text-ivory"}`}
          >
            RU
          </button>
        </div>
      </div>
    </header>
  );
};
