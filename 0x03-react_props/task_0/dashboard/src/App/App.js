import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import logo from '../assets/Holberton_Logo.jpg';
import { getFooterCopy, getFullYear } from '../utils/utils';
function App() {
  return (
    <div className="App">
      <div className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>School dashboard</h1>
      </div>
      <div className='App-body'>
        <p>Login to access the full dashboard</p>
        <form>
        <label>
           Email: <input></input>
          </label>
          <label>
            Password: <input></input>
          </label>
          <button>ok</button>
        </form>
      </div>
      <div className='App-footer'>
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
      </div>
    </div>
  );
}

export default App;
