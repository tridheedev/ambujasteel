import React from 'react';

type Props = {
  logo: React.ReactElement;
  text: string;
};

const ContactCard = (props: Props) => {
  return (
    <div className='flex gap-2 py-2 items-start'>
      <div>{props.logo}</div>
      <p className='text-sm'>{props.text}</p>
    </div>
  );
};

export default ContactCard;
