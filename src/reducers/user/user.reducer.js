import * as Options from '../../utils/actionType'

const initState = {
  msg: '',
  username: '',
  userid: '',
  avatar: '',
  auth: false,
  isAuthModalShown: false
}

const user = (state = initState, action) => {
  switch (action.type) {
    case Options.SHOW_AUTH_MODAL:
      return {...state, isAuthModalShown: true}
    case Options.CLOSE_AUTH_MODAL:
      return {...state, isAuthModalShown: false}
    case Options.REGISTER_SUCCESS:
      return {
        ...state,
        isAuthModalShown: false
      }
    case Options.AUTH_SUCCESS:
      return {
        ...state,
        msg: action.payload.msg,
        username: action.payload.data.username,
        userid: action.payload.data._id,
        avatar: action.payload.data.avatar ? action.payload.data.avatar : '',
        auth: true,
        isAuthModalShown: false
      }
    case Options.AUTH_LOGOUT:
      return {...initState}
    default:
      return state
  }
}

export default user