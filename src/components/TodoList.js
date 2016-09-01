import React, { Component } from 'react';
import { Modal, Button } from 'react-bootstrap';


export default class TodoList extends Component {
  constructor(){
    super();

    this.state = {
      editTodo: '',
      _id:'',
      showModal: false
    }

    this._deleteTodo = this._deleteTodo.bind(this);
    this._editTodo = this._editTodo.bind(this);
    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.cancelEdit = this.cancelEdit.bind(this);
  }

  closeModal(){
    this.setState({ showModal: false})
  }

  openModal(){
    this.setState({showModal: true})
  }

  _deleteTodo(_id){
    this.props.deleteTodo(_id);
  }

  _editTodo(objTodo){
    this.openModal();
    this.setState({editTodo: objTodo.todo, _id: objTodo._id});
  }

  _saveEdit(){
    let todo = this.state.editTodo;
    this.props.updateTodo(this.state._id, todo);
    this.setState({editTodo: ''});
    this.closeModal();
  }

  cancelEdit(){
    this.setState({editTodo: ''});
    this.closeModal();
  }

  render() {
    let { todos } = this.props;
    let Todos = todos.map(objTodo => {
      return (
        <li key={objTodo._id}>
          {objTodo.todo}
          <button className="btn btn-danger btn-xs" onClick={() => this._deleteTodo(objTodo._id)}>
            <span className="glyphicon glyphicon-trash"></span>
          </button>
          <button className="btn btn-warning btn-xs" onClick={() => this._editTodo(objTodo)}>
            <span className="glyphicon glyphicon-pencil"></span>
          </button>
        </li>
      )
    })

    return (
      <div>
        <ul>
          {Todos}
        </ul>
        <Modal show={this.state.showModal} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Edit</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input className="form-control" type="text" value={this.state.editTodo} onChange={e => {this.setState({editTodo: e.target.value}) }}/>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn btn-primary" onClick={() => this._saveEdit()}>Save</Button>
          <Button onClick={this.cancelEdit}>Close</Button>
        </Modal.Footer>
      </Modal>
      </div>
    )
  }
}
