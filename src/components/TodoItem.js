import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  render() {
    const { completed, id, title } = this.props.todo;
    return (
      <li className={styles.item}>
        <input
          type='checkbox'
          className={styles.checkbox}
          checked={completed}
          onChange={() => this.props.handleChangeProps(id)}
        />
        <button onClick={() => this.props.deleteTodoProps(id)}>
          Delete
        </button>
        <span className={completed ? styles.completed : null}>
        {title}
        </span>
      </li>
    );
  }
}

export default TodoItem;
