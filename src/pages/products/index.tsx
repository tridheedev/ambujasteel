/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header';
import Hero from '@/components/Hero/Hero';
import ProductCard from '@/components/Products/ProductCard';
import Footer from '@/components/footer/Footer';
import ProductBox from '@/components/products/ProductBox';
import Image from 'next/image';
import React from 'react';

type Props = {};

const index = (props: Props) => {
  return (
    <div className='h-screen overflow-y-auto'>
      <div className='h-96 bg-black overflow-hidden relative '>
        <Image
          src={'/images/sales.jpg'}
          fill
          alt='images'
          className='object-cover bg-cover opacity-80 bg-black backdrop-brightness-90 '
        />
        <div className='z-10  absolute w-screen text-white'>
          <Header />
          <Hero />
        </div>
      </div>

      <div
        className='mx-auto container px-4 md:px-6 2xl:px-0 py-12 
      // flex justify-center items-center
      '
      >
        <div className='flex  self-start mt-10 lg:mt-24'>
          <div className='flex justify-between'>
            <div>FILTERS</div>
            <div>Reset</div>
          </div>
        </div>
        <div className='flex flex-col jusitfy-start items-start'>
          <h1 className=' app-text-color uppercase font-bold  text-3xl'>
            Products
          </h1>
          <div className='flex mt-10 lg:mt-12 '>
            {/* <div className='w-1/2'>as</div> */}
            {/* <div className='grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10 lg:gap-y-0'>
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
              <ProductBox />
            </div> */}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
