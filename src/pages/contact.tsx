import ContactUsMain from '@/components/ContactUs/contact';
import Header from '@/components/Header';
import Footer from '@/components/footer/Footer';
import Image from 'next/image';
import React from 'react';

type Props = {};

const contact = (props: Props) => {
  return (
    <div className='h-screen app-bg-color relative'>
      <div>
        <Header />
        <div className='md:absolute md:transform md:-translate-x-1/2 md:-translate-y-1/2  md:top-2/3 md:left-1/2 md:z-30'>
          <ContactUsMain />
        </div>
      </div>
      <div className='h-3/4 app-bg-color md:flex justify-evenly hidden'>
        <div className='w-full flex h-full justify-center items-center'></div>
        <div className='relative h-full w-full hidden md:block'>
          <div className='absolute z-10 app-radial h-full w-full '></div>
          <Image
            src={'/images/map.png'}
            fill
            alt='map'
            className='object-cover  '
          />
        </div>
      </div>

      <div className='h-1/3 bg-gray-100 hidden md:block'></div>
      <div className='bg-gray-100'>
        <Footer />
      </div>
    </div>
  );
};

export default contact;
