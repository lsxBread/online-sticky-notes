import React, { Component } from 'react'
import Draggable from 'react-draggable'
import './App.css';

import Note from '../components/note/Node'
import * as NoteModel from '../models/note'
import '../assets/scss/reset.css'

class App extends Component {
  constructor() {
    super()
    this.state = {
      notes: []
    }
    this.addNote = this.addNote.bind(this)
  }

  addNote() {
    console.log(this.state.notes.length)
    let colorList = ['#F7E999', '#b9dcf4', '#FFBDA3', ' #CAF4B9']
    let rotate = [-1, 1, -2, 2]
    let index = Math.floor(Math.random() * 4);
    let newNote = NoteModel.createNote(
      {
        id: this.state.notes.length,
        content: '',
        color: colorList[index],
        rotate: rotate[index]
      })
    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  render() {
    let masonryOptions = {
      transitionDuration: 0
    };
    console.log(this.state.notes)
    return (
      <div className="App">
        <header className="website-header">
          <h1 className='header-title'>Online Notes</h1>
          <div className="operation">
            <button className="addNote" onClick={this.addNote}>Add Note</button>
            <button className='login'>login</button>
          </div>
        </header>
        <main className="webiste-display">
          {
            this.state.notes.map(note => {
              return (
                <Draggable key={note.id}>
                  <div style={{display:'inline-block'}}>
                    <Note note={note} data-grid={{ x: 0, y: 0, w: 1, h: 2 }} />
                  </div>
                </Draggable>
              )
            })
          }
        </main>
      </div>
    );
  }
}

export default App;
