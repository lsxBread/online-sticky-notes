import * as Options from '../utils/actionType'
import * as NoteModel from '../models/note'

const colorList = ['#F7E999', '#b9dcf4', '#FFBDA3', '#CAF4B9']
const rotate = [-1, 1, -2, 2]
let nextNote = 0

export const addNote = () => {
  let index = Math.floor(Math.random() * 4)
  let newNote = NoteModel.createNote(
    {
      id: nextNote++,
      content: '',
      color: colorList[index],
      rotate: rotate[index],
    })
  return {
    type: Options.ADD_NOTE,
    payload: {newNote}
  }
}

export const changeContent = (id, content) => {
  return {
    type: Options.UPDATE_CONTENT,
    payload: {id, content}
  }
}

export const changeColor = (id, color) => {
  return {
    type: Options.UPDATE_COLOR,
    payload: {id, color}
  }
}

export const deleteNote = (id) => {
  return {
    type: Options.REMOVE_NOTE,
    payload: {id}
  }
}