import React from 'react';
import Create from './Create';
import connect from './connect';

const Header = ({ tasks })=> {
  return (
    <div>
      <h1>Prof Tasks ({tasks.length})</h1>
      <Create />
    </div>
  );
};


export default connect(Header);
