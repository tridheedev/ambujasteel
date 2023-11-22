import Header from '@/components/Header';
import Hero from '@/components/Hero/Hero';
import AboutUsMain from '@/components/aboutus/AboutUsMain';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import React from 'react';

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <div className='h-screen'>
      <div className='  h-4/6 bg-black overflow-hidden relative '>
        <Image
          src={'/images/hero/steelimage.jpg'}
          fill
          alt='images'
          className='object-cover bg-cover opacity-80 bg-black backdrop-brightness-90 '
        />
        <div className='z-10  absolute w-screen text-white'>
          <Hero />
        </div>
        <div className='absolute w-1/2  bg-white  right-0 -bottom-1  h-14 cut45 '></div>
      </div>
      <div className='max-w-screen-xl mx-auto px-2 py-20'>
        <AboutUsMain />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default AboutUs;
