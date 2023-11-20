import React from 'react';
import { Product, ProductProductSpec } from '../../../tina/__generated__/types';

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
  specs?: ProductSpec[];
};

const ProductSpecification = (props: Props) => {
  return (
    <table className=' table-auto w-full border border-slate-400 ...'>
      <thead>
        <tr>
          <th className='border border-slate-300 ...'>State</th>
          <th className='border border-slate-300 ...'>City</th>
        </tr>
      </thead>
      <tbody>
        {props.specs?.map((spec, i) => {
          return (
            <tr key={i}>
              <td className='border border-slate-300 ...'>{spec?.specName}</td>
              <td className='border border-slate-300 ...'>{spec?.specValue}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default ProductSpecification;
