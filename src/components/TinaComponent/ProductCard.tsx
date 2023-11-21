import React from 'react';
import Star from '../icons/Star';
import ProductAction from './ProductAction';

type Props = {
  title?: string | null;
  url?: string | null;
  shortDisc?: string | null;
  tags?: (string | null)[] | null | undefined;
  star?: string | null | undefined | number;
  type: string | null | undefined;
};

const ProductCard = ({ title, shortDisc, tags, star = 1, type }: Props) => {
  return (
    <div className='mx-6 md:w-1/2 hidden md:block '>
      <div className='pt-2'>
        <h3 className='uppercase text-sm text-gray-800 font-semibold'>
          {type}
        </h3>
        <h1 className='text-xl text-gray-800'>{title}</h1>
      </div>
      <div className='flex py-1'>
        {Array.from(Array(Number(star)).keys()).map((s, i) => (
          <Star key={i} />
        ))}
      </div>
      <p className='text-sm text-gray-700 tracking-wide py-4'>{shortDisc}</p>
      <div className='border-t-[1px] border-b-[1px] py-2'>
        Catagories:{' '}
        {tags?.map((tag, i) => (
          <span key={i} className=' app-text-color text-gray-800'>
            {tag + ','}
          </span>
        ))}
      </div>
      <ProductAction />
    </div>
  );
};

export default ProductCard;
