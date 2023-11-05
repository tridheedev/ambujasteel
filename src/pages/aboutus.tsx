import Header from '@/components/Header';
import Hero from '@/components/Hero/Hero';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import React from 'react';

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className='h-screen'>
      {' '}
      <div className='  h-4/6 bg-black overflow-hidden relative '>
        <Image
          src={'/images/hero/steelimage.jpg'}
          fill
          alt='images'
          className='object-cover bg-cover opacity-80 bg-black backdrop-brightness-90 '
        />
        <div className='z-10  absolute w-screen text-white'>
          <Header />
          <Hero />
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
