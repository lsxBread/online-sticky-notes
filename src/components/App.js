import React from 'react'
import { connect } from 'react-redux'
import { Button, Popconfirm, message, Avatar } from 'antd';

import { addNote, removeAll, showAuthModal, checkUserAuth, triggerLogout } from '../actions/index'
import VisibleAuthModal from '../containers/VisibleAuthModal'
import VisibleNotes from '../containers/VisibleNotes'
import '../assets/scss/reset.css'
import './App.css';

class App extends React.Component {
  constructor() {
    super()
    this.handleAddNote = this.handleAddNote.bind(this)
    this.clearAll = this.clearAll.bind(this)
    this.handleLogin = this.handleLogin.bind(this)
    this.handleLogout = this.handleLogout.bind(this)
  }

  componentDidMount() {
    this.props.dispatch(checkUserAuth())
  }

  handleAddNote() {
    this.props.user.auth ?
      this.props.dispatch(addNote(this.props.user.username)) :
      message.warning('Please login first !')
  }

  handleLogin() {
    this.props.dispatch(showAuthModal())
  }

  handleLogout() {
    this.props.dispatch(triggerLogout())
  }

  clearAll() {
    this.props.user.auth ?
      this.props.dispatch(removeAll(this.props.user.username)) :
      message.warning('Please login first !')
  }

  render() {
    return (
      <div className="App">
        <header className="website-header">
          <div className="left">
            <h1 className='header-title'>Online Notes</h1>
            <Popconfirm
              title="Are you sure delete all notes?"
              onConfirm={this.clearAll}
              okText="Yes"
              cancelText="No"
            >
              <Button
                className='clearAll'
                type="danger"
                ghost
              >
                Remove All
            </Button>
            </Popconfirm>
          </div>

          <div className="right">
            <Button
              icon='file-add'
              type='primary'
              className="addNote"
              onClick={this.handleAddNote}
              ghost='true'
            >
              Add Note
            </Button>
            {this.props.user.auth
              ?
              <Popconfirm
                title="You want to logout?"
                onConfirm={this.handleLogout}
                okText="Yes"
                cancelText="No"
                placement="bottomRight"
              >
                {this.props.user.avatar
                  ? <Avatar src={this.props.user.avatar} />
                  : <Avatar
                    style={{ color: '#f56a00', backgroundColor: '#fde3cf' }}
                    >
                      {this.props.user.username.charAt(0).toUpperCase()}
                    </Avatar>
                }
              </Popconfirm>
              :
              <Button
                icon='login'
                type='primary'
                shape='circle'
                className='login'
                ghost='true'
                onClick={this.handleLogin}
              ></Button>
            }
          </div>
        </header>
        <main className="webiste-display">
          <VisibleNotes />
        </main>
        <footer className="website-footer">
          <p>&copy; {new Date().getFullYear()} Shixun Liu</p>
          <br />
          <p>Powered by shixun.liu1023@gmail.com</p>
        </footer>
        <VisibleAuthModal />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

App = connect(mapStateToProps, null)(App)

export default App
