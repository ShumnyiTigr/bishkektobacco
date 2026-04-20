import { useLang } from "@/i18n/LanguageContext";

export const Footer = () => {
  const { t } = useLang();
  return (
    <footer className="border-t border-hairline py-10">
      <div className="container-edge flex flex-col md:flex-row gap-4 md:items-center md:justify-between text-xs text-ivory/50">
        <div className="font-serif text-gold tracking-wide">BISHKEK TOBACCO MANUFACTURING</div>
        <div>{t.footer.copy}</div>
        <div className="uppercase tracking-[0.15em]">{t.footer.warning}</div>
      </div>
    </footer>
  );
};
