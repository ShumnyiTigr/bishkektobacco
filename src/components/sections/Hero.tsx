import { useLang } from "@/i18n/LanguageContext";
import { Check } from "lucide-react";
import heroImage from "@/assets/hero-facility.jpg";

export const Hero = () => {
  const { t } = useLang();
  const steps = t.hero.steps;
  const doneCount = steps.filter((s) => s.state === "done").length;
  const activeIndex = steps.findIndex((s) => s.state === "active");
  const filledStops = activeIndex >= 0 ? activeIndex : doneCount;
  const fillPercent = (filledStops / (steps.length - 1)) * 100;

  return (
    <section id="top" className="relative min-h-[100svh] flex items-end overflow-hidden">
      <img
        src={heroImage}
        alt="Bishkek Tobacco Manufacturing facility interior"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/85 to-background/40" />
      <div className="absolute inset-0 bg-gradient-to-r from-background/70 via-transparent to-transparent" />

      <div className="container-edge relative z-10 pb-16 md:pb-28 pt-32">
        <div className="mb-10 animate-fade-in">
          <div className="flex items-baseline gap-x-4 gap-y-1 flex-wrap leading-tight">
            <span className="text-2xl md:text-4xl tracking-[0.18em] uppercase text-gold font-medium">
              Bishkek Tobacco
            </span>
            <span className="font-serif italic text-4xl md:text-6xl text-gold/95 leading-none">
              Manufacturing
            </span>
          </div>
          <div className="mt-3 h-px w-16 bg-gold/60" />
          <div className="mt-3 text-[11px] md:text-xs tracking-[0.32em] uppercase text-gold/65">
            Est. 2026 · Bishkek, Kyrgyzstan
          </div>
        </div>
        <h1 className="serif-h1 text-ivory max-w-5xl whitespace-pre-line animate-fade-in">
          {t.hero.title}
        </h1>
        <p className="mt-8 font-serif italic text-lg md:text-xl text-ivory/80 max-w-2xl">
          {t.hero.sub}
        </p>

        <div className="mt-14 max-w-3xl">
          <div className="flex items-baseline justify-between mb-6">
            <span className="text-[11px] tracking-[0.25em] text-gold uppercase">
              {t.hero.roadmapLabel}
            </span>
            <span className="font-serif italic text-base text-gold/90">{t.hero.roadmapNote}</span>
          </div>

          <div className="relative" role="list" aria-label={t.hero.roadmapLabel}>
            <div className="absolute left-[11px] right-[11px] top-[11px] h-px bg-hairline" aria-hidden />
            <div
              className="absolute left-[11px] top-[11px] h-px bg-gold/70 transition-[width] duration-700"
              style={{ width: `calc((100% - 22px) * ${fillPercent / 100})` }}
              aria-hidden
            />

            <div className="relative grid grid-cols-2 sm:grid-cols-4 gap-y-6 gap-x-4">
              {steps.map((s) => {
                const done = s.state === "done";
                const active = s.state === "active";
                return (
                  <div key={s.label} className="flex flex-col items-start" role="listitem">
                    <span
                      className={
                        "relative flex h-[22px] w-[22px] items-center justify-center rounded-full border " +
                        (done
                          ? "border-gold bg-gold text-background"
                          : active
                          ? "border-gold bg-background text-gold"
                          : "border-hairline bg-background text-ivory/40")
                      }
                      aria-hidden
                    >
                      {done ? (
                        <Check size={12} strokeWidth={3} />
                      ) : (
                        <span className="block h-1.5 w-1.5 rounded-full bg-current" />
                      )}
                      {active && (
                        <span className="absolute inset-0 rounded-full border border-gold/60 animate-ping" />
                      )}
                    </span>
                    <span
                      className={
                        "mt-3 text-[11px] tracking-[0.18em] uppercase leading-snug " +
                        (active ? "text-gold" : done ? "text-ivory/85" : "text-ivory/45")
                      }
                    >
                      {s.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
