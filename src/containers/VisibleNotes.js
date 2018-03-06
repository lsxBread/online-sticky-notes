import { connect } from 'react-redux'
import { changeContent, deleteNote, changeColor } from '../actions/index'
import NoteList from '../components/note-list/NoteList'

const mapStateToProps = state => {
  return {
    notes: state.note.notes,
    user: state.user
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onContentChange: (id, content) => {
      dispatch(changeContent(id, content))
    },
    deleteNote: (id) => {
      dispatch(deleteNote(id))
    },
    changeColor: (id, color) => {
      dispatch(changeColor(id, color))
    }
  }
}

const VisibleNotes = connect(mapStateToProps, mapDispatchToProps)(NoteList)

export default VisibleNotes