import React from 'react';
import Create from './Create';

const Header = ({ tasks, create })=> {
    return (
      <div>
        <h1>Prof Tasks ({tasks.length})</h1>
        <Create create={ create } />
      </div>
    );
}

export default Header;
