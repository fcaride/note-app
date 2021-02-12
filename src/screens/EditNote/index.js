import { connect } from 'react-redux';
import EditNote from './EditNote';
import { addNote, saveNote } from '../../actions/notes';

const stateToProps = () => ({});

const dispatchToProps = { addNote, saveNote };

export default connect(stateToProps, dispatchToProps)(EditNote);
