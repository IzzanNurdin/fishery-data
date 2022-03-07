import './styles/App.scss';
import SteinStore from 'stein-js-client';
import React, { useEffect, useState } from 'react';
import { ModalAdd, TableData, Search } from './components';

function App() {

  const [data, setData] = useState([]);
  const [openModalAdd, setOpenModalAdd] = useState(false);
  const [loadingAdd, setLoadingAdd] = useState(false);
  const [loadingList, setLoadingList] = useState(true);

  const store = new SteinStore("https://stein.efishery.com/v1/storages/5e1edf521073e315924ceab4");

  function appendData(payload, resetInput) {
    setLoadingAdd(true);
    store.append("list", [payload])
    .then(res => {
      console.log(res);
      setLoadingAdd(false);
      setOpenModalAdd(false);
      resetInput({});
      store.read("list").then(response => {
        setData(response)
      });
    })
    .catch(err => {
      console.error(err);
      setLoadingAdd(false);
      setOpenModalAdd(false);
      store.read("list").then(response => {
        setData(response)
      });
    });
  }

  function searchData(searchValue, searchBy) {
    setLoadingList(true);
    const obj = {};
    if (searchValue === "") {
      return store.read('list').then(response => {
        setData(response);
        setLoadingList(false);
      })
    }
    obj[searchBy] = searchValue;
    
    return store.read('list', {
      search: obj
    })
      .then(res => {
        setData(res);
        setLoadingList(false);
      })
      .catch(err => {
        console.error(err);
        setLoadingList(false);
      });
  }

  useEffect(() => {
    store.read("list").then(response => {
      setData(response);
      setLoadingList(false);
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div className="App">
      <div className="col-lg-8 col-md-12 col-sm-12 col-xs-12 px-4">
        <Search onSearch={searchData} />
        <TableData data={data} openModalAdd={setOpenModalAdd} loading={loadingList} />
        <ModalAdd open={openModalAdd} setOpenModal={setOpenModalAdd} onSave={appendData} loading={loadingAdd} />
      </div>
    </div>
  );
}

export default App;
