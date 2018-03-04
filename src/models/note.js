export class Note {
  constructor(id, content, time, color, rotate, deltaXY) {
    this.id = id
    this.content = content
    this.time = time
    this.color = color
    this.rotate = rotate
    this.deltaXY = deltaXY
  }
}

export const createNote = ({id, content, color, rotate, deltaXY={x:0, y:0}}) => {
  return new Note(
    id,
    content,
    new Date().getTime(),
    color,
    rotate,
    deltaXY
  )
}