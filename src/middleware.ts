import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n/request';

export default createMiddleware({
  locales,
  defaultLocale: 'et',
  localePrefix: 'as-needed',
});

export const config = {
  matcher: ['/', '/(et|en|fi|sv|de|pl|lv|lt)/:path*'],
};
