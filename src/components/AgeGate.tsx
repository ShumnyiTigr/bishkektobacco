import { useEffect, useState } from "react";
import { useLang } from "@/i18n/LanguageContext";

const COOKIE = "kt_age_ok";
const DAYS = 30;

const setCookie = (name: string, value: string, days: number) => {
  const d = new Date();
  d.setTime(d.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${d.toUTCString()}; path=/; SameSite=Lax`;
};

const getCookie = (name: string) => {
  const match = document.cookie.match(new RegExp("(^| )" + name + "=([^;]+)"));
  return match ? match[2] : null;
};

export const AgeGate = () => {
  const { t, lang, toggle } = useLang();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (getCookie(COOKIE) !== "1") setOpen(true);
  }, []);

  if (!open) return null;

  const accept = () => {
    setCookie(COOKIE, "1", DAYS);
    setOpen(false);
  };

  const decline = () => {
    window.location.href = "https://www.google.com";
  };

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-background-deep px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="age-gate-title"
    >
      <div className="absolute right-6 top-6">
        <button
          onClick={toggle}
          className="text-xs tracking-[0.2em] text-ivory/70 hover:text-gold transition-colors"
          aria-label="Toggle language"
        >
          {lang === "en" ? "EN | ru" : "en | RU"}
        </button>
      </div>

      <div className="w-full max-w-md text-center animate-fade-in">
        <div className="eyebrow mb-8">{t.ageGate.brand}</div>
        <h1
          id="age-gate-title"
          className="font-serif text-4xl md:text-5xl text-ivory mb-6"
        >
          {t.ageGate.question}
        </h1>
        <p className="text-sm text-ivory/60 mb-10 leading-relaxed">
          {t.ageGate.sub}
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <button
            onClick={accept}
            className="px-8 py-3 bg-gold text-[hsl(var(--primary-foreground))] text-sm tracking-[0.18em] uppercase font-medium hover:bg-gold-soft transition-colors"
          >
            {t.ageGate.yes}
          </button>
          <button
            onClick={decline}
            className="px-8 py-3 border border-ivory/30 text-ivory text-sm tracking-[0.18em] uppercase hover:border-ivory hover:bg-ivory/5 transition-colors"
          >
            {t.ageGate.no}
          </button>
        </div>
      </div>
    </div>
  );
};
