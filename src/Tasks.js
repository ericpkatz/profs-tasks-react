import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

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

export default Tasks;
