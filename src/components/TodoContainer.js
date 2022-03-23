import React, { useEffect, useState } from 'react';
import { v4 as uuid } from 'uuid';
import Header from './Header';
import InputToDo from './InputTodo';
import TodosList from './TodosList';

const TodoContainer = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const tempData = localStorage.getItem('todos');
    if (tempData) {
      setTodos(JSON.parse(tempData));
    }
  }, []);

  useEffect(() => {
    const tempData = JSON.stringify(todos);
    localStorage.setItem('todos', tempData);
  }, [todos]);

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuid(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  return (
    <div className='container'>
      <div className='inner'>
        <Header />
        <InputToDo addTodoProps={addTodoItem} />
        <TodosList
          todos={todos}
          handleChangeProps={handleChange}
          deleteTodoProps={delTodo}
          setUpdate={setUpdate}
        />
      </div>
    </div>
  );
};

export default TodoContainer;
