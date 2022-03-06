import './styles/App.scss';
import SteinStore from 'stein-js-client';
import React, { useEffect, useState } from 'react';
import TableData from './components/TableData';

function App() {

  const [data, setData] = useState([]);

  const TOTAL_DATA = 127;

  const store = new SteinStore("https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4");

  useEffect(() => {
    store.read("list").then(response => {
      setData(response)
    });
  }, [])

  return (
    <div className="App">
      <TableData data={data} />
    </div>
  );
}

export default App;
