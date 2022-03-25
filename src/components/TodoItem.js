import React, { useEffect, useState } from 'react';
import EditForm from './EditForm';
import styles from './TodoItem.module.css';
import { FaTrash } from 'react-icons/fa';

const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  useEffect(() => {
    return () => {};
  }, []);

  const handleEditing = (e) => {
    setEditing(true);
  };

  const handleUpdatedDone = (e) => {
    e.preventDefault();
    setEditing(false);
  };

  const { completed, id, title } = props.todo;
  return (
    <li className={styles.item}>
      {editing ? (
        <EditForm
          handleUpdatedDone={handleUpdatedDone}
          title={title}
          setUpdate={props.setUpdate}
          identifier={id}
        />
      ) : (
        <div onDoubleClick={handleEditing}>
          <input
            type='checkbox'
            className={styles.checkbox}
            checked={completed}
            onChange={() => props.handleChangeProps(id)}
          />
          <button
            onClick={() => props.deleteTodoProps(id)}
            className={styles.delete}
          >
            <FaTrash />
          </button>
          <span className={completed ? styles.completed : null}>{title}</span>
        </div>
      )}
    </li>
  );
};

export default TodoItem;
