import React, { Component } from 'react';
import uuid from 'uuid';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

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
      <form onSubmit={this._onSubmit}>
        <TextField floatingLabelText="Input Text" floatingLabelFixed={false} value={this.state.todo} onChange={this._onInputChange}/>
        <RaisedButton label="Primary" primary={true} style={style} type="submit"/>
      </form>
    )
  }
}
