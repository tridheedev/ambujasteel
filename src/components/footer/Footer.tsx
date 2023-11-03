import React from 'react';
import FooterNav from './FooterNav';
import Image from 'next/image';
import Brand from './Brand';
import ContactCard from './ContactCard';
import Location from '../icons/Location';
import Email from '../icons/Email';
import Phone from '../icons/Phone';

type Props = {};
const company = [
  { title: 'About Us', link: '' },
  { title: 'Certificate', link: '' },
  { title: 'Products', link: '' },
  { title: 'Contact', link: '' },
];
const products = [
  { title: 'Materials', link: '' },
  { title: 'Pipes and tubes', link: '' },
  { title: 'Flanges', link: '' },
  { title: 'Fittings', link: '' },
  { title: 'Valves', link: '' },
  { title: 'Round bars', link: '' },
];
const Footer = (props: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto px-2 py-10 '>
      <div className='flex '>
        <div className='w-1/3'>
          <Brand />
        </div>
        <div className='flex justify-evenly w-full  '>
          <FooterNav title={'COMPANY'} links={company} />
          <FooterNav title={'PRODUCTS'} links={products} />
          <div className='w-1/4'>
            <div>
              <h5 className='app-text-color uppercase'>Contact Info</h5>
            </div>
            <div>
              <ContactCard
                logo={<Location />}
                text='94/100 Bld. off no. 26, 3rd Floor 5th Kumbharwada Mumbai-400004'
              />
              <ContactCard logo={<Email />} text='text@gamil.com' />
              <ContactCard logo={<Phone />} text='78954' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
