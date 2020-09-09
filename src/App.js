import React, { Component } from 'react';
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'
import 'bootstrap/dist/css/bootstrap.min.css';
import {v1 as uuid} from "uuid";

class App extends Component {
  state={
    items: [],
    id: uuid(),
    item: ''
  }
  
  handleChange = (e) => { 
    this.setState({
      item: e.target.value
    })
  };

  handleSubmit = (e) => {
    e.preventDefault();
   
    if  (this.state.item === '') {
        return;
     } 
      const newItem = {
        id: this.state.id,
        title: this.state.item
     }
   
    const updatedItems = [...this.state.items,newItem]

    this.setState({
      items: updatedItems,
      item:"",
      id: uuid()
    })
  };


  render() {
  return (
    
    <div className="container">
      <div className="row">
        <div className="col-11 mx-auto col-md-9 mt-5">
          <h3 className="text-capitalize text-center">Todo List</h3>
        
        <TodoInput item={this.state.item}
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
           />

        <TodoList items={this.state.items}  />
        </div>
      </div>
    </div>
  );
  }
}

export default App;
