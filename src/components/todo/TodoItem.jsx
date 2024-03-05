import React from 'react';
import { TodoDiv, Button } from './TodoItem.styled';

const TodoItem = ({ el, removeTodo, handleUpdate }) => {
  const { id, name, textCase, complited } = el;

  return (
    <TodoDiv className="todo">
      <h4>name: {name}</h4>
      <h3
        style={{
          marginLeft: 'auto',
          marginRight: '150px',
          paddingTop: '0',
          marginTop: '6px',
        }}
      >
        task: {textCase}
      </h3>
      <input
        style={{
          marginRight: '18px',
        }}
        type="checkbox"
        onChange={() => handleUpdate(id)}
        checked={complited}
      />
      <Button
        type="button"
        onClick={() => removeTodo(id)}
        style={{ height: '26px', width: '56px' }}
      >
        Delete
      </Button>
    </TodoDiv>
  );
};

export default TodoItem;
