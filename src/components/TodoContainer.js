import React from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import InputToDo from './InputTodo';
import TodosList from './TodosList';

class TodoContainer extends React.Component {
  state = {
    todos: [],
  };

  componentDidMount() {
    const tempData = localStorage.getItem("todos")
     if (tempData) {
         this.setState({
             todos: JSON.parse(tempData)
         })
     }
  }

  componentDidUpdate(prevProps, prevState) {
      if (prevState !== this.state.todos) {
          const tempData = JSON.stringify(this.state.todos)
          localStorage.setItem("todos", tempData)
      }
  }

  componentWillUnmount() {
    console.log("Cleaning up...")
  }

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
      todos: [...this.state.todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
      this.setState({
          todos: this.state.todos.map(todo => {
              if (todo.id === id) {
                  todo.title = updatedTitle
              }
              return todo
          })
      })
  }

  render() {
    return (
      <div className='container'>
        <div className='inner'>
          <Header />
          <InputToDo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}

export default TodoContainer;
