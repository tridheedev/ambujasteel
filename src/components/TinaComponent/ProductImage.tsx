import Image from 'next/image';
import React, { useState } from 'react';

export interface ProductImage {
  __typename: string;
  title: string;
  image: string;
  size: null;
  _tina_metadata: TinaMetadata;
  _content_source: ContentSource;
}

export interface ContentSource {
  queryId: string;
  path: Array<number | string>;
}

export interface TinaMetadata {
  id: string;
  name: string;
  fields: Fields;
  prefix: string;
}

export interface Fields {
  title: string;
  image: string;
  size: string;
}

type Props = {
  images?: ProductImage[] | any;
};

const ProductImage = ({ images }: Props) => {
  const [selected, setSelected] = useState(images[0]);
  return (
    <div className='md:w-1/2 border px-2 py-2'>
      <div className='bg-gray-600 h-96 rounded-sm shadow-lg relative'>
        <Image
          src={selected?.image}
          layout='fill'
          className='object-cover'
          alt={selected.titel}
        />
      </div>
      <div className='relative  flex h-20 w-36 my-2 gap-x-2'>
        {images?.map(
          (
            image: { image: any; title: any },
            i: React.Key | null | undefined
          ) => {
            return (
              <Image
                key={i}
                src={`${image.image}`}
                // layout='fill'
                height={80}
                width={150}
                alt={image.title ?? ''}
                className='object-cover shadow-md'
                onClick={() => setSelected(image)}
              />
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProductImage;
