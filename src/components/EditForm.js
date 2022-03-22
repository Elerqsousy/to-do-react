import React, { Component } from 'react';
import styles from './TodoItem.module.css';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.textInput = React.createRef();  }

    componentDidMount() {
      this.textInput.current.focus();
    }

  render() {
    return (
      <form
        onSubmit={this.props.handleUpdatedDone}
        onBlur={this.props.handleUpdatedDone}
        className={styles[('textInput', 'formContainer')]}
      >
        <input 
        ref={this.textInput }
          type='text'
          className='input-text'
          value={this.props.title}
          onChange={(e) => {
            this.props.setUpdate(e.target.value, this.props.identifier);
          }}
        />
        <button className='input-submit'>Save</button>
      </form>
    );
  }
}

export default EditForm;
