import './styles/App.scss';
import SteinStore from 'stein-js-client';
import React, { useEffect, useState } from 'react';
import { ModalAdd, TableData, Search } from './components';
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

function App() {

  const [data, setData] = useState([]);
  const [openModalAdd, setOpenModalAdd] = useState(false);

  const store = new SteinStore("https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4");

  function appendData(komoditas, area_kota, area_provinsi, size, price) {
    store.append("list", [
      {
        uuid: uuidv4(),
        komoditas: komoditas,
        area_provinsi: area_provinsi,
        area_kota: area_kota,
        size: size,
        price: price,
        tgl_parsed: dayjs(),
      }
    ]).then(res => console.log(res))
  }

  function searchData(searchValue, searchBy) {
    const obj = {};
    if (searchValue === "") {
      return store.read('list').then(response => {
        setData(response);
      })
    }
    obj[searchBy] = searchValue;
    
    return store.read('list', {
      search: obj
    }).then(res => setData(res));
  }

  useEffect(() => {
    store.read("list").then(response => {
      setData(response)
    });
  }, [])

  return (
    <div className="App">
      {data.length > 0 ?
        <div className="col-md-8 px-4">
          <Search onSearch={searchData} />
          <TableData data={data} openModalAdd={setOpenModalAdd} />
          <ModalAdd open={openModalAdd} setOpenModal={setOpenModalAdd} onSave={appendData} />
        </div> :
        <div
          className="spinner-border mt-4"
          style={{ borderColor: '#68e5df', borderRightColor: 'transparent' }}
          role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      }
    </div>
  );
}

export default App;
