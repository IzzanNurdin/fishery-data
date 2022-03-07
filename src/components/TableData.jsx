import dayjs from 'dayjs';
import 'dayjs/locale/id'
import { useEffect, useState } from 'react';
import SortSelect from './SortSelect';
import { PlusCircle } from 'react-bootstrap-icons';

const TableData = ({ data, openModalAdd, loading }) => {

  const [dataDisplay, setDataDisplay] = useState([]);

  const sort = (sortBy, order) => {
    setDataDisplay((prevData) => [...prevData.sort((a, b) => {
      switch (sortBy) {
        case 'komoditas':
        case 'area_provinsi':
        case 'tgl_parsed':
          if (a[sortBy] && b[sortBy] && a[sortBy].toLowerCase() >= b[sortBy].toLowerCase()) {
            if (order === 'asc') {
              return 1;
            } else if (order === 'desc') {
              return -1;
            }
          }
          if (a[sortBy] && b[sortBy] && b[sortBy].toLowerCase() >= a[sortBy].toLowerCase()) {
            if (order === 'asc') {
              return -1;
            } else if (order === 'desc') {
              return 1;
            }
          }
          break;

        case 'price':
        case 'size':
          if (a[sortBy] !== null && b[sortBy] !== null && Number(a[sortBy]) >= Number(b[sortBy])) {
            if (order === 'asc') {
              return 1;
            } else if (order === 'desc') {
              return -1;
            }
          }
          if (a[sortBy] !== null && b[sortBy] !== null && Number(b[sortBy]) >= Number(a[sortBy])) {
            if (order === 'asc') {
              return -1;
            } else if (order === 'desc') {
              return 1;
            }
          }
          break;

        default:
          return 0;
      }
      return 0;
    }
    )])
  }

  useEffect(() => {
    setDataDisplay(data);
  }, [data])

  return (
    <div className="col-md-12">
      <div className="col-md-12 d-inline-flex">
        <div className="col-md-6">
          <SortSelect sort={sort} />
        </div>
        <div className="d-flex col-md-6 justify-content-end my-4">
          <button type="button" className="btn btn-blue d-flex align-items-center" onClick={() => openModalAdd(true)}>
            <PlusCircle className="me-2" /><b>Add</b>
          </button>
        </div>
      </div>
      {loading ?
        <div className="col-md-12 d-flex justify-content-center">
          <div
            className="spinner-border mt-4"
            style={{ borderColor: '#68e5df', borderRightColor: 'transparent' }}
            role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>  :
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Komoditas</th>
              <th scope="col">Lokasi</th>
              <th scope="col">Jumlah</th>
              <th scope="col">Harga</th>
              <th scope="col">Tanggal</th>
            </tr>
          </thead>
          <tbody>
            {dataDisplay.map((obj, idx) => {
              return (
                <tr key={`${obj.uuid} - ${idx}`}>
                  <td>{obj.komoditas ? obj.komoditas : "-"}</td>
                  <td>{`${obj.area_kota ? obj.area_kota : "-"}, ${obj.area_provinsi ? obj.area_provinsi : "-"}`}</td>
                  <td>{obj.size ? obj.size : "-"}</td>
                  <td>{obj.price ? Number(obj.price).toLocaleString('id', { style: 'currency', currency: 'IDR' }) : "-"}</td>
                  <td>{obj.tgl_parsed ? dayjs(obj.tgl_parsed).locale('id').format('dddd, DD MMMM YYYY') : "-"}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      }
    </div>
  )
}

export default TableData;