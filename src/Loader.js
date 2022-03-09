import React from 'react';
import store from './store';


class Loader extends React.Component{
  constructor(){
    super();
    this.state = store.getState();
  }
  componentDidMount(){
    store.subscribe(()=> this.setState(store.getState()));
  }
  render(){
    const loading = this.state.loading;
    if(!loading){
      return null;
    }
    return (
      <div>
        .....loading
      </div>
    );
  }
}

export default Loader;
