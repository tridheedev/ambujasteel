import React from 'react';

type Props = {
  title: string;
  tagLine: string;
  children: React.ReactNode;
};

const CompanyCard = (props: Props) => {
  return (
    <div className='bg-white w-full px-3 rounded-md h-20 flex items-center shadow-sm'>
      <div className=''>{props.children}</div>
      <div className='px-5'>
        <div>{props.title}</div>
        <div className='text-xs'>{props.tagLine}</div>
      </div>
    </div>
  );
};

export default CompanyCard;
