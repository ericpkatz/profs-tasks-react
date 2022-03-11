import React from 'react';
import Create from './Create';
import { connect }  from 'react-redux';

const Header = ({ tasks })=> {
  return (
    <div>
      <h1>Prof Tasks ({tasks.length})</h1>
      <Create />
    </div>
  );
};

const mapStateToProps = function(state){
  return state;
};
export default connect(state => state)(Header);
