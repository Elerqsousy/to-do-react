import React, { useEffect, useRef } from 'react';
import styles from './TodoItem.module.css';

const EditForm = (props) => {
  const textInput = useRef(null);

  useEffect(() => {
    return () => {};
  }, []);

  useEffect(() => {
    textInput.current.focus();
  }, []);

  return (
    <form
      onSubmit={props.handleUpdatedDone}
      onBlur={props.handleUpdatedDone}
      className={styles[('textInput', 'formContainer')]}
    >
      <input
        ref={textInput}
        type='text'
        className='input-text'
        value={props.title}
        onChange={(e) => {
          props.setUpdate(e.target.value, props.identifier);
        }}
      />
      <button className='input-submit'>Save</button>
    </form>
  );
};

export default EditForm;
