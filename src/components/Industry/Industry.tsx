import Image from 'next/image';
import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
type Props = {
  industries:
    | ({
        __typename: 'MainSliderIndustryUse';
        industry: string;
        link: string;
        image: string;
      } | null)[]
    | null
    | undefined;
  tag?: string | null | undefined;
};

const Industry = (props: Props) => {
  return (
    <div className='max-w-screen-xl mx-auto px-2 pb-10'>
      <div className='text-center'>
        <h1 className=' app-text-color uppercase font-bold pb-2 text-3xl'>
          Industries We Serve
        </h1>
        <p className='pb-10 text-gray-700'>{props.tag}</p>
      </div>
      {props.industries?.length && (
        <Carousel
          ssr={true}
          showDots={true}
          responsive={responsive}
          className='relative '
        >
          {props.industries?.map((industry, i) => {
            return (
              <div key={i} className=' h-80 w-full px-2 mx-2'>
                <div className=' relative h-56 '>
                  <Image
                    alt={industry?.industry || ''}
                    layout='fill'
                    // width={100}

                    src={industry?.image || ''}
                    className='w-full object-cover '
                  />
                  <div className='absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-orange-700 bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-20'></div>
                </div>
                <div className='text-center app-bg-color text-white my-2 '>
                  <h4 className='text-2xl py-1'>{industry?.industry}</h4>
                </div>
              </div>
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default Industry;
