import React from 'react';
import FooterNav from './FooterNav';
import Image from 'next/image';

type Props = {};

const Footer = (props: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto px-2 py-10 '>
      <div className='flex justify-between'>
        <div className='relative h-10 w-10'>
          <Image src={'/images/logo.png'} alt='ts' fill />
        </div>
        <div className='flex gap-x-5'>
          <FooterNav title={'COMPANY'} />
          <FooterNav title={'PRODUCTS'} />
          <FooterNav title={'CONTACT INFO'} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
