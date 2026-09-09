import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <main className="min-h-screen">
      <section className="relative bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-emerald-600/20 border border-emerald-500/40 rounded-full text-sm text-emerald-300">
            {t('badge')}
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
            {t('heroTitle')}
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            {t('heroSubtitle')}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold transition"
            >
              {t('ctaQuote')}
            </a>
            <a
              href="#product"
              className="inline-flex items-center justify-center px-8 py-3 border border-slate-500 hover:border-slate-300 rounded-lg font-semibold transition"
            >
              {t('ctaSpecs')}
            </a>
          </div>
        </div>
      </section>

      <section id="product" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('productTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-lg mb-2">{t('card1Title')}</h3>
              <p className="text-slate-600 text-sm">{t('card1Body')}</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-lg mb-2">{t('card2Title')}</h3>
              <p className="text-slate-600 text-sm">{t('card2Body')}</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-lg mb-2">{t('card3Title')}</h3>
              <p className="text-slate-600 text-sm">{t('card3Body')}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{t('caseTitle')}</h2>
          <p className="text-slate-600 mb-6">{t('caseBody')}</p>
          <span className="text-sm text-emerald-700 font-medium">{t('caseCaption')}</span>
        </div>
      </section>

      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contactTitle')}</h2>
          <p className="text-slate-300 mb-8">{t('contactBody')}</p>
          <a
            href="mailto:heaelu@gmail.com?subject=Piirdeaed%20/%20358%20fence%20quote"
            className="inline-flex px-8 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold transition"
          >
            {t('ctaEmail')}
          </a>
          <p className="mt-6 text-sm text-slate-400">heaelu@gmail.com · +372 5331 4448</p>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500 bg-white border-t">
        {t('footer')}
      </footer>
    </main>
  );
}
