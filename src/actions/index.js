import axios from 'axios'
import React from 'react'
import {notification, Icon, message} from 'antd'

import * as Options from '../utils/actionType'
import * as NoteModel from '../models/note'
import uuidv1 from 'uuid/v1'
const colorList = ['#F7E999', '#b9dcf4', '#FFBDA3', '#CAF4B9']
const rotate = [-1, 1, -2, 2]
const URL = 'https://my-note-server.herokuapp.com'

export const addNote = (username) => {
  let index = Math.floor(Math.random() * 4)
  let newNote = NoteModel.createNote(
    {
      creator: username,
      id: uuidv1(),
      content: '',
      color: colorList[index],
      rotate: rotate[index],
    })
  
  return {
    type: Options.ADD_NOTE,
    payload: {newNote}
  }
}

export const changeContent = (id, content) => {
  return {
    type: Options.UPDATE_CONTENT,
    payload: {id, content}
  }
}

export const changeColor = (id, color) => {
  return {
    type: Options.UPDATE_COLOR,
    payload: {id, color}
  }
}

export const deleteNote = (id) => {
  return {
    type: Options.REMOVE_NOTE,
    payload: {id}
  }
}

export const removeAll = (username) => {
  return {
    type: Options.REMOVE_ALL,
    payload: {username}
  }
}

export const showAuthModal = () => {
  return {
    type: Options.SHOW_AUTH_MODAL
  }
}

export const closeAuthModal = () => {
  return {
    type: Options.CLOSE_AUTH_MODAL
  }
}

export const registerSuccess = () => {
  message.success('Register Success');
  return {
    type: Options.REGISTER_SUCCESS
  }
}

export const authSuccess = (data, msg) => {
  notification.open({
    message: 'Login Successfully!',
    description: 'Enjoy the trial of this online notes',
    icon: <Icon type="smile-circle" style={{ color: '#108ee9' }} />
  })
  return {
    type: Options.AUTH_SUCCESS,
    payload: {data, msg}
  }
}

export const authLogout = () => {
  return {
    type: Options.AUTH_LOGOUT
  }
}

export const errorMsg = (msg) => {
  return {
    type: Options.ERROR_MSG,
    payload: {msg}
  }
}

export const triggerLogin = ({username, password}) => {
  return dispatch => {
    axios.post(
      `${URL}/user/login`,
      {username, password},
      {withCredentials: true}).then(res => {
        if ((res.status === 200 || res.status === 304) && res.data.code === 0) {
          dispatch(authSuccess(res.data.data, res.data.msg))
        } else {
          message.error(res.data.msg);
          dispatch(errorMsg(res.data.msg))
        }
      })
  }
}

export const triggerRegister = ({r_username, r_password}) => {
  return dispatch => {
    axios.post(
      `${URL}/user/register`,
      {r_username, r_password},
      {withCredentials: true}
    ).then(res=>{
      if ((res.status === 200 || res.status === 304) && res.data.code === 0) {
        dispatch(registerSuccess())
      } else {
        message.warning(res.data.msg);
      }
    })
  }
}

export const triggerLogout = () => {
  return dispatch => {
    axios.get(
      `${URL}/user/logout`, {withCredentials: true}
    ).then(res => {
      if((res.status === 200 || res.status === 304) && res.data.code === 0) {
        dispatch(authLogout())
      }
    })
  }
}

export const checkUserAuth = () => {
  return dispatch => {
    axios.get( `${URL}/user/auth`, {withCredentials: true})
    .then(res => {
        if((res.status === 200 || res.status === 304) && res.data.code === 0) {
          dispatch(authSuccess(res.data.data, res.data.msg))
        }
    })
  }
}