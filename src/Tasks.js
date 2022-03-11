import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store from './store';
import connect from './connect';

const destroy = async(task)=> {
  await axios.delete(`/api/tasks/${task.id}`);
  store.dispatch({ type: 'DESTROY_TASK', task });
};

const Tasks = ({ tasks })=> { 
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

export default connect(Tasks);
