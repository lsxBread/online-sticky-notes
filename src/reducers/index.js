
import {combineReducers} from 'redux'
import note from './note/note.reducer'
import user from './user/user.reducer'

import '../utils/config'
const reducers = combineReducers({note, user})

export default reducers