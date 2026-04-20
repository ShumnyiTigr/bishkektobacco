import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

export const Header = () => {
  const { lang, setLang, t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  const navItems = [
    { id: "roots", label: t.nav.roots },
    { id: "leaf", label: t.nav.leaf },
    { id: "portfolio", label: t.nav.portfolio },
    { id: "standards", label: t.nav.standards },
    { id: "founders", label: t.nav.founders },
    { id: "opening", label: t.nav.opening },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-background/85 backdrop-blur-md border-b border-hairline"
          : "bg-transparent"
      )}
    >
      <div className="container-edge flex items-center justify-between h-16 md:h-20">
        <a href="#top" className="flex flex-col leading-none shrink-0">
          <span className="font-sans text-gold text-[13px] md:text-sm tracking-[0.22em] uppercase font-medium">
            Bishkek Tobacco
          </span>
          <span className="font-serif italic text-ivory/75 text-base md:text-lg tracking-wide mt-0.5">
            Manufacturing
          </span>
        </a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 text-xs tracking-wide">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="text-ivory/70 hover:text-gold transition-colors uppercase"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2 text-xs tracking-[0.2em] shrink-0">
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

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden ml-2 p-1 text-ivory/70 hover:text-gold transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-b border-hairline">
          <nav className="container-edge py-4 flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileOpen(false)}
                className="text-sm text-ivory/80 hover:text-gold transition-colors uppercase tracking-wide py-1"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};
