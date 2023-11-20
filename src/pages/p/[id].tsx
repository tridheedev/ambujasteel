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
  console.log(a);
  if (a.data && a.data.product) {
    return (
      <div>
        <div className='border-b text-orange-400'>
          <Header />
        </div>
        <div className='max-w-screen-xl mx-auto mt-10'>
          <div className='flex justify-between '>
            <ProductImage images={a.data.product.gallery} />
            <ProductCard
              title={a.data.product.title}
              url=''
              shortDisc={a.data.product.shortDisc}
              tags={a.data.product.tags}
            />
          </div>
          <TinaMarkdown
            components={{ TinaTextView }}
            content={a.data.product.subHeading}
          />
        </div>

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
    console.log(pageResponse, 'repo');
  } catch (error) {
    console.log(error);
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
