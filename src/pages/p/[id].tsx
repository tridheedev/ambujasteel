import React from 'react';
import { useTina } from 'tinacms/dist/react';
import client from '../../../tina/__generated__/client';
import {
  ProductQuery,
  ProductQueryVariables,
} from '../../../tina/__generated__/types';
import { TinaMarkdown } from 'tinacms/dist/rich-text';

import TinaTextView from '@/components/TinaComponent//RichTextView';
// import ProductSpecification from '@/components/TinaComponent/ProductSpecification';
import Header from '@/components/Header';
// import Image from 'next/image';
import ProductCard from '@/components/TinaComponent/ProductCard';
import ProductImage from '@/components/TinaComponent/ProductImage';
import ProductSpecification from '@/components/TinaComponent/ProductSpecification';
import PageHeading from '@/components/icons/PageHeading';
import ProductCardMobile from '@/components/TinaComponent/ProductCardMobile';
import MechanicalComposition from '@/components/TinaComponent/MechanicalComposition';
import ChemicalComposition from '@/components/TinaComponent/ChemicalComposition';
import ProductApplication from '@/components/TinaComponent/ProductApplication';
import ProductContact from '@/components/ContactUs/ProductContact';
import ProductAction from '@/components/TinaComponent/ProductAction';
import Footer from '@/components/footer/Footer';

type Products = {
  data: ProductQuery;
  errors?: {
    message: string;
    locations: { line: number; column: number }[];
    path: string[];
  }[];
  variables: ProductQueryVariables;
  query: string;
};
type Props = {} & Products;

const Product = ({ data, query, variables }: Props) => {
  const a = useTina({ data, query, variables });
  if (a.data && a.data.product) {
    return (
      <div>
        <div className='border-b  text-orange-400 '>
          <Header />
        </div>
        <div className='max-w-screen-xl mx-auto mt-10'>
          <ProductCardMobile
            title={a.data.product.title}
            type={a.data.product.type}
          />
          <div className='flex justify-between flex-col md:flex-row  '>
            {a.data.product.gallery?.length && (
              <ProductImage images={a.data.product.gallery} />
            )}
            <ProductCard
              title={a.data.product.title}
              star={a.data.product.star}
              url=''
              type={a.data.product.type}
              shortDisc={a.data.product.shortDisc}
              tags={a.data.product.tags}
            />
          </div>
          <div className='mx-2 md:hidden'>
            <ProductAction />
          </div>
          <div className='mt-10 flex gap-x-4 mx-2 flex-col md:flex-row'>
            <div className='md:w-3/4'>
              <h4 className='text-gray-800 text-xl font-medium pb-3 flex items-center'>
                <span className='pr-2 app-text-color'>
                  <PageHeading />
                </span>
                Product Description
              </h4>
              <div className='pt-2'>
                <TinaMarkdown
                  // components={{ TinaTextView }}
                  content={a.data.product.subHeading}
                />
              </div>

              <div className='pt-2'>
                <TinaMarkdown
                  // components={{ TinaTextView }}
                  content={a.data.product.productDetails}
                />
              </div>

              <div className='pt-5'>
                <ProductSpecification specs={a.data.product.productSpec} />
              </div>
              <div className='pt-5'>
                <MechanicalComposition comp={a.data.product.mechanicalCompo} />
              </div>
              <div className='pt-5'>
                <ChemicalComposition comp={a.data.product.chemicalCompo} />
              </div>
              <div className='pt-5'>
                <ProductApplication applications={a.data.product.application} />
              </div>
            </div>
            <div className='border  md:w-1/4 app-bg-secondary static md:h-[700px] mt-10 text-white rounded-sm '>
              <ProductContact />
            </div>
          </div>
        </div>
        <Footer />

        {/* <ProductSpecification specs={a.data.product.productSpec} /> */}
        {/* {JSON.stringify(a.data.product.productSpec)} */}
      </div>
    );
  }
  return <div>Loading...</div>;
};
export async function getStaticProps({
  params,
  preview = false,
}: {
  params: { id: string };
  preview: boolean;
}) {
  let pageResponse = {};
  try {
    pageResponse = await client.queries.product({
      relativePath: `${params.id}.mdx`,
    });
  } catch (error) {
    console.error(error);
  }

  return {
    props: {
      ...pageResponse,
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
  };
}

export async function getStaticPaths() {
  const productList = await client.queries.productConnection();
  return {
    paths: productList.data.productConnection.edges?.map((edge) => {
      return { params: { id: edge?.node?._sys.basename } };
    }),
    fallback: true,
  };
}
export default Product;
