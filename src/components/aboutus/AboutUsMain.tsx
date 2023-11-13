import React from 'react';

type Props = {};

function AboutUsMain({}: Props) {
  return (
    <div className='relative text-gray-900'>
      <div className='flex justify-between'>
        <div className='md:w-1/2'>
          Founded in the year 2010, <b> Ambuja Steel & Engg. Co.</b> is the
          leading manufacturer, supplier, wholesaler and trader of{' '}
          <b>
            Industrial Flanges, Industrial Fasteners, Pipe Fittings, Copper
            Brass Products, Stainless Steel Pipes, Stainless Steel Coils, Sheets
            and Plates, Stainless Steel Bar and Alloy Steel Products.{' '}
          </b>
        </div>
        <div></div>
      </div>

      <div className='flex justify-between pt-10'>
        <div className='w-1/2 hidden md:block'></div>
        <div className='md:w-1/2'>
          With our quality centric approach, we are able to device wide ranges
          of industrial products to meet the rising demands of our clients. All
          our products are appreciated for their superior quality, fine
          finishing, perfect size, long sustainability, stainless character and
          wide varieties. Our broad network and well trained promoters help us
          to supply our advanced and reliable products to various regions of the
          world.
        </div>
      </div>

      <div className='pt-10'>
        We are based in Maharashtra and device strong and sustainable fittings,
        flanges, pipes and coils to cater diverse requirements of our clients.
        We maintain the best infrastructure and highly diligent employees.
      </div>
      <div className='pt-5'>
        Our products demands are very high in the market and are manufactured
        using superior resources. Our highly trusted vendors, experienced team,
        quality experts and best facilities help us in advanced and innovative
        production. We organize trainings and seminars to enhance the skill of
        our employees and provide them quality updates. Further, we also follow
        moral policies to maintain an ongoing and reliable relation with our
        valuable clients.
      </div>
      <div className='pt-20 md:w-1/2'>
        <div>
          <h4 className='uppercase app-text-color font-medium text-2xl'>
            Company Info
          </h4>
          <div className='grid grid-cols-2 pt-5 gap-7'>
            <div>
              <h5 className='font-semibold text-gray-800'>
                Year of Establishment{' '}
              </h5>
              <div>2010</div>
            </div>

            <div>
              <h5 className='font-semibold text-gray-800'>GST No. </h5>
              <div>27AHVPB3159R1ZI</div>
            </div>

            <div>
              <h5 className='font-semibold text-gray-800'>Address</h5>
              <p>
                Shop No 2 4th Kumbharwada Lane 39/41 Paran Kuti Building Girgoan
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUsMain;
