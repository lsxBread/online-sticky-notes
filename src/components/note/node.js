import React from 'react'
import './note.css'

class Note extends React.Component {

  constructor() {
    super()
    this.state = {
      content: ''
    }
  }

  render() {
    return (
      <div className="wrapper" data-grid={JSON.stringify(this.props.dataGrid)}>
        <aside 
          className="note-wrap"
          style={
            {
              background:this.props.note.color,
              transform: `rotate(${this.props.note.rotate}deg)`
            }
          }
        >
          <div className='note-content' contentEditable="true"></div>
          <div className='note-time'>{new Date(this.props.note.time).toLocaleString()}</div>
        </aside>
      </div>
    )
  }
}

export default Note