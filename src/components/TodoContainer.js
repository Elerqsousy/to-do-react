import React from 'react';
import { v4 as uuid } from "uuid";
import Header from './Header';
import InputToDo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  state = {
    todos: [
      {
        id: uuid(),
        title: 'Setup development environment',
        completed: true,
      },
      {
        id: uuid(),
        title: 'Develop website and add content',
        completed: false,
      },
      {
        id: uuid(),
        title: 'Deploy to live server',
        completed: false,
      },
    ],
  };

  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: prevState.todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [...this.state.todos.filter((todo) => todo.id !== id)],
    });
  };

  addTodoItem = (title) => {
    const newTodo = {
        id: uuid(),
        title: title,
        completed: false,
    };
    this.setState({
        todos: [...this.state.todos, newTodo]
    })
  };

  render() {
    return (
      <div>
        <Header />
        <InputToDo addTodoProps={this.addTodoItem} />
        <TodosList
          todos={this.state.todos}
          handleChangeProps={this.handleChange}
          deleteTodoProps={this.delTodo}
        />
      </div>
    );
  }
}

export default TodoContainer;
