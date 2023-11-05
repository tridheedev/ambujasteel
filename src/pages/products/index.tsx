/* eslint-disable @next/next/no-img-element */
import Header from '@/components/Header';
import ProductCard from '@/components/Products/ProductCard';
import Footer from '@/components/footer/Footer';
import ProductBox from '@/components/products/ProductBox';
import React from 'react';

type Props = {};

const index = (props: Props) => {
  return (
    <div>
      <Header />
      <div className='mx-auto container px-4 md:px-6 2xl:px-0 py-12 flex justify-center items-center'>
        <div className='flex flex-col jusitfy-start items-start'>
          <h1 className=' app-text-color uppercase font-bold  text-3xl'>
            Products
          </h1>
          <div className='mt-10 lg:mt-12 grid grid-cols-1 lg:grid-cols-3 gap-x-8 gap-y-10 lg:gap-y-0'>
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
            <ProductBox />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default index;
