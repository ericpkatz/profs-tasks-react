import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import store from './store';

const destroy = async(task)=> {
  await axios.delete(`/api/tasks/${task.id}`);
  store.dispatch({ type: 'DESTROY_TASK', task });
};

class Tasks extends React.Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    store.subscribe(()=> this.setState(store.getState()));
  }
  render(){
    const tasks = this.state.tasks;
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
}

export default Tasks;
