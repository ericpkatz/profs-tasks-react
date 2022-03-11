import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import { connect } from 'react-redux';

const Tasks = ({ tasks, destroy })=> { 
  return (
    <ul>
      {
        tasks.map( task => {
          return (
            <li key={ task.id }>
              { task.name }
              <button onClick={()=> destroy(task)}>x</button>
            </li>
          );
        })
      }
    </ul>
  );
}

const mapState = (state)=> {
  return state;
};

const mapDispatch = (dispatch)=> {
  return {
    destroy: async(task)=> {
      await axios.delete(`/api/tasks/${task.id}`);
      dispatch({ type: 'DESTROY_TASK', task });
    }
  };
};
export default connect(mapState, mapDispatch)(Tasks);
