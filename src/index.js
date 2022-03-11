import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Tasks from './Tasks';
import Header from './Header'
import Loader from './Loader';
import store from './store';
import { Provider } from 'react-redux';

class App extends React.Component{
  async componentDidMount(){
    const response = await axios.get('/api/tasks');
    store.dispatch({ type: 'SET_TASKS', tasks: response.data});
  }
  render(){
    return (
      <div>
        <Loader />
        <Header />
        <Tasks />
      </div>
    );
  }
}
const root = document.querySelector('#root');
ReactDOM.render(<Provider store={ store }><App /></Provider>, root);
