import React, { useState } from 'react';

const InputToDo = (props) => {
  const [inputText, setInputText] = useState({
    title: '',
  });

  const onChange = (e) => {
    setInputText({
      ...inputText,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputText.title.trim()) {
      props.addTodoProps(inputText.title);
      setInputText({
        title: '',
      });
    } else {
      alert('Please provide a valid item');
    }
  };

  return (
    <form onSubmit={handleSubmit} className='form-container'>
      <input
        type='text'
        className='input-text'
        placeholder='Add Todo...'
        value={inputText.title}
        name='title'
        onChange={onChange}
      />
      <button className='input-submit'>Submit</button>
    </form>
  );
};

export default InputToDo;
