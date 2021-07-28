import React from 'react';
import Input from './Input';
import List from './List';
import './index.css';

class App extends React.Component{

  state = { 
    taskData:[],
  };

  taskHandler = (value)=>{
    let tempArr = this.state.taskData
    tempArr.push(value)
    this.setState({taskData:tempArr})
  }

  removeTask = (task)=>{
    let filteredArr = this.state.taskData.filter((el)=>{
      return el !== task;
    });
    this.setState({taskData: filteredArr});
  };

  render(){
  return (
    <>
    <div className="main-div">
    <h1 className="head"> ToDo Application Using REACT </h1>
    {/* <h2 className="aa"> Save your Important tasks here :- </h2> */}
    <Input taskHandlerFunction = {this.taskHandler}/>
    <List removeTaskHandler={this.removeTask} tasks = {this.state.taskData}/>
    </div>
    </>
  );
}
}
export default App;