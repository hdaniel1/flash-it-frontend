import React, { useEffect } from 'react';
import LoginForm from '../components/LoginForm'
import CategoryPage from './CategoryPage'
import ProfileSetupForm from '../components/ProfileSetupForm'
import '../styles/App.css';
import {Route, Redirect, Switch} from 'react-router-dom'
import {connect} from 'react-redux'
import {addUser, loginUser} from '../redux/useractions'

function App(props) {

  const {user, addUser, loginUser} = props

  const redirectToHomePage = () => <Redirect to={'/home'} />

  const showLoginPage = () => !user ? <LoginForm loginUser={loginUser}/> : <Redirect to='/home' />

  const showSetupPage = () => !user ? <ProfileSetupForm addUser={addUser}/> : <Redirect to='/home' />

  const showProfile = () => user ? <CategoryPage /> : <Redirect to='/login' />
  
  return (
    <React.Fragment>
      <Switch>
        <Route path="/login" render={showLoginPage}/>
        <Route path="/setup" render={showSetupPage}/>
        <Route path="/home" render={showProfile}/>
        <Route path="/" render={redirectToHomePage}/>
      </Switch>
    </React.Fragment>
  )
}

export default connect(store => ({user: store.user}), {addUser, loginUser})(App)
