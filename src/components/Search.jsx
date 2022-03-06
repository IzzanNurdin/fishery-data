import { COLUMNS } from '../utils/variables';
import { useState } from 'react';

const Search = ({ onSearch }) => {
  
  const [searchBy, setSearchBy] = useState('komoditas');
  const [searchValue, setSearchValue] = useState('');

  return (
    <div className="col-md-12 pt-4">
      <div className="d-flex">
        <div className="col-md-10">
          <input
            className="form-control"
            value={searchValue}
            onChange={e => setSearchValue(e.target.value)}
            placeholder="Masukkan input disini untuk mencari"
          />
        </div>
        <div className="col-md-2 ms-2">
          <button className="btn btn-blue" onClick={() => onSearch(searchValue, searchBy)} style={{width: '100%'}}>Cari</button>
        </div>
      </div>
      <div className="mt-2">
        <label><b>Mencari berdasarkan</b></label>
      </div>
      <div className="col-md-12 mt-1 d-flex align-items-center">
        {COLUMNS.map((column) => {
          return (
            <>
              {column.value !== 'tgl_parsed' &&
                <div className="me-2">
                  <input
                    type="radio"
                    value={column.value}
                    checked={column.value === searchBy}
                    onClick={e => setSearchBy(e.target.value)}
                  /> {column.label}
                </div>
              }
            </>
          )
        })}
      </div>
    </div>
  )
}

export default Search;