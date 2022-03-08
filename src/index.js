import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Tasks from './Tasks';
import Header from './Header'
import Loader from './Loader';

class App extends React.Component{
  constructor(){
    super();
    this.state = {
      tasks: [],
      loading: true
    };
    this.create = this.create.bind(this);
    this.destroy = this.destroy.bind(this);
  }
  async create(){
    const task = (await axios.post('/api/tasks')).data;
    this.state.tasks.push(task);
    this.setState({ tasks: this.state.tasks });
  }
  async destroy(task){
    await axios.delete(`/api/tasks/${task.id}`);
    const tasks = this.state.tasks.filter(_task => _task.id !== task.id);
    this.setState({ tasks });
  }
  async componentDidMount(){
    const response = await axios.get('/api/tasks');
    this.setState({ tasks: response.data, loading: false});
  }
  render(){
    const tasks = this.state.tasks;
    const loading = this.state.loading;
    return (
      <div>
        <Loader loading={ loading }/>
        <Header tasks={ tasks } create={ this.create } />
        <Tasks tasks={tasks} destroy={ this.destroy }/>
      </div>
    );
  }
}
const root = document.querySelector('#root');
ReactDOM.render(<App />, root);
