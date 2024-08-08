import React from 'react';
import logo from './logo.svg';
import './App.css';
import Test from './Test';

const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Test />
      </header>
    </div>
  );
}

export default App;
