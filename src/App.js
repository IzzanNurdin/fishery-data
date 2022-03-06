import dayjs from 'dayjs';
import 'dayjs/locale/id'
import './styles/App.scss';
import SteinStore from 'stein-js-client';
import React, { useEffect, useState } from 'react';

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
      <div className="container-md col-md-10 px-4">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Komoditas</th>
              <th scope="col">Provinsi</th>
              <th scope="col">Kota</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {data.map(obj => {
              return (
                <tr key={`${obj.uuid}-${obj.timestamp}`}>
                  <td>{obj.komoditas}</td>
                  <td>{obj.area_provinsi}</td>
                  <td>{obj.area_kota}</td>
                  <td>{obj.size}</td>
                  <td>{Number(obj.price).toLocaleString('id', {style: 'currency', currency: 'IDR'})}</td>
                  <td>{obj.tgl_parsed ? dayjs(obj.tgl_parsed).locale('id').format('dddd, DD MMMM YYYY') : "-"}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
