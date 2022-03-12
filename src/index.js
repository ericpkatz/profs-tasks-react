import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Tasks from './Tasks';
import Header from './Header'
import Users from './Users';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component{
  async componentDidMount(){
    let response = await axios.get('/api/tasks');
    store.dispatch({ type: 'SET_TASKS', tasks: response.data});
    response = await axios.get('/api/users');
    store.dispatch({ type: 'SET_USERS', users: response.data});
  }
  render(){
    return (
      <div>
        <Header />
        <Users />
        <Tasks />
      </div>
    );
  }
}
const root = document.querySelector('#root');
ReactDOM.render(<Provider store={ store }><App /></Provider>, root);
