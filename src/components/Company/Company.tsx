import React from 'react';
import CompanyCard from './CompanyCard';
import Experience from '../icons/Experience';
import Team from '../icons/Team';
import Research from '../icons/Research';
import Image from 'next/image';

type Props = {};

const Company = (props: Props) => {
  return (
    <>
      <div className='app-bg-color h-96'>
        <div className='max-w-screen-xl mx-auto '>
          <div className='flex justify-between h-full'>
            <div className='relative'>
              <Image
                src='/images/c.jpg'
                alt='as'
                fill
                className='object-cover z-50'
              />
            </div>
            <div>two</div>
          </div>
        </div>
      </div>
      <div className='flex px-2 justify-between max-w-screen-lg mx-auto -my-10 gap-5 relative z-20'>
        <CompanyCard title='Experience' tagLine='25 year of activity'>
          <Experience />
        </CompanyCard>
        <CompanyCard title='Team' tagLine='Professional in the industry'>
          <Team />
        </CompanyCard>
        <CompanyCard title='State of the art' tagLine='Equipment'>
          <Research />
        </CompanyCard>
      </div>
    </>
  );
};

export default Company;
