import React from 'react';

type Props = {};

const Certificate = (props: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto px-2 py-32  '>
      <h1 className='app-text-color uppercase font-bold  text-3xl'>
        CERTIFICATE & AUTHORIZATION
      </h1>
      <p className='text-gray-700'>
        Because we are transparent company, which puts price on quantity, we
        show you series of certificates.
      </p>
      <div className='py-2 flex gap-x-4 items-center justify-between'>
        <div className='w-full h-[400px] bg-orange-200 rounded'></div>
        <div className='w-full h-[400px] bg-orange-200 rounded'></div>
        <div className='w-full h-[400px] bg-orange-200 rounded'></div>
        <div className='w-full h-[470px] bg-orange-200 rounded'></div>
      </div>
    </div>
  );
};

export default Certificate;
