import { useLang } from "@/i18n/LanguageContext";

export const Opening = () => {
  const { t } = useLang();
  return (
    <section
      id="opening"
      className="py-32 md:py-48 bg-[hsl(var(--background-deep))] border-y border-hairline"
    >
      <div className="container-edge text-center max-w-2xl">
        <h2
          className="font-serif text-ivory mb-8 leading-none"
          style={{ fontSize: "clamp(4rem, 12vw, 9rem)", letterSpacing: "-0.03em" }}
        >
          {t.opening.title}
        </h2>
        <p className="font-serif italic text-gold text-xl md:text-2xl mb-6">
          {t.opening.sub}
        </p>
        <p className="text-ivory/70 mb-12">{t.opening.body}</p>

        <div className="pt-10 border-t border-hairline">
          <p className="text-[11px] tracking-[0.22em] text-ivory/50 uppercase mb-4">
            {t.opening.contact}
          </p>
          <a
            href={`mailto:${t.opening.email}`}
            className="inline-block font-serif text-gold text-lg md:text-xl border-b border-gold/40 pb-1 hover:border-gold transition-colors"
          >
            {t.opening.email}
          </a>
        </div>
      </div>
    </section>
  );
};
