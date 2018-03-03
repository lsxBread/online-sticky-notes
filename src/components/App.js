import React, { Component } from 'react';
import './App.css';

import Note from '../components/note/node'
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
    let newNote = NoteModel.createNote({id:this.state.notes.length, content:''})
    this.setState({
      notes: [...this.state.notes, newNote]
    })
  }

  render() {
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
              return <Note data={note} key={note.id}/>
            })
          }
        </main>
      </div>
    );
  }
}

export default App;
