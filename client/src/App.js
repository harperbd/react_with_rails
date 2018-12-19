import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Container } from 'semantic-ui-react';

class App extends Component {
  state = { todos: [] };

  componentDidMount() {

  }

  addItem = (name) => {

  };

  updateTodo = (id) => {

  };

  deleteTodo = (id) => {

  };

  render() {
    return (
      <Container>
        <TodoForm addItem={this.addItem} />
        <br />
        <br />
        <TodoList />
      </Container>
    );
  }
}

export default App;
