import { useLang } from "@/i18n/LanguageContext";
import leafImage from "@/assets/leaf-macro.jpg";

export const Leaf = () => {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-40 bg-[hsl(var(--muted))]">
      <div className="container-edge grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="md:order-2 relative aspect-[4/5] overflow-hidden">
          <img
            src={leafImage}
            alt="Macro detail of a cured tobacco leaf"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-bl from-background/30 via-transparent to-background/30" />
        </div>
        <div className="md:order-1">
          <div className="eyebrow mb-6">{t.leaf.eyebrow}</div>
          <h2 className="serif-h2 text-ivory mb-8 whitespace-pre-line">{t.leaf.title}</h2>
          <p className="text-ivory/75 max-w-xl mb-6">{t.leaf.intro}</p>
          <p className="font-serif italic text-gold/90 max-w-xl mb-12">{t.leaf.rule}</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-gold/30">
            {t.leaf.leaves.map((l) => (
              <div key={l.name} className="bg-[hsl(var(--muted))] p-6">
                <div className="font-serif text-gold text-2xl mb-2">{l.name}</div>
                <p className="text-sm text-ivory/70 leading-relaxed">{l.note}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
