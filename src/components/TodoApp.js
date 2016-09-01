import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createTodo, deleteTodo, updateTodo } from '../actions/TodoActions';
import TodoForm from './TodoForm';
import TodoList from './TodoList';

class TodoApp extends Component {
  render() {
    let { todos, createTodo, deleteTodo, updateTodo } = this.props;

    return (
      <div className= "container">
        <TodoForm createTodo={createTodo} />
        <TodoList todos={todos} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return{
    todos: state.todos
  }
}

function mapDispatchToProps(dispatch) {
  return {
    createTodo(todo) {
      dispatch(createTodo(todo));
    },
    deleteTodo(_id) {
      dispatch(deleteTodo(_id));
    },
    updateTodo(_id, todo) {
      dispatch(updateTodo(_id, todo));
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoApp);


// <button className="btn btn-success"><span className="glyphicon glyphicon-sort-by-alphabet"></span></button>
