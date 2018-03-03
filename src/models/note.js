export class Note {
  constructor(id, content, time) {
    this.id = id
    this.content = content
    this.time = time
  }
}

export const createNote = ({id, content}) => {
  return new Note(
    id,
    content,
    new Date().getTime()
  )
}