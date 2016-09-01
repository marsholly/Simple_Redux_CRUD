import React, { Component } from 'react';

import TodoApp from './TodoApp';

export default class App extends Component {
  render() {
    return (
      <div>
        <h1 className="text-center">Simple Redux CRUD</h1>
        <TodoApp />
      </div>
    )
  }
}
