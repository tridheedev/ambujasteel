import Image from 'next/image';
import React from 'react';

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className='h-80 bg-slate-300 flex justify-between items-center '>
      <div className='w-1/2 relative h-full '>
        <Image src='/images/c.jpg' fill alt='as' className='object-cover' />
      </div>
      <div className='w-1/2 text-2xl font-bold text-white flex justify-center'>
        <div>
          <div>DO YOU WANT</div>
          <div>
            <div>
              A <span className='app-text-color'>PERSONALIZED OFFER</span>{' '}
            </div>
            <div>FOR YOUR BUSINESS?</div>
          </div>
          <button className='text-base font-normal app-bg-color px-6 py-2 rounded-full mt-2 cursor-pointer'>
            CONTACT US
          </button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
