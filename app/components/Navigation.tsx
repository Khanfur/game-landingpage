import {useTranslations} from 'next-intl';
import LocaleSwitcher from './LocaleSwitcher';
import NavigationLink from './NavigationLink';
export default function Navigation() {
  const t = useTranslations('Navigation');

  return (
    <div className="header">
      <nav className="container flex justify-between p-2 nav">
        <div className='flex items-center'> 
        <a href='/'>
        <img src="/icons/logo.svg" height={35} width={35}/>
        </a>
        </div>
        <div className='flex items-center'>
        <NavigationLink href="/">{t('home')}</NavigationLink>
        {/* <NavigationLink href="/pathnames">{t('pathnames')}</NavigationLink> */}


        <LocaleSwitcher />

        </div>
        
      </nav>
    </div>
  );
}

