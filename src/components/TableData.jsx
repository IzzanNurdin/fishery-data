import dayjs from 'dayjs';
import 'dayjs/locale/id'
import { useEffect, useState } from 'react';

const TableData = ({ data }) => {

  const [dataDisplay, setDataDisplay] = useState([]);

  const OPTIONS = [
    { label: "Komoditas", value: "komoditas" },
    { label: "Lokasi", value: "area_provinsi" },
    { label: "Jumlah", value: "size" },
    { label: "Harga", value: "price" },
    { label: "Tanggal", value: "tgl_parsed" }
  ]

  const sort = (sortBy) => {
    setDataDisplay((prevData) => [...prevData.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : b[sortBy] > a[sortBy] ? -1 : 0)])
  }

  useEffect(() => {
    setDataDisplay(data);
  }, [data])

  return (
    <div className="container-md col-md-10 px-4">
      <div className="col-md-2 my-4">
        <h6 className="me-2">Urutkan Dari</h6>
        <select className="form-select" onChange={e => sort(e.target.value)}>
          <option selected disabled hidden>Pilih kolom</option>
          {OPTIONS.map(option => {
            return (
              <option value={option.value}>{option.label}</option>
            )
          })}
        </select>
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