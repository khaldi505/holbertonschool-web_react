import React from 'react';
import ReactDOM from 'react-dom';
import logo from './Holberto_logo.jpg'

function App() {
    return <div className='container'> 
    <div className='App-header'><img src={logo} ></img> <h1>School dashboard</h1></div>
    <div className='App-body'> <p>Login to access the full dashboard</p></div>
    <div className='App-footer'><p>Copyright 2020 - holberton School</p></div>
    </div>
}

export default App