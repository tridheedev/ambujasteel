import React from 'react';

function ProductBox() {
  return (
    <div className='flex flex-col py-6'>
      <div className='relative'>
        <img src='/images/heroimage.png' alt='shoes' />
        <button
          aria-label='close'
          className='top-4 right-4 focus:outline-none focus:ring-2 focus:ring-offset-2 dark:bg-white dark:text-gray-800 focus:ring-gray-800 absolute p-1.5 bg-gray-800 text-white hover:text-gray-400'
        >
          <svg
            className='fil-current'
            width='14'
            height='14'
            viewBox='0 0 14 14'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M13 1L1 13'
              stroke='currentColor'
              stroke-width='1.25'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
            <path
              d='M1 1L13 13'
              stroke='currentColor'
              stroke-width='1.25'
              stroke-linecap='round'
              stroke-linejoin='round'
            />
          </svg>
        </button>
      </div>
      <div className='mt-6 flex justify-between items-center'>
        <div className='flex justify-center items-center'>
          <p className='tracking-tight text-2xl font-semibold leading-6 text-gray-800 dark:text-white'>
            Az Steel
          </p>
        </div>
        <div className='flex justify-center items-center'>
          <button
            aria-label='show menu'
            className='focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-2.5 px-2 bg-gray-800 text-white hover:text-gray-400 dark:bg-gray-50 dark:text-gray-900 hover:bg-gray-200'
          >
            <svg
              id='chevronUp3'
              className='hidden fill-stroke'
              width='10'
              height='6'
              viewBox='0 0 10 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M9 5L5 1L1 5'
                stroke='currentColor'
                stroke-width='1.25'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
            <svg
              id='chevronDown3'
              className='fill-stroke'
              width='10'
              height='6'
              viewBox='0 0 10 6'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1 1L5 5L9 1'
                stroke='currentColor'
                stroke-width='1.25'
                stroke-linecap='round'
                stroke-linejoin='round'
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBox;
