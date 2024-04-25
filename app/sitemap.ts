import {MetadataRoute} from 'next';
import {getPathname} from '../app/navigation';
import { pathnames, locales, host, defaultLocale } from './config';

export default function sitemap(): MetadataRoute.Sitemap {
  const keys = Object.keys(pathnames) as Array<keyof typeof pathnames>;

  function getUrl(
    key: keyof typeof pathnames,
    locale: (typeof locales)[number]
  ) {
    const pathname = getPathname({locale, href: key});
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
  }

  return keys.map((key) => ({
    url: getUrl(key, defaultLocale),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(key, locale)])
      )
    }
  }));
}
