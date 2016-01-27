import React, { Component } from 'react';
import ToDos from './component-todos';
import AddTodo from './component-addtodo';

class App extends Component {
  render(){
    return (
      <div>
        <ToDos />
        <AddTodo />
      </div>
    );
  }
}

export default App;
