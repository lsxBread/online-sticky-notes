import * as Options from '../../utils/actionType'

const initState = {
  notes: [],
}
let objIndex = 0

const note = (state = initState, action) => {
  switch (action.type) {
    case Options.ADD_NOTE:
      return {
        ...state,
        notes: [...state.notes, action.payload.newNote]
      }
    case Options.UPDATE_CONTENT:
      objIndex = state.notes.findIndex((obj => obj.id === action.payload.id));
      state.notes[objIndex].content = action.payload.content
      return { ...state, notes: [...state.notes] }
    case Options.UPDATE_COLOR:
      objIndex = state.notes.findIndex((obj => obj.id === action.payload.id));
      state.notes[objIndex].color = action.payload.color
      return { ...state, notes: [...state.notes] }
    case Options.REMOVE_NOTE:
      state.notes.splice(state.notes.findIndex((obj => obj.id === action.payload.id)), 1)
      return { ...state, notes: [...state.notes] }
    default:
      return state
  }
}

export default note