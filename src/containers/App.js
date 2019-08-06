import React from 'react';
import LoginForm from '../components/LoginForm'
import CategoryPage from './CategoryPage'
import ProfileSetupForm from '../components/ProfileSetupForm'
import '../styles/App.css';
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser} from '../redux/useractions'


function App(props) {
  return (
    <React.Fragment>
        <Route path="/login" component={LoginForm} /> 
        <Route path="/setup" render={() => <ProfileSetupForm addUser={props.addUser} />} />
        <Route path="/home" component={CategoryPage} />
    </React.Fragment>
  )
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addUser: (user) => dispatch(addUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
