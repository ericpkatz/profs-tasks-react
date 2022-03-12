import { createStore } from 'redux';

const reducer = (state = { users: [], tasks: []}, action)=> {
  if(action.type === 'SET_TASKS'){
    state = {...state, tasks: action.tasks};
  }
  if(action.type === 'SET_USERS'){
    state = {...state, users: action.users };
  }
  if(action.type === 'CREATE_TASK'){
    const tasks = [...state.tasks, action.task];
    state = {...state, tasks };
  }
  if(action.type === 'DESTROY_TASK'){
    const tasks = state.tasks.filter(task => task.id !== action.task.id); 
    state = {...state, tasks };
  }
  return state;
};

const store = createStore(reducer);

export default store;
