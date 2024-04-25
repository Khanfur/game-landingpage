import {useTranslations} from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';
import Navigation from '@/components/Navigation';

type Props = {
  params: {locale: string};
};

export default function IndexPage({params: {locale}}: Props) {
  unstable_setRequestLocale(locale);

  const t = useTranslations('IndexPage');

  return (
    <>   
    <Navigation />

    <div className='header-box'>
      <video 
      autoPlay
      muted
      loop
      src='/videos/video.mp4'
      className='w-100 h-100 object-cover'
      ></video>

      <div className='header-content'>
        <div className="cont">
          <h1 className='uppercase'>Kick, Pung, ko</h1>
          <img src='/icons/play.svg' className='hover:cursor-pointer mt-40' height={64} width={64}></img>
        <div className='download'>
          <a>
          <img src='/icons/google.png' className='hover:cursor-pointer' height={140} width={140}></img>
          </a>
          <a className='ml-4'>
          <img src='/icons/apple.png' className='hover:cursor-pointer' height={140} width={140}></img>
          </a>
        </div>
          </div>
        </div>
      </div>


      <div className='fx-features'>
      <h2>Game Features</h2>

      <div className='feature'>
        <img src="/icons/game.webp" alt="" />

        <p>
        lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi 
         ut aliquip ex ea commodo consequat. 
        </p>
      </div>

      <div className='feature'>
        <p>
        lorem ipsum dolor sit amet, 
        consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et 
        dolore magna aliqua. Ut enim ad minim veniam,
         quis nostrud exercitation ullamco laboris nisi 
         ut aliquip ex ea commodo consequat. 
        </p>

        <img src="/icons/game.webp" alt="" />
      </div>
      </div>
    </>
  );
}
