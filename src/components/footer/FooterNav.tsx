import Link from 'next/link';
import React from 'react';

type Props = {
  title: string;
  links: { title: string; link: string }[];
};

const FooterNav = (props: Props) => {
  return (
    <div>
      <div>
        <h5 className='app-text-color'>{props.title}</h5>
      </div>
      <div>
        {props.links?.map((l) => {
          return (
            <Link key={l.title} href={l.link} className='flex py-1'>
              {l.title}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default FooterNav;
