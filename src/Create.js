import React from 'react';
import axios from 'axios';
import store from './store';


const create = async()=> {
  const response = await axios.post('/api/tasks');
  store.dispatch({ type: 'CREATE_TASK', task: response.data });

};

const Create = ()=> {
  return (
    <button onClick={ create }>Create</button>
  );
}

export default Create;
