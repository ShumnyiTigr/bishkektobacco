import { useLang } from "@/i18n/LanguageContext";
import backdrop from "@/assets/portfolio-backdrop.jpg";

export const Portfolio = () => {
  const { t } = useLang();
  return (
    <section className="relative py-24 md:py-40 overflow-hidden">
      <img
        src={backdrop}
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover opacity-15"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-background/60" />
      <div className="container-edge relative z-10">
        <div className="max-w-3xl">
          <div className="eyebrow mb-6">{t.portfolio.eyebrow}</div>
          <h2 className="serif-h2 text-ivory mb-6 whitespace-pre-line">{t.portfolio.title}</h2>
          <p className="text-ivory/65 max-w-xl">{t.portfolio.sub}</p>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px bg-[hsl(var(--accent-gold)/0.25)]">
          {t.portfolio.brands.map((b) => (
            <article
              key={b.name}
              className="group bg-[hsl(var(--card))] p-8 md:p-10 transition-colors hover:bg-[hsl(var(--muted))]"
            >
              <h3 className="font-serif text-gold text-2xl tracking-wide mb-1">{b.name}</h3>
              <div className="h-px w-10 bg-gold/60 mb-5 transition-all group-hover:w-16" />
              <p className="text-ivory/85 mb-2">{b.kind}</p>
              <p className="text-[11px] tracking-[0.18em] text-gold/70 uppercase mb-5">{b.meta}</p>
              <p className="text-sm text-ivory/60 leading-relaxed">{b.notes}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
