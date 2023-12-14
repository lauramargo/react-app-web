import logo from './logoAtradius.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Atradius
        </p>
        <a
          className="App-link"
          href="https://group.atradius.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          web Atradius
        </a>
      </header>
    </div>
  );
}

export default App;
