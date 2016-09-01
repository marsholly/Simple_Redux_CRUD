import React, { Component } from 'react';
import uuid from 'uuid';

export default class TodoForm extends Component {
  constructor() {
    super();
    this.state = {
      todo: '',
      _id: null
    }

    this._onInputChange = this._onInputChange.bind(this);
    this._onSubmit = this._onSubmit.bind(this);
  }

  _onInputChange(e) {
    let todo = e.target.value;
    this.setState({ todo });
  }

  _onSubmit(e) {
    e.preventDefault();
    let todoNew = {
      todo: this.state.todo,
      _id: uuid()
    }
    this.props.createTodo(todoNew);
    this.setState({todo: ''});
  }

  render() {
    let todo = this.state.todo;
    return (
        <div className="input-group">
          <form onSubmit={this._onSubmit}>
            <input id="btn-input" type="text" className="form-control input-md" value={this.state.todo} onChange={this._onInputChange}/>
            <span className="input-group-btn">
              <button className="btn btn-primary btn-md" id="btn-chat">Submit</button>
            </span>
          </form>
        </div>
    )
  }
}
