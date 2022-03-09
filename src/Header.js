import React from 'react';
import Create from './Create';
import store from './store';


class Header extends React.Component{
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
      <div>
        <h1>Prof Tasks ({tasks.length})</h1>
        <Create />
      </div>
    );
  }
}

export default Header;
