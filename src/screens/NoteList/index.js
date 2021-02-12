import { connect } from 'react-redux';
import NoteList from './NoteList';
import { deleteNote } from '../../actions/notes';

const stateToProps = (state) => ({
  noteList: state.notes.noteList,
});

const dispatchToProps = { deleteNote };

export default connect(stateToProps, dispatchToProps)(NoteList);
