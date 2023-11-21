/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import TruckIcon from '../icons/TruckIcon';
import GenuineIcon from '../icons/GenuineIcon';
import WhatsApp from '../icons/WhatsApp';

type Props = {};

const ProductAction = (props: Props) => {
  return (
    <>
      <div className='mt-5 border-[1px]  rounded-md '>
        <div className='border-b-[1px] flex  items-center py-2'>
          <span className='mx-2 app-text-color'>
            <TruckIcon />
          </span>
          <div className=''>
            <div>Convenience shipping policy</div>
            <div className='text-xs underline cursor-pointer'>
              Shipping is subject to availability{' '}
            </div>
          </div>
        </div>
        <div className='border-b-[1px] flex  items-center py-2'>
          <span className='mx-2 app-text-color'>
            <GenuineIcon />
          </span>
          <div className=''>
            <div>Genuine high Quality steel made in india.</div>
            <div className='text-xs underline cursor-pointer'>
              Shipping is subject to availability{' '}
            </div>
          </div>
        </div>
      </div>
      <div className='border cursor-pointer flex  items-center py-2 rounded-md my-2 app-bg-secondary text-white'>
        <span className='mx-2 app-text-color'>
          <WhatsApp />
        </span>
        <div className=''>
          <div>Talk to us on Whats up</div>
          <div className='text-xs underline cursor-pointer'>
            Get latest price and qution on whats's app
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductAction;
