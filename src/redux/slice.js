import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: [],
  reducers: {
    add: (state, action) => [action.payload, ...state],
    remove: (state, action) => state.filter(el => el.id !== action.payload),
    togle: (state, action) =>
      state.map(el => {
        if (el.id === action.payload) {
          return { ...el, complited: !el.complited };
        } else {
          return el;
        }
      }),
    filter: (state, action) => (state = action.payload),
    amend: (state, action) => (state = action.payload),
  },
});

export const { add, remove, togle, filter, amend } = todoSlice.actions;
export const todoReducer = todoSlice.reducer;

const modalSlice = createSlice({
  name: 'modal',
  initialState: false,
  reducers: {
    modalShow: (state, action) => (state = action.payload),
  },
});
export const { modalShow } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;

const activIdx = createSlice({
  name: 'idx',
  initialState: null,
  reducers: {
    activ: (state, action) => (state = action.payload),
  },
});
export const { activ } = activIdx.actions;
export const activIdxReducer = activIdx.reducer;

const sortSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    sort: (_, action) => action.payload,
  },
});
export const { sort } = sortSlice.actions;
export const filterReducer = sortSlice.reducer;
