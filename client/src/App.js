import React, { Component } from 'react';
import './App.css';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { Container } from 'semantic-ui-react';
import axios from 'axios';

class App extends Component {
  state = { todos: [] };

  componentDidMount() {
    axios.get('/api/items')
        .then(res => {
          this.setState({ todos: res.data })
        })
        .catch(err => {
          console.log(err);
        })
  }

  addItem = (name) => {
    axios.post('/api/items', {name})
        .then( res => {
          const { todos } = this.state;
          this.setState({ todos: [...todos, res.data]})
        })
        .catch(err => {
          console.log(err);
        })
  };

  updateTodo = (id) => {
    axios.put(`/api/items/${id}`)
        .then(res => {
          const todos = this.state.todos.map( t => {
            if (id === t.id) {
              return res.data;
            } else {
              return t;
            }
          });
          this.setState({todos})
        })
        .catch(err => {
          console.log(err);
        })
  };

  deleteTodo = (id) => {
    axios.delete(`/api/items/${id}`)
        .then( res => {
          const { todos } = this.state;
          this.setState({ todos: todos.filter(t => t.id !== id)})
        })
        .catch(err => {
          console.log(err);
        })
  };

  render() {
    return (
      <Container>
        <TodoForm addItem={this.addItem} />
        <br />
        <br />
        <TodoList update={this.updateTodo} delete={this.deleteTodo} todos={this.state.todos} />
      </Container>
    );
  }
}

export default App;
