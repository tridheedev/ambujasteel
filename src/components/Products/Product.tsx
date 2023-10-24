import React from 'react';
import ProductCard from './ProductCard';

type Props = {};

const Product = (props: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto px-2 py-20'>
      <h1 className=' app-text-color uppercase font-bold pb-9 text-3xl'>
        Product Range
      </h1>
      <div className='grid  grid-cols-1 md:grid-cols-2 lg:grid-cols-3  gap-3'>
        <ProductCard
          title='Materials'
          url='/images/products/product-steel.png'
        />
        <ProductCard title='Pipes' url='/images/products/product-steel.png' />
        <ProductCard title='Flanges' url='/images/products/product-steel.png' />
        <ProductCard
          title='Fittings'
          url='/images/products/product-steel.png'
        />
        <ProductCard title='Valves' url='/images/products/product-steel.png' />
        <ProductCard
          title='Round Bars'
          url='/images/products/product-steel.png'
        />
      </div>
    </div>
  );
};

export default Product;
