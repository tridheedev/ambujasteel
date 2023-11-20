import React from 'react';
import Star from '../icons/Star';

type Props = {
  title?: string | null;
  url?: string | null;
  shortDisc?: string | null;
  tags?: (string | null)[] | null | undefined;
};

const ProductCard = ({ title, shortDisc, tags }: Props) => {
  return (
    <div className='mx-6 w-1/2 '>
      <div className='pt-2'>
        <h3 className='uppercase text-sm text-gray-800'>Steel/ type three</h3>
        <h1 className='text-xl text-gray-800'>{title}</h1>
      </div>
      <div className='flex py-1'>
        <Star />
        <Star />
        <Star />
        <Star />
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
    </div>
  );
};

export default ProductCard;
