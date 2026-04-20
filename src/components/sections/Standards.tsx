import { useLang } from "@/i18n/LanguageContext";
import backdrop from "@/assets/standards-backdrop.jpg";

export const Standards = () => {
  const { t } = useLang();
  return (
    <section className="relative py-28 md:py-44 overflow-hidden">
      <img
        src={backdrop}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-30"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/85 via-background/70 to-background/85" />

      <div className="container-edge relative z-10 text-center">
        <div className="eyebrow mb-6">{t.standards.eyebrow}</div>
        <h2 className="serif-h2 text-ivory mb-16 md:mb-24">{t.standards.title}</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 max-w-5xl mx-auto">
          {t.standards.pillars.map((p, i) => (
            <div key={i} className="flex flex-col items-center">
              <div className="font-serif text-gold text-4xl md:text-5xl mb-4 leading-none">
                {p.value}
              </div>
              <div className="h-px w-10 bg-gold/60 mb-5" />
              <p className="text-ivory/75 max-w-xs">{p.label}</p>
            </div>
          ))}
        </div>

        <p className="mt-20 font-serif italic text-gold/90 text-base md:text-lg max-w-2xl mx-auto">
          {t.standards.rule}
        </p>
      </div>
    </section>
  );
};
