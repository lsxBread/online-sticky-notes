export class Note {
  constructor(creator, id, content, time, color, rotate) {
    this.creator = creator
    this.id = id
    this.content = content
    this.time = time
    this.color = color
    this.rotate = rotate
  }
}

export const createNote = ({ creator, id, content, color, rotate }) => {
  return new Note(
    creator,
    id,
    content,
    new Date().getTime(),
    color,
    rotate,
  )
}