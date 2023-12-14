import logo from './logoAtradius.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://group.atradius.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
        <img src={logo} className="App-logo" alt="logo" />
        </a>
      </header>
    </div>
  );
}

export default App;

