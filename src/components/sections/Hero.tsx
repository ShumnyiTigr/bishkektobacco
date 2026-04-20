import { useLang } from "@/i18n/LanguageContext";

export const Hero = () => {
  const { t } = useLang();
  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1587502537745-84b86da1204f?auto=format&fit=crop&w=2000&q=80"
        alt="Tobacco leaves curing in a wooden barn"
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
        <div className="mt-8 flex flex-col md:flex-row md:items-end md:justify-between gap-6 max-w-5xl">
          <p className="font-serif italic text-lg md:text-xl text-ivory/80 max-w-md">
            {t.hero.sub}
          </p>
          <div className="text-xs tracking-[0.25em] text-gold border border-gold/40 px-4 py-2 self-start md:self-end">
            {t.hero.tag}
          </div>
        </div>
      </div>
    </section>
  );
};
