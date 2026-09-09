import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getLocale, getMessages } from 'next-intl/server';
import './globals.css';

export const metadata: Metadata = {
  title: 'Fences – 358 High-Security Anti-Climb Fencing | Elering Type B',
  description: 'Professional 358 anti-climb welded mesh fencing systems compliant with Elering Type B / HF358E266307A. Hot-dip galvanized, posts, razor wire, gates. Installation partner Forstal OÜ.',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale}>
      <body className="antialiased bg-slate-50 text-slate-900">
        <NextIntlClientProvider messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
