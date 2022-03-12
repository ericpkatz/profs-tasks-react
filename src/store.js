import { createStore, combineReducers } from 'redux';

const tasksReducer = (state = [], action)=> {
  if(action.type === 'SET_TASKS'){
    return action.tasks;
  }
  if(action.type === 'CREATE_TASK'){
    return [...state, action.task];
  }
  if(action.type === 'DESTROY_TASK'){
    return state.filter(task => task.id !== action.task.id); 
  }
  return state;
};

const usersReducer = (state = [], action)=> {
  if(action.type === 'SET_USERS'){
    return action.users;
  }
  return state;
};

const reducer = combineReducers({
  tasks: tasksReducer,
  users: usersReducer
});

/*
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
*/

const store = createStore(reducer);

export default store;
