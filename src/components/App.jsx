import { nanoid } from '@reduxjs/toolkit';
import Form from './form/Form';
import { useDispatch, useSelector } from 'react-redux';
import { activ, add, amend, filter } from '../redux/slice';
import TodoList from './todo/TodoList';
import Modal from './modal/Modal';
import {
  activIdxSelector,
  allSelectors,
  modalSelector,
} from '../redux/selectors';
import { modalShow } from '../redux/slice';

export const App = () => {
  const show = useSelector(modalSelector);
  const allTodo = useSelector(allSelectors);
  const activIdx = useSelector(activIdxSelector);

  const dispath = useDispatch();

  const addTask = ({ name, textCase }) => {
    if (name === '' || textCase === '') {
      alert('Input fields are empty');
      return;
    }
    if (activIdx === null) {
      const todo = {
        id: nanoid(),
        name,
        textCase,
        complited: false,
      };
      dispath(add(todo));
      return todo;
    } else {
      updateTask(name, textCase);
    }
  };

  const updateTask = (name, textCase) => {
    const newArr = allTodo.map((el, i) => {
      if (i === activIdx) {
        return {
          ...el,
          name,
          textCase,
        };
      } else {
        return el;
      }
    });
    dispath(amend(newArr));
    dispath(activ(null));
  };
  const handleComplited = () => {
    const complited = allTodo.filter(el => el.complited === true);
    const notComplited = allTodo.filter(el => el.complited === false);
    const a = notComplited.concat(complited);
    dispath(filter(a));
  };
  return (
    <div
      style={{
        padding: '8px',
        position: 'relative',
      }}
    >
      {show && (
        <Modal className="modal">
          <Form addTask={addTask} />
        </Modal>
      )}
      <TodoList />
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          disabled={show}
          style={{
            display: 'block',
            width: '126px',
            height: '36px',
          }}
          onClick={() => dispath(modalShow(true))}
        >
          Create ToDo
        </button>
        <button
          disabled={show}
          style={{
            display: 'block',
            width: '126px',
            height: '36px',
          }}
          onClick={() => handleComplited()}
        >
          Filter Complited
        </button>
      </div>
    </div>
  );
};
