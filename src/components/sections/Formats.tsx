import { useLang } from "@/i18n/LanguageContext";

export const Formats = () => {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-40">
      <div className="container-edge">
        <div className="max-w-3xl mb-16">
          <div className="eyebrow mb-6">{t.formats.eyebrow}</div>
          <h2 className="serif-h2 text-ivory mb-6 whitespace-pre-line">{t.formats.title}</h2>
          <p className="text-ivory/65 max-w-xl">{t.formats.sub}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          <div>
            <div className="text-[11px] tracking-[0.22em] text-gold uppercase mb-6 pb-4 border-b border-hairline">
              {t.formats.formatsTitle}
            </div>
            <ul className="space-y-6">
              {t.formats.formats.map((f) => (
                <li key={f.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                  <span className="font-serif text-gold text-xl">{f.name}</span>
                  <span className="font-serif italic text-ivory/60 text-sm sm:text-right">{f.note}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.22em] text-gold uppercase mb-6 pb-4 border-b border-hairline">
              {t.formats.flavoursTitle}
            </div>
            <ul className="space-y-5">
              {t.formats.flavours.map((f) => (
                <li key={f.name} className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 sm:gap-6">
                  <span className="font-serif text-gold text-xl">{f.name}</span>
                  <span className="font-serif italic text-ivory/60 text-sm sm:text-right">{f.note}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
