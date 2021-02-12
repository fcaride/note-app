import { ADD_NOTE, SAVE_NOTE, DELETE_NOTE } from '../constants/actionTypes';

const initialState = {
  noteList: [{ text: 'Initial note', id: 'asdasd' }],
};

const createGuid = () => {
  const _p8 = (s) => {
    const p = `${Math.random().toString(16)}000000000`.substr(2, 8);
    return s ? `-${p.substr(0, 4)}-${p.substr(4, 4)}` : p;
  };
  return _p8() + _p8(true) + _p8(true) + _p8();
};

export default function loginReducer(state = initialState, action) {
  switch (action.type) {
    case SAVE_NOTE:
      return {
        ...state,
        noteList: state.noteList.map((note) => {
          if (note.id === action.id) {
            return { id: action.id, text: action.text };
          }
          return note;
        }),
      };
    case ADD_NOTE:
      return {
        ...state,
        noteList: [...state.noteList, { text: action.text, id: createGuid() }],
      };
    case DELETE_NOTE:
      return {
        ...state,
        noteList: state.noteList.filter((note) => note.id !== action.id),
      };
    default:
      return state;
  }
}
