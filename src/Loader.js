import React from 'react';
import connect from './connect';

const Loader = ({ loading })=> {
  if(!loading){
    return null;
  }
  return (
    <div>
      .....loading
    </div>
  );
}

export default connect(Loader);
