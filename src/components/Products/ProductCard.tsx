import Image from 'next/image';
import React from 'react';
import ArrowRight from '../icons/ArrowRight';

type Props = {
  title: string;
  url: string;
};

const ProductCard = (props: Props) => {
  return (
    <div className=' bg-white relative h-40 flex  rounded-md  justify-between shadow-sm'>
      <div className=' w-1/2 bottom-0 relative'>
        <Image src={props.url} fill alt='tes' className='object-cover  ' />
      </div>
      <div className='pt-8 px-7 w-1/2 '>
        <div className='text-2xl text-gray-800'>{props.title}</div>
        <div className='text-gray-500 text-xs flex items-center mx-1 app-text-color'>
          View <ArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
