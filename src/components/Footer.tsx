import { useLang } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="bg-[hsl(var(--background-deep))] pt-20 pb-10 border-t border-hairline">
      <div className="container-edge">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
          <div>
            <div className="text-[11px] tracking-[0.22em] text-gold uppercase mb-5 pb-4 border-b border-hairline">
              {t.footer.legalTitle}
            </div>
            <ul className="space-y-2 text-sm text-ivory/65 leading-relaxed">
              {t.footer.legal.map((l, i) => (
                <li key={i} className={i === 0 ? "font-serif text-ivory/85" : ""}>
                  {l}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.22em] text-gold uppercase mb-5 pb-4 border-b border-hairline">
              {t.footer.contactTitle}
            </div>
            <ul className="space-y-2 text-sm text-ivory/65">
              {t.footer.contact.map((c, i) => {
                const isEmail = c.includes("@");
                const isPhone = c.startsWith("+");
                const href = isEmail ? `mailto:${c}` : isPhone ? `tel:${c.replace(/\s/g, "")}` : null;
                return (
                  <li key={i}>
                    {href ? (
                      <a href={href} className="hover:text-gold transition-colors">
                        {c}
                      </a>
                    ) : (
                      c
                    )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div>
            <div className="text-[11px] tracking-[0.22em] text-gold uppercase mb-5 pb-4 border-b border-hairline">
              {t.footer.complianceTitle}
            </div>
            <ul className="space-y-2 text-sm text-ivory/65">
              {t.footer.compliance.map((c, i) => (
                <li key={i}>{c}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-hairline flex flex-col md:flex-row gap-3 md:items-center md:justify-between text-[11px] tracking-[0.18em] uppercase">
          <div className="font-serif text-gold/80 normal-case tracking-wide text-sm">
            BISHKEK TOBACCO MANUFACTURING
          </div>
          <div className="text-ivory/45">{t.footer.copy}</div>
          <div className="text-ivory/45">{t.footer.warning}</div>
        </div>
      </div>
    </footer>
  );
};
