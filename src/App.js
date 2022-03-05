import logo from './logo.svg';
import './App.scss';
import SteinStore from 'stein-js-client';
import React, { useEffect, useState } from 'react';

function App() {

  const [data, setData] = useState([]);

  const TOTAL_DATA = 124;

  const store = new SteinStore("https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4");

  useEffect(() => {
    store.read("list").then(response => {
      setData(response)
    });
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        {console.log(data, 'data')}
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
