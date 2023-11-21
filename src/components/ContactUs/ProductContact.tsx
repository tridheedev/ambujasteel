import React from 'react';

type Props = {};

const ProductContact = (props: Props) => {
  return (
    <div className='mx-5 pt-10'>
      <p className='text-2xl'>
        ENQUIRY <span className='text-orange-400'>NOW TO GET</span>
      </p>
      <h1 className='text-3xl pt-2'>GENUINE QUALITY STEEL</h1>

      <div className='flex  flex-col gap-y-3 my-4'>
        <div>
          <label
            htmlFor='tel'
            className='block text-sm font-medium leading-6 text-white'
          >
            Your Name
          </label>
          <div className='relative  rounded-md shadow-sm'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <span className='text-gray-500 sm:text-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z'
                  />
                </svg>
              </span>
            </div>
            <input
              type='text'
              name='price'
              id='price'
              className=' outline-none block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 '
              placeholder='Denesh patil'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='tel'
            className='block text-sm font-medium leading-6 text-white'
          >
            Phone No
          </label>
          <div className='relative  rounded-md shadow-sm'>
            <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
              <span className='text-gray-500 sm:text-sm'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='w-3 h-3'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z'
                  />
                </svg>
              </span>
            </div>
            <input
              type='tel'
              name='price'
              id='price'
              className=' outline-none block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 '
              placeholder='+979283 3928'
            />
          </div>
        </div>

        <div>
          <label
            htmlFor='tel'
            className='block text-sm font-medium leading-6 text-white'
          >
            Your Message
          </label>
          <div className='relative  rounded-md shadow-sm'>
            <textarea
              name='price'
              id='price'
              className=' outline-none block w-full rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-orange-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-orange-600 sm:text-sm sm:leading-6 '
              placeholder='Write short message for more business '
            />
          </div>
        </div>

        <div className='text-xs flex items-stretch'>
          <input type='checkbox' name='' id='' className=' inline-block' />
          <label className='mx-2'>
            I Acknowledge term of service as privacy policy{' '}
          </label>
        </div>

        <button className='block w-full bg-main-app py-2 rounded-sm app-bg-color cursor-pointer'>
          Submit
        </button>
      </div>
    </div>
  );
};

export default ProductContact;
