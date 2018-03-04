import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addNote } from '../actions/index'
import VisibleNotes from '../containers/VisibleNotes'
import '../assets/scss/reset.css'
import { Button } from 'antd';
import './App.css';

let App = ({ dispatch }) => {
  return (
    <div className="App">
      <header className="website-header">
        <h1 className='header-title'>Online Notes</h1>
        <div className="operation">
          <Button icon='file-add' className="addNote" onClick={() => dispatch(addNote())} ghost='true'>Add Note</Button>
          <Button type='primary' className='login' ghost='true'>login</Button>
        </div>
      </header>
      <main className="webiste-display">
          <VisibleNotes />
      </main>
     
    </div>
  )
}

App = connect()(App)

export default App;
