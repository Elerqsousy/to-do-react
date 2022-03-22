import React from 'react';
import EditForm from './EditForm';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = (e) => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (e) => {
    e.preventDefault();
    this.setState({ editing: false });
  };

  render() {
    const { completed, id, title } = this.props.todo;
    return (
      <li className={styles.item}>
        {this.state.editing ? (
          <EditForm
            handleUpdatedDone={this.handleUpdatedDone}
            title={title}
            setUpdate={this.props.setUpdate}
            identifier={id}
          />
        ) : (
          <div onDoubleClick={this.handleEditing}>
          <input
            type='checkbox'
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button
            onClick={() => this.props.deleteTodoProps(id)}
            className={styles.delete}
          >
            Delete
          </button>
          <span className={completed ? styles.completed : null}>{title}</span>
        </div>
        )}
      </li>
    );
  }
}

export default TodoItem;
