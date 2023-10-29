import Image from 'next/image';
import React from 'react';

type Props = {};

const Header = (props: Props) => {
  return (
    <div className='flex max-w-screen-xl mx-auto justify-between py-3'>
      <div className='px-3 relative'>Ambuja steel</div>
      <div className='flex space-x-3 uppercase text-white px-8'>
        <div className='cursor-pointer'>home </div>
        <div className='cursor-pointer'>About us</div>
        <div className='cursor-pointer'>Products</div>
        <div className='cursor-pointer'>Certifications</div>
        <div className='cursor-pointer'>Contact</div>
      </div>
    </div>
  );
};

export default Header;
