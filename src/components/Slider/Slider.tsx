import { MenuNav, Overlay, Slide } from 'hero-slider';
import HeroSlider from 'hero-slider/dist/HeroSlider';
import React from 'react';
import Wrapper from './Wrapper';
import Header from '../Header';
import { MainSliderConnectionQuery } from '../../../tina/__generated__/types';

type Props = {
  images:
    | ({
        __typename: 'MainSliderGallery';
        title?: string | null | undefined;
        heading?: string | null | undefined;
        Subheading?: string | null | undefined;
        image: string;
      } | null)[]
    | null
    | undefined;
};

const bogliasco = 'https://i.imgur.com/Gu5Cznz.jpg';
const countyClare = 'https://i.imgur.com/idjXzVQ.jpg';
const craterRock = 'https://i.imgur.com/8DYumaY.jpg';
const giauPass = 'https://i.imgur.com/8IuucQZ.jpg';

const Slider = (props: Props) => {
  return (
    <>
      <HeroSlider
        height={'60vh'}
        autoplay
        controller={{
          initialSlide: 1,
          slidingDuration: 500,
          slidingDelay: 100,
          onSliding: (nextSlide) =>
            console.debug('onSliding(nextSlide): ', nextSlide),
          onBeforeSliding: (previousSlide, nextSlide) =>
            console.debug(
              'onBeforeSliding(previousSlide, nextSlide): ',
              previousSlide,
              nextSlide
            ),
          onAfterSliding: (nextSlide) =>
            console.debug('onAfterSliding(nextSlide): ', nextSlide),
        }}
      >
        {/* <Overlay>
          <Wrapper>
            <>
              <div>Basic Setup</div>
              <div>Check out the documentation for more advanced examples.</div>
            </>
          </Wrapper>
        </Overlay> */}
        {props.images &&
          props.images.length &&
          props.images?.map((image, i) => (
            <Slide
              key={i}
              //   shouldRenderMask
              label={image?.heading || ''}
              background={{
                backgroundImageSrc: image?.image,
              }}
            />
          ))}

        {/* <MenuNav /> */}
      </HeroSlider>
    </>
  );
};

export default Slider;
