import React from 'react';

type Props = {
  title: string;
};

const FooterNav = (props: Props) => {
  return (
    <div>
      <div>
        <h5 className='app-text-color'>{props.title}</h5>
      </div>
      <div>
        <div>one</div>
        <div>one</div>
        <div>one</div>
        <div>one</div>
        <div>one</div>
      </div>
    </div>
  );
};

export default FooterNav;
