import dayjs from 'dayjs';
import 'dayjs/locale/id'
import { useEffect, useState } from 'react';
import SortSelect from './SortSelect';
import { PlusCircle } from 'react-bootstrap-icons';

const TableData = ({ data }) => {

  const [dataDisplay, setDataDisplay] = useState([]);

  const sort = (sortBy) => {
    setDataDisplay((prevData) => [...prevData.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0)])
  }

  useEffect(() => {
    setDataDisplay(data);
  }, [data])

  return (
    <div className="container-md col-md-10 px-4">
      <div className="col-md-12 d-inline-flex">
        <div className="col-md-6">
          <SortSelect sort={sort} />
        </div>
        <div className="d-flex col-md-6 justify-content-end my-4">
          <button className="btn btn-primary d-flex align-items-center"><PlusCircle className="me-2" /><b>Add</b></button>
        </div>
      </div>
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
    </div>
  )
}

export default TableData;