import Image from 'next/image';
import React from 'react';

type Props = {};

function Brand({}: Props) {
  return (
    <div className='flex  flex-col'>
      <div className='flex items-center'>
        <div className='relative h-10 w-10 '>
          <Image
            src='/images/logo.png'
            fill
            alt='as'
            className='object-cover absolute lg:-top-4 md:top-5  '
          />
        </div>
        <h1 className='uppercase'>Ambuja Steel</h1>
      </div>
      <h4>
        Ambuja Steel & Engg. Co. is a prominent firm dealing in Industrial
        Flanges, Industrial Fasteners and other allied products.
      </h4>
    </div>
  );
}

export default Brand;
