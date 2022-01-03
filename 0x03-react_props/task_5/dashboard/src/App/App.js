import React, { Component } from 'react';
import Notifications from '../Notifications/Notifications';
import Header from '../Header/Header';
import Login from '../Login/Login';
import Footer from '../Footer/Footer';
import CourseList from '../CourseList/CourseList';
import { PropTypes, } from 'prop-types';
import { getLatestNotification } from '../utils/utils';
import './App.css';
function App({isLoggedIn}){

  let listCourses = [{id: 1, name: 'ES6', credit: 60}, {id: 2, name: 'Webpack', credit: 20}, {id: 3, name: 'React', credit: 40}]
  let listNotifications = [{id: 1, value: "New course available", type: 'default'}, {id: 2,  value:"New resume available", type:'urgent'}, {id: 3,html: {__html: getLatestNotification()}, type:'urgent'}]
    return (
    <React.Fragment>
      <div className="App">
      <Notifications listNotifications={listNotifications}/>
      <Header />
      {isLoggedIn ? (<CourseList listCourses={listCourses} />):(<Login />)}
      <Footer />
      </div>
    </React.Fragment>
  );
}


App.defaultProps = {
  isLoggedIn: false
};


export default App;
