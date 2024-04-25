import {useTranslations} from 'next-intl';
import {ReactNode} from 'react';
import Navigation from './Navigation';

type Props = {
  children?: ReactNode;
  title: ReactNode;
};

export default function PageLayout({children, title}: Props) {
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
    </div>
    </>
  );
}
