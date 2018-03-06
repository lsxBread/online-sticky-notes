import * as Options from '../../utils/actionType'
import localStorage from '../../utils/storage'

const initState = {
  notes: localStorage.getNotes()
}

const note = (state = initState, action) => {
  switch (action.type) {
    case Options.ADD_NOTE:
      let newNotes = [...state.notes, action.payload.newNote]
      localStorage.setNotes(newNotes)
      return {
        ...state,
        notes: newNotes
      }
    case Options.UPDATE_CONTENT:
      let newNotesWithContent = state.notes.map(obj => {
        if (obj.id === action.payload.id) {
            return {...obj, content: action.payload.content}
        }
        return obj
      })
      localStorage.setNotes(newNotesWithContent)
      return { ...state, notes: newNotesWithContent }
    case Options.UPDATE_COLOR:
      let newNotesWithColor = state.notes.map(obj => {
        if (obj.id === action.payload.id) {
          return {...obj, color: action.payload.color}
        }
        return obj
      })
      localStorage.setNotes(newNotesWithColor)
      return { ...state, notes: newNotesWithColor }
    case Options.REMOVE_NOTE:
      let remainedNotes = state.notes.filter(note => note.id !== action.payload.id)
      localStorage.setNotes(remainedNotes)
      return { ...state, notes: remainedNotes }
    case Options.REMOVE_ALL:
      localStorage.setNotes(
        localStorage.getNotes().filter(note=>note.creator!==action.payload.username)
      )
      return {
        ...state,
        notes: localStorage.getNotes()
      }
    default:
      return state
  }
}

export default note