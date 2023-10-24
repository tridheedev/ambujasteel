import Header from '@/components/Header';
import Hero from '@/components/Hero/Hero';
import Base from '@/template/Base';
import Company from '@/components/Company/Company';
import Image from 'next/image';
import Product from '@/components/Products/Product';
import ContactUs from '@/components/ContactUs/Home/ContactUs';
const Index = () => {
  return (
    <div className='h-screen overflow-scroll bg-gray-100'>
      <div className='  h-4/6 bg-black overflow-hidden relative '>
        <Image
          src={'/images/heroimage.png'}
          fill
          alt='images'
          className='object-cover bg-cover opacity-80 bg-black backdrop-brightness-90 '
        />
        <div className='z-10  absolute w-screen text-white'>
          <Header />
          <Hero />
        </div>
      </div>
      {/* <Product /> */}
      <Product />
      <Company />

      <ContactUs />
    </div>
  );
};

export default Index;
