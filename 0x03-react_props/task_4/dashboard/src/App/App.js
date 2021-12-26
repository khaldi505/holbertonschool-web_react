import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { PropTypes } from 'prop-types';
import './App.css';
function App({isLoggedIn}){


    return (
    <React.Fragment>
      <div className="App">
      <Notifications />
      <Header />
      {isLoggedIn ? (<CourseList />):(<Login />)}
      <Footer />
      </div>
    </React.Fragment>
  );
}


App.defaultProps = {
  isLoggedIn: false
};


export default App;
