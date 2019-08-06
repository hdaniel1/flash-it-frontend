import {combineReducers} from 'redux'

const userReducer = (state = null, action) => {
    switch(action.type) {
        case "LOGIN_USER":
            return action.user
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
