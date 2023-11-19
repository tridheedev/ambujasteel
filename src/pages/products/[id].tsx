import React from 'react';
import { useTina } from 'tinacms/dist/react';
import client from '../../../tina/__generated__/client';
import { useRouter } from 'next/router';

type Props = {};

const Product = (props: Props) => {
  console.log(props);
  // const da = useTina({ query: id, });
  console.log(props, 'props');
  return <div>{JSON.stringify(props)}</div>;
};
export async function getStaticProps<any>({ params, preview = false }) {
  console.log(params, 'params1');
  const pageResponse = await client.queries.post({ relativePath: params.id });
  return {
    props: {
      product: pageResponse,
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
  };
}

export async function getStaticPaths() {
  const postListResponse = await client.queries.postConnection();
  return {
    paths: postListResponse.data.postConnection.edges?.map((edge) => {
      console.log(edge?.node?._sys.basename);
      return { params: { id: edge?.node?._sys.basename } };
    }),
    fallback: true,
  };
}
export default Product;
