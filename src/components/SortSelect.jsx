import { useEffect, useState } from "react";
import { COLUMNS, ORDER } from '../utils/variables';

const SortSelect = ({ sort }) => {

  const [order, setOrder] = useState('asc');
  const [option, setOption] = useState('');

  useEffect(() => {
    sort(option, order);
  }, [option, order])

  return (
    <div className="col-md-6 col-sm-6 my-4">
      <h6 className="me-2"><b>Urutkan Dari</b></h6>
      <div className="d-flex">
        <select className="form-select col-sm-3 me-2" onChange={e => setOption(e.target.value)}>
          <option value="" selected disabled hidden>Pilih kolom</option>
          {COLUMNS.map(option => {
            return (
              <option key={option.label} value={option.value}>{option.label}</option>
            )
          })}
        </select>
        <select className="col-sm-3 form-select" onChange={e => setOrder(e.target.value)}>
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