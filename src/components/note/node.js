import React from 'react'
import './note.css'

class Note extends React.Component {

  render() {
    return (
      <div class="wrapper">
        <aside class="note-wrap note-yellow">
          <textarea style={{overflowY:'visible'}}></textarea>
          <a href="http://youtu.be/vFYaFT0q6Uw">The Mighty Boosh</a>
        </aside>
      </div>
    )
  }
}

export default Note