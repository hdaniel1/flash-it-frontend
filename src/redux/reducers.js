import {combineReducers} from 'redux'

const userReducer = (state = null, action) => {
    switch(action.type) {
        case "ADD_USER":
          return action.user
        case "LOGIN_USER":
            return null
        case "LOGOUT_USER":
          return null
        default:
          return state
      }
}
  
const rootReducer = combineReducers({
    user: userReducer
})

export default rootReducer
