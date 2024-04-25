import {useLocale, useTranslations} from 'next-intl';
import LocaleSwitcherSelect from './LocaleSwitcherSelect';
import {locales} from '@/config';

export default function LocaleSwitcher() {
  const t = useTranslations('LocaleSwitcher');
  const locale = useLocale();

  return (
    <>
    <div className="dropdown dropdown-end">
  <div tabindex={0} role="button" class="btn ml-4 border-0 lang-switcher">
  <img src="/icons/globe.svg" height={35} width={35}/>
  </div>
  <ul tabindex={0} class="dropdown-content p-2 lang-menu">
    <div className='flex items-center flex-col'>
    <li className='color-primary'>
      <a> English </a>
    </li>
    <li className='color-primary'>
      <a> Deutsch </a>
    </li>
    </div>
   
  </ul>
</div>
    </>
  
    // <LocaleSwitcherSelect defaultValue={locale} label={t('label')}>
    //   {locales.map((cur) => (
    //     <option key={cur} value={cur}>
    //       {t('locale', {locale: cur})}
    //     </option>
    //   ))}
    // </LocaleSwitcherSelect>


  );
}