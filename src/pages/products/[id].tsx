import React from 'react';
import client from '../../../tina/__generated__/client';

type Props = {};

const Product = (props: Props) => {
  // const da = useTina({ query: id, });
  return <div>{JSON.stringify(props)}</div>;
};
export async function getStaticProps({
  params,
  preview = false,
}: {
  params: { id: string };
  preview: boolean;
}) {
  let pageResponse: any = {};
  try {
    pageResponse = await client.queries.post({ relativePath: params.id });
  } catch (error) {}

  return {
    props: {
      data: pageResponse.data,
      query: pageResponse.query,
      variables: pageResponse.variables,
    },
    // If webhooks isn't setup then attempt to re-generate in 1 minute intervals
  };
}

export async function getStaticPaths() {
  const postListResponse = await client.queries.postConnection();
  return {
    paths: postListResponse.data.postConnection.edges?.map((edge) => {
      return { params: { id: edge?.node?._sys.basename } };
    }),
    fallback: true,
  };
}
export default Product;
