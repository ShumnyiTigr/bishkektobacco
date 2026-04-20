import { useLang } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLang();
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1565138146061-e29b079736c0?auto=format&fit=crop&w=2000&q=80"
        alt="Tobacco manufacturing facility interior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

      <div className="container-edge relative z-10 pb-16 md:pb-28 pt-32">
        <div className="eyebrow mb-6 animate-fade-in">{t.hero.eyebrow}</div>
        <h1 className="serif-h1 text-ivory max-w-5xl whitespace-pre-line animate-fade-in">
          {t.hero.title}
        </h1>
        <p className="mt-8 font-serif italic text-lg md:text-xl text-ivory/80 max-w-2xl">
          {t.hero.sub}
        </p>

        <div className="mt-12 max-w-md">
          <div className="flex items-baseline justify-between mb-3">
            <span className="text-[11px] tracking-[0.25em] text-gold uppercase">
              {t.hero.progressLabel}
            </span>
            <span className="font-serif text-2xl text-gold">{t.hero.progressValue}</span>
          </div>
          <div
            className="h-[3px] w-full bg-hairline overflow-hidden"
            role="progressbar"
            aria-valuenow={70}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={t.hero.progressLabel}
          >
            <div className="h-full bg-gold" style={{ width: "70%" }} />
          </div>
          <p className="mt-3 text-xs tracking-[0.18em] text-ivory/60 uppercase">
            {t.hero.progressNote}
          </p>
        </div>
      </div>
    </section>
  );
};
