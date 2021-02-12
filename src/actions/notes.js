import { SAVE_NOTE, ADD_NOTE, DELETE_NOTE } from '../constants/actionTypes';

export const saveNote = (text, id) => ({ type: SAVE_NOTE, text, id });
export const addNote = (text) => ({ type: ADD_NOTE, text });
export const deleteNote = (id) => ({ type: DELETE_NOTE, id });
