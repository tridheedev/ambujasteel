import Image from 'next/image';
import React, { useState } from 'react';

type Props = {};

const Certificate = (props: Props) => {
  const [vale, setValue] = useState(1);
  return (
    <div className='max-w-screen-xl mx-auto px-2 py-32  '>
      <h1 className='app-text-color uppercase font-bold  text-3xl'>
        CERTIFICATE & AUTHORIZATION
      </h1>
      <p className='text-gray-700'>
        Because we are transparent company, which puts price on quantity, we
        show you series of certificates.
      </p>
      <div className='py-2 flex gap-x-4 items-center justify-center flex-col md:flex-row gap-y-3'>
        <div
          className='  h-[500px] w-[420px] bg-orange-200 rounded relative'
          onClick={() => setValue(1)}
        >
          <Image
            src='/images/cert1.jpg'
            fill
            className='object-cover rounded-md shadow-2xl'
            alt='certificate'
          />
        </div>
        <div
          className='  h-[500px] w-[420px] bg-orange-200 rounded relative'
          onClick={() => setValue(2)}
        >
          <Image
            src='/images/cert2.jpg'
            fill
            className='object-cover rounded-md shadow-2xl'
            alt='certificate'
          />
        </div>
        <div className=' md:block hidden h-[770px] w-[690px] bg-orange-200 rounded relative'>
          <Image
            src={`/images/cert${vale}.jpg`}
            fill
            className='object-cover rounded-md shadow-2xl'
            alt='certificate'
          />
        </div>
      </div>
    </div>
  );
};

export default Certificate;
