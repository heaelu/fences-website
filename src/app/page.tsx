import { useTranslations } from 'next-intl';

export default function HomePage() {
  const t = useTranslations('Home');

  return (
    <main className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-slate-900 text-white py-24 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-block mb-4 px-3 py-1 bg-emerald-600/20 border border-emerald-500/40 rounded-full text-sm text-emerald-300">
            Elering Type B / HF358E266307A compliant
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

      {/* Product highlights */}
      <section id="product" className="py-20 px-6 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-12">{t('productTitle')}</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-lg mb-2">358 Mesh</h3>
              <p className="text-slate-600 text-sm">76.2 × 12.7 mm aperture, 4 mm wire – anti-climb, anti-cut, finger-proof.</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-lg mb-2">Hot-dip galvanized</h3>
              <p className="text-slate-600 text-sm">Long-life corrosion protection for Nordic climate. Optional powder coat.</p>
            </div>
            <div className="p-6 rounded-xl border border-slate-200 bg-slate-50">
              <h3 className="font-semibold text-lg mb-2">Full system</h3>
              <p className="text-slate-600 text-sm">Panels, posts, razor/concertina topping, gates. Installation via Forstal OÜ.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case study teaser */}
      <section className="py-16 px-6 bg-slate-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-4">{t('caseTitle')}</h2>
          <p className="text-slate-600 mb-6">{t('caseBody')}</p>
          <span className="text-sm text-emerald-700 font-medium">Elering Balti substation perimeter</span>
        </div>
      </section>

      {/* Contact CTA */}
      <section id="contact" className="py-20 px-6 bg-slate-900 text-white">
        <div className="max-w-xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">{t('contactTitle')}</h2>
          <p className="text-slate-300 mb-8">{t('contactBody')}</p>
          <a
            href="mailto:heaelu@gmail.com?subject=358%20Fence%20Quotation%20Request"
            className="inline-flex px-8 py-3 bg-emerald-600 hover:bg-emerald-500 rounded-lg font-semibold transition"
          >
            {t('ctaEmail')}
          </a>
          <p className="mt-6 text-sm text-slate-400">heaelu@gmail.com · +372 5331 4448</p>
        </div>
      </section>

      <footer className="py-8 text-center text-sm text-slate-500 bg-white border-t">
        Fences project · Forstal OÜ installation partner · GiantFence supply · Multi-language (ET/EN/FI/SV/DE/PL/LV/LT)
      </footer>
    </main>
  );
}
