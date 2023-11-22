import React from 'react';

type Props = {
  children: React.ReactElement;
};

function Wrapper(props: Props) {
  return <div>{props.children}</div>;
}

export default Wrapper;
