import React from 'react';
import TodoItem from './TodoItem';
import { useDispatch, useSelector } from 'react-redux';
import { allSelectors } from '../../redux/selectors';
import { remove, togle, activ } from '../../redux/slice';

const TodoList = () => {
  const allTodo = useSelector(allSelectors);

  const dispath = useDispatch();
  const handleUpdate = id => {
    dispath(togle(id));
  };

  return (
    <>
      {allTodo.map((el, idx) => (
        <div
          key={el.id}
          className="todo"
          style={{
            width: '800px',
            marginLeft: 'auto',
            marginRight: 'auto',
          }}
        >
          <TodoItem
            el={el}
            idx={idx}
            removeTodo={() => dispath(remove(el.id))}
            checked={el.complited}
            handleUpdate={handleUpdate}
          />
        </div>
      ))}
    </>
  );
};

export default TodoList;
