import { useEffect, useState } from "react";

const SortSelect = ({ sort }) => {

  const [order, setOrder] = useState('asc');
  const [option, setOption] = useState('');

  const ORDER = [
    { label: "Naik", value: "asc" },
    { label: "Turun", value: "desc" }
  ]

  const OPTIONS = [
    { label: "Komoditas", value: "komoditas" },
    { label: "Lokasi", value: "area_provinsi" },
    { label: "Jumlah", value: "size" },
    { label: "Harga", value: "price" },
    { label: "Tanggal", value: "tgl_parsed" }
  ]

  useEffect(() => {
    sort(option, order);
  }, [option, order])

  return (
    <div className="col-md-6 my-4">
      <h6 className="me-2"><b>Urutkan Dari</b></h6>
      <div className="d-flex">
        <select className="form-select me-2" onChange={e => setOption(e.target.value)}>
          <option value="" selected disabled hidden>Pilih kolom</option>
          {OPTIONS.map(option => {
            return (
              <option key={option.label} value={option.value}>{option.label}</option>
            )
          })}
        </select>
        <select className="form-select" onChange={e => setOrder(e.target.value)}>
          <option value="" selected disabled hidden>Pilih tingkatan</option>
          {ORDER.map(order => {
            return (
              <option key={order.label} value={order.value}>{order.label}</option>
            )
          })}
        </select>
      </div>
    </div>
  )
}

export default SortSelect;