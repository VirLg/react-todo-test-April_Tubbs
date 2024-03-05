import React from 'react';

import { useDispatch } from 'react-redux';
import { modalShow } from '../../redux/slice';

const Modal = ({ children }) => {
  const dispath = useDispatch();
  return (
    <div className="">
      <div className="modal-body modal">
        {children}

        <button
          style={{
            padding: '8px',
            position: 'absolute',
            top: '300px',
            right: '300px',
            border: 'none',
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            cursor: 'pointer',
          }}
          type="button"
          className="btn btn-secondary modal-btn "
          data-bs-dismiss="modal"
          onClick={() => dispath(modalShow(false))}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default Modal;
