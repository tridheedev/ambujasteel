import React from 'react';

type Props = {};

const ContactUs = (props: Props) => {
  return (
    <div className='h-80 bg-slate-300 flex justify-between items-center mx-2'>
      <div className='w-full'> image</div>
      <div className='w-full text-2xl font-bold text-white'>
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
  );
};

export default ContactUs;
