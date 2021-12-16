import React from "react";
import { ReactComponent as Logo } from './assets/logo.svg';
import { ReactComponent as Safe } from './assets/safe.svg';
import "./App.scss";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Logo fill="black" />
        <button>Buttin</button>
        <Safe />
      </header>
    </div>
  );
}

export default App;

