import { useLang } from "@/i18n/LanguageContext";
import rootsImage from "@/assets/roots-curing.jpg";

export const Roots = () => {
  const { t } = useLang();
  return (
    <section className="py-24 md:py-40">
      <div className="container-edge grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
        <div className="relative aspect-[4/5] overflow-hidden">
          <img
            src={rootsImage}
            alt="Tobacco leaves curing in a barn"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-background/40 via-transparent to-transparent" />
        </div>
        <div>
          <div className="eyebrow mb-6">{t.roots.eyebrow}</div>
          <h2 className="serif-h2 text-ivory mb-10 whitespace-pre-line">{t.roots.title}</h2>
          <div className="space-y-5 text-ivory/80 max-w-xl">
            {t.roots.body.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
          <div className="mt-12 pt-8 border-t border-hairline">
            <p className="font-serif italic text-gold text-lg md:text-xl">
              {t.roots.closing}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
