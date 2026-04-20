import { useLang } from "@/i18n/LanguageContext";

export const Founders = () => {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-40 bg-[hsl(var(--muted))]">
      <div className="container-edge">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">{t.founders.eyebrow}</div>
          <h2 className="serif-h2 text-ivory whitespace-pre-line">{t.founders.title}</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12 max-w-5xl">
          {t.founders.cards.map((c) => (
            <article key={c.name} className="bg-[hsl(var(--card))] border border-hairline">
              <div className="aspect-[4/5] bg-gradient-to-br from-[hsl(var(--background))] via-[hsl(var(--muted))] to-[hsl(var(--card))] flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_30%_30%,hsl(var(--accent-gold))_0%,transparent_60%)]" />
                <span className="font-serif text-gold/30 text-7xl md:text-8xl select-none">
                  {c.name
                    .split(" ")
                    .map((w) => w[0])
                    .join("")
                    .slice(0, 2)}
                </span>
              </div>
              <div className="p-8">
                <div className="font-serif text-gold text-xl tracking-wide mb-1">{c.name}</div>
                <div className="text-[11px] tracking-[0.22em] text-ivory/55 uppercase mb-5">
                  {c.role}
                </div>
                <div className="h-px w-10 bg-gold/60 mb-5" />
                <p className="text-ivory/75 mb-6">{c.bio}</p>
                <div className="text-[11px] tracking-[0.22em] text-gold/70 uppercase">
                  {c.meta}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
