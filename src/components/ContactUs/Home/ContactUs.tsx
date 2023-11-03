import Image from 'next/image';
import React from 'react';

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className='bg-gradient relative'>
      <div className='h-80  flex revrese justify-between items-center max-w-screen-xl mx-auto '>
        <div className='w-1/2 relative h-full hidden md:block '>
          <Image
            src='/images/contact/footerimage.png'
            height={500}
            width={500}
            alt='as'
            className='object-cover absolute lg:-top-4 md:top-5 '
          />
        </div>
        <div className='md:w-1/2 w-full text-2xl font-bold text-white flex justify-center'>
          <div>
            <div>DO YOU WANT</div>
            <div>
              <div>
                A <span className='text-amber-950'>PERSONALIZED OFFER</span>{' '}
              </div>
              <div className=''>FOR YOUR BUSINESS?</div>
            </div>
            <button className='text-base font-normal  px-6 py-2 rounded-full mt-2 cursor-pointer bg-white app-text-color'>
              CONTACT US
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
