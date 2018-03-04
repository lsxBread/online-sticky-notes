export class Note {
  constructor(id, content, time, color, rotate) {
    this.id = id
    this.content = content
    this.time = time
    this.color = color
    this.rotate = rotate
  }
}

export const createNote = ({id, content, color, rotate}) => {
  return new Note(
    id,
    content,
    new Date().getTime(),
    color,
    rotate
  )
}