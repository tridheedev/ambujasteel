import React from 'react';
import PageHeading from '../icons/PageHeading';

type Props = {
  comp:
    | ({
        __typename: 'ProductMechanicalCompo';
        machName?: string | null | undefined;
        mechValue?: string | null | undefined;
      } | null)[]
    | null
    | undefined;
};

const MechanicalComposition = ({ comp }: Props) => {
  return (
    <>
      <div className='flex items-center'>
        <div className='app-text-color'>
          <PageHeading />
        </div>
        <div className='pl-2'>
          <h4 className='text-gray-800 text-xl font-medium  flex items-center '>
            Mechanical Composition
          </h4>
        </div>
      </div>
      <div className='flex my-3'>
        {comp?.map((comp, i) => {
          return (
            <div
              key={i}
              className='border-t-[1px] border-b-[1px] border-l-[1px] last:border-r-[1px]'
            >
              <div className='border-b-[1px] app-bg-color text-white px-2'>
                {comp?.machName}
              </div>
              <div className='px-2'>{comp?.mechValue}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default MechanicalComposition;
