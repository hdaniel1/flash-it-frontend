import React from 'react';
import LoginPage from './LoginPage'
import CategoryPage from './CategoryPage'
import '../styles/App.css';
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'

function App(props) {
  if (!props.currentUser) {
    return <LoginPage />
  }
  else {
    return <CategoryPage />
  }
}

const mapStateToProps = (store) => {
  return {
    currentUser: store.currentUser
  }
}

export default connect(mapStateToProps, null)(App)
