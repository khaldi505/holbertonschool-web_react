import logo from './holberton-logo.jpg';
import './App.css';
import {getFullYear, getFooterCopy} from './utils.js'

function App() {
  const date = getFullYear();
  const index = getFooterCopy(true)
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
          <h1>School dashboard</h1>
      </header>
      <div className="App-body"><p>Login to access the full dashboard</p></div>
      <div className="App-footer">Copyright {date} - {index}</div>
    </div>
  );
}

export default App;
