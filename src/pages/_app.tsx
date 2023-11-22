import { AppProps } from 'next/app';

import '../globals.css';
import Header from '@/components/Header';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <div className='z-[100] fixed   app-bg-color   w-screen text-white'>
      <Header />
    </div>
    <Component {...pageProps} />
  </>
);

export default MyApp;
