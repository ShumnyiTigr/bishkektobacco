import { useLang } from "@/i18n/LanguageContext";
import prepImage from "@/assets/preparation-workshop.jpg";

export const Preparation = () => {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-40 bg-[hsl(var(--muted))]">
      <div className="container-edge grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div>
          <div className="eyebrow mb-6">{t.preparation.eyebrow}</div>
          <h2 className="serif-h2 text-ivory mb-10">{t.preparation.title}</h2>
          <div className="space-y-5 text-ivory/80 max-w-xl">
            {t.preparation.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-hairline flex flex-wrap items-center gap-x-6 gap-y-3">
            {t.preparation.markers.map((m, i) => (
              <div key={i} className="flex items-center gap-x-6">
                {i > 0 && <span className="text-gold/40 hidden sm:inline">·</span>}
                <span className="text-[11px] tracking-[0.22em] text-gold uppercase">{m}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="relative aspect-[4/5] overflow-hidden md:order-2">
          <img
            src={prepImage}
            alt="Workers sorting tobacco leaves in a workshop"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tl from-background/40 via-transparent to-transparent" />
        </div>
      </div>
    </section>
  );
};
