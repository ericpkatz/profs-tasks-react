import React from 'react';
import { connect } from 'react-redux';

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

export default connect(state => state)(Loader);
