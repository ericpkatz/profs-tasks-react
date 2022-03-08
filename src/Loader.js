import React from 'react';
import Create from './Create';

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

export default Loader;
