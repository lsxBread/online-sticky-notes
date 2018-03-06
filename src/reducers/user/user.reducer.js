import * as Options from '../../utils/actionType'
import localStorage from '../../utils/storage'

const initState = {
  msg: '',
  username: '',
  userid: '',
  auth: false,
  isAuthModalShown: false
}

const user = (state = initState, action) => {
  switch (action.type) {
    case Options.SHOW_AUTH_MODAL:
      return {...state, isAuthModalShown: true}
    case Options.CLOSE_AUTH_MODAL:
      return {...state, isAuthModalShown: false}
    case Options.AUTH_SUCCESS:
      console.log(action.payload)
      return {
        ...state,
        msg: action.payload.msg,
        username: action.payload.data.username,
        userid: action.payload.data._id,
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