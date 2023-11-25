import Header from '@/components/Header';
import Hero from '@/components/Hero/Hero';
import Base from '@/template/Base';
import Image from 'next/image';
import Product from '@/components/Products/Product';
import ContactUs from '@/components/ContactUs/Home/ContactUs';
import Footer from '@/components/footer/Footer';
import Company from '@/components/Company/Company';
import Certificate from '@/components/certificate/Certificate';
import client from '../../tina/__generated__/client';
import { useTina } from 'tinacms/dist/react';
import {
  Exact,
  MainSliderConnectionQuery,
  MainSliderQuery,
} from '../../tina/__generated__/types';
import Slider from '@/components/Slider/Slider';
import Industry from '@/components/Industry/Industry';

type Props = {
  data: MainSliderQuery;

  variables: Exact<{
    relativePath: string;
  }>;
  query: string;
};
const Index = (props: Props) => {
  const { data } = useTina({
    data: props.data,
    query: props.query,
    variables: props.variables,
  });
  return (
    <>
      <div className='   overflow-hidden relative '>
        {props.data && props.data && (
          <Slider images={data.mainSlider.gallery} />
        )}
      </div>
      <Product />
      <Company />
      <Certificate />
      <Industry
        tag={data.mainSlider.tag}
        industries={data.mainSlider.industryUse}
      />
      <ContactUs />
      <Footer />
    </>
  );
};

export async function getStaticProps() {
  try {
    const s = await client.queries.mainSlider({
      relativePath: 'index/index.mdx',
    });
    console.log(s.query);
    return {
      props: {
        data: s.data,
        variables: s.variables,
        query: s.query,
      },
    };
  } catch (error) {
    console.error(error);
  }

  // console.log(document, 'do');
  return {
    props: {
      data: {},
      variables: { relativePath: 'index/index.mdx' },
      query: '',
    },
  };
}

// export async function getStaticPaths() {
//   const productList = await client.queries.mainSliderConnection();
//   console.log(productList);
//   return {
//     paths: [],
//     fallback: true,
//   };
// }

export default Index;
