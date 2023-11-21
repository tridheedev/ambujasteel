import React from 'react';
import Star from '../icons/Star';

type Props = {
  title?: string | null | undefined;
  type: string | null | undefined;
};

const ProductCardMobile = ({ title, type }: Props) => {
  return (
    <div className='mx-2 md:hidden'>
      <div className='pt-2'>
        <h3 className='uppercase text-sm text-gray-800'>S{type}</h3>
        <h1 className='text-base text-gray-800'>{title}</h1>
      </div>
      <div className='flex py-1'>
        <Star />
        <Star />
        <Star />
        <Star />
      </div>
    </div>
  );
};

export default ProductCardMobile;
