import { AppProps } from 'next/app';

import '../globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <Component {...pageProps} />
);

export default MyApp;
