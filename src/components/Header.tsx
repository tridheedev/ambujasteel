import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

type Props = {};

const Header = (props: Props) => {
  const [showMenu, setMenu] = useState(false);
  return (
    <>
      <div className='flex max-w-screen-xl mx-auto justify-between py-3'>
        <div className='px-3 relative uppercase font-bold tracking-wider drop-shadow-lg'>
          <Link href='/'>Ambuja steel</Link>
        </div>
        <div className='space-x-3 uppercase  px-8 hidden md:flex'>
          <div className='cursor-pointer'>
            <Link href='/'>home</Link>
          </div>
          <div className='cursor-pointer'>
            <Link href='/aboutus'>About us</Link>
          </div>
          <div className='cursor-pointer'>
            {' '}
            <Link href='/products'>Products</Link>{' '}
          </div>
          <div className='cursor-pointer text-inherit'>Certifications</div>
          <div className='cursor-pointer'>
            <Link href='/contact'>Contact</Link>
          </div>
        </div>
        <div className='px-14 md:hidden' onClick={() => setMenu(!showMenu)}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5'
            />
          </svg>
        </div>
      </div>

      {/* menu */}
      {showMenu && (
        <div className='app-bg-color '>
          <div className=' uppercase text-white px-4 space-y-3 py-4 md:hidden'>
            <div className='cursor-pointer'>
              <Link href='/'>home</Link>
            </div>
            <div className='cursor-pointer'>
              <Link href='/aboutus'>About us</Link>
            </div>
            <div className='cursor-pointer'>Products</div>
            <div className='cursor-pointer'>Certifications</div>
            <div className='cursor-pointer'>
              <Link href='/contact'>Contact</Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
