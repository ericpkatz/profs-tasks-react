import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';


const Create = ({ create })=> {
  return (
    <button onClick={ create }>Create A Task</button>
  );
}

const mapDispatch = (dispatch)=> {
  return {
    create: async()=> {
      const response = await axios.post('/api/tasks');
      dispatch({ type: 'CREATE_TASK', task: response.data });
    }
  };
};

export default connect(null, mapDispatch)(Create);
