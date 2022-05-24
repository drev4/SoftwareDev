import logo from './logo.svg';
import './App.css';
import List from "./components/List";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React application.
        </p>
          <List />
      </header>
    </div>
  );
}

export default App;
