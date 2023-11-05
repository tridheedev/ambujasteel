import React from 'react';

type Props = {};

const ContactForm = (props: Props) => {
  return (
    <div className='space-y-6 '>
      <h4 className='app-text-secondary'>Send Us a Message</h4>

      <div className='flex justify-between flex-col md:flex-row space-y-2 md:space-y-0'>
        <div className='mx-2 flex flex-col'>
          <label aria-label='name' className='text-xs text-gray-700'>
            Your Name
          </label>
          <input
            type='text'
            name='name'
            placeholder='Danesh Patel'
            className='app-text-input text-black'
          />
        </div>
        <div className='mx-2 flex flex-col'>
          <label className='text-xs text-gray-700'>Email Address</label>
          <input
            type='email'
            placeholder='dn@example.com'
            className='app-text-input'
          />
        </div>
      </div>
      <div className='flex justify-between flex-col md:flex-row space-y-2 md:space-y-0'>
        <div className='mx-2 flex flex-col'>
          <label className='text-xs text-gray-700'>Phone</label>
          <input
            type='tel'
            placeholder='+91-000000000'
            className='app-text-input'
          />
        </div>
        <div className='mx-2 flex flex-col'>
          <label className='text-xs text-gray-700'>Company</label>
          <input
            type='text'
            placeholder='Patel Co'
            className='app-text-input'
          />
        </div>
      </div>
      <div className='flex flex-col'>
        <label className='text-xs text-gray-700'>Message</label>
        <textarea
          cols={20}
          placeholder='Write Message'
          className='app-text-input'
        />
      </div>
      <button className='w-full py-2 px-2 app-bg-secondary text-white uppercase'>
        Submit
      </button>
    </div>
  );
};

export default ContactForm;
