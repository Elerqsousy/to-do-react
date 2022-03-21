import React from 'react';
import styles from './TodoItem.module.css';

class TodoItem extends React.Component {
  state = {
    editing: false,
  };

  handleEditing = () => {
    this.setState({
      editing: true,
    });
  };

  handleUpdatedDone = (e) => {
    e.preventDefault()
    this.setState({ editing: false });
  };

  render() {
    const { completed, id, title } = this.props.todo;
    let viewMode = {};
    let editMode = {};

    this.state.editing
      ? (viewMode.display = 'none')
      : (editMode.display = 'none');

    return (
      <li className={styles.item}>
        <div onDoubleClick={this.handleEditing} style={viewMode}>
          <input
            type='checkbox'
            className={styles.checkbox}
            checked={completed}
            onChange={() => this.props.handleChangeProps(id)}
          />
          <button onClick={() => this.props.deleteTodoProps(id)} className={styles.delete}>Delete</button>
          <span className={completed ? styles.completed : null}>{title}</span>
        </div>
        <form onSubmit={this.handleUpdatedDone} className={styles['textInput', 'formContainer']}  style={editMode}>
        <input
          type='text'
          className='input-text'
          value={title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, id);
          }}
        />
        <button className='input-submit'>Save</button>
        </form>
      </li>
    );
  }
}

export default TodoItem;
