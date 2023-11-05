import React from 'react';
import ContactForm from './ContactForm';
import ContactCard from '../footer/ContactCard';
import Location from '../icons/Location';
import Email from '../icons/Email';
import Phone from '../icons/Phone';

type Props = {};

const ContactUsMain = (props: Props) => {
  return (
    <>
      <div className=' mx-auto flex w-screen justify-center flex-col items-center'>
        <div className='flex flex-col'>
          <div className=' md:w-1/2 text-white py-10 px-10 md:px-0'>
            <h4 className='text-4xl'>Get In Touch </h4>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nihil,
              repudiandae. Sit, cupiditate. Necessitatibus tempore aperiam, ut
              autem ab eligendi neque!
            </p>
          </div>
          <div className='flex  flex-col md:flex-row'>
            <div className='bg-gray-100 px-10 py-10 shadow-lg '>
              <ContactForm />
            </div>
            <div className='app-bg-secondary px-10 py-10  text-white md:w-[350px] h-full '>
              <h5>Contact Information</h5>
              <div className='flex flex-col   h-full space-y-5 my-10'>
                <ContactCard
                  logo={<Location />}
                  text='94/100 Bld. off no. 26, 3rd Floor 5th Kumbharwada Mumbai-400004'
                />
                <ContactCard logo={<Email />} text='text@gamil.com' />
                <ContactCard logo={<Phone />} text='78954' />
                <div className='pt-16'>as</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactUsMain;
