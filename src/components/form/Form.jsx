import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { activIdxSelector } from '../../redux/selectors';

const Form = ({ addTask }) => {
  const activIdx = useSelector(activIdxSelector);
  const [name, setName] = useState('');
  const [textCase, setTextCase] = useState('');

  const handleSbmit = e => {
    e.preventDefault();
    addTask({ name, textCase });
    setName('');
    setTextCase('');
  };
  const handleChange = e => {
    e.target.name === 'name'
      ? setName(e.target.value)
      : setTextCase(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSbmit}>
        <input
          onChange={handleChange}
          name="name"
          value={name}
          className="input-type"
        />
        <input
          onChange={handleChange}
          name="textCase"
          value={textCase}
          className="input-type"
        />

        <button
          style={{
            height: '40px',
            width: '110px',
            borderRadius: '6px',
            marginLeft: '4px',
            cursor: 'pointer',
          }}
          className="modal-btn"
        >
          {activIdx !== null ? 'Update Task' : 'Add Task'}
        </button>
      </form>
    </>
  );
};

export default Form;
