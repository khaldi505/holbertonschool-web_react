import logo from './holberton-logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils.js'
// https://www.codeproject.com/Tips/1248317/Creating-Labels-for-Input-Elements-in-React

function App() {
  const date = getFullYear();
  const index = getFooterCopy(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
      </header>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <label htmlFor="email">Email</label>
        <input id="email" type="email" />
        <label htmlFor="password">Password</label>
        <input id="password" type="password" />    
        <button>OK</button>
      </div>
      <div className="App-footer">Copyright {date} - {index}</div>
    </div>
  );
}

export default App;
