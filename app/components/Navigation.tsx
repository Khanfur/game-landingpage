import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';

export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="header">
      <nav className="container flex justify-between p-2 nav">
        <div>  </div>
        <div>
        <NavigationLink href="/">{t('home')}</NavigationLink>
        <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink>
        <LocaleSwitcher />
        </div>
      </nav>
    </div>
  );
}

