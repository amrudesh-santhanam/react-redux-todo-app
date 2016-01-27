import React, {Component} from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkTodo, clearTodos } from './actions';

class ToDos extends Component {
  todoStyle(status){
    if (status) {
        return {color: 'grey', textDecoration: 'line-through'};
    } else {
      return {color: 'black'};
    }
  }
  showTodo(todo){
    return (
      <li key={todo.text}>
        <input type="checkbox" onClick={event => this.props.checkTodo(todo.text)} />
        <span style={this.todoStyle(todo.completed)}>{todo.text}</span>
      </li>
    );
  }
  render(){
    const total = _.size(this.props.todos);
    const rem = _.reduce(this.props.todos, (count, item) => {if (!item.completed) return count + 1; else return count;}, 0);
    return (
      <div>
        <h2>Todos</h2>
        {total!==0 ? `${rem} of ${total} tasks remaining` : `Add a task` }
        <a onClick={() => this.props.clearTodos()} style={{color: 'grey'}}>{total!==0 ? ` [Clear completed todos]` : ``}</a>
        <ul>
          {this.props.todos.map((todo) => this.showTodo(todo))}
        </ul>
      </div>
    );
  }
}

function mapStateToProps(state){
  return {todos: state.todos};
}

function mapDispatchToProps(dispatch){
  return bindActionCreators({checkTodo: checkTodo, clearTodos: clearTodos},dispatch);
}

export default connect(mapStateToProps,mapDispatchToProps)(ToDos);
