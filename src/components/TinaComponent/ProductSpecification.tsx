import React from 'react';
import { Product, ProductProductSpec } from '../../../tina/__generated__/types';
import PageHeading from '../icons/PageHeading';

export interface ProductSpec {
  __typename: string;
  specName: string;
  specValue: string;
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
  specName: string;
  specValue: string;
}

type Props = {
  specs?:
    | ({
        __typename: 'ProductProductSpecSpec';
        specName?: string | null | undefined;
        specValue?: string | null | undefined;
      } | null)[]
    | null
    | undefined;
};

const ProductSpecification = (props: Props) => {
  return (
    <div>
      <h4 className='text-gray-800 text-xl font-medium pb-3 flex items-center'>
        <span className='pr-2 app-text-color '>
          <PageHeading />
        </span>
        Product Specifications
      </h4>
      <table className=' table-auto w-full  border-slate-400 ...'>
        <tbody className='table-auto'>
          {props.specs?.map((spec, i) => {
            return (
              <div key={i} className='py-2 flex justify-between'>
                <div className='w-full text-sm font-medium flex items-center'>
                  <span>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='#e67817'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='#fff'
                      className='w-6 h-6 '
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z'
                      />
                    </svg>
                  </span>
                  <p className='pl-2'>{spec?.specName}</p>
                </div>
                <div className='w-full text-sm'>{spec?.specValue}</div>
              </div>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default ProductSpecification;
