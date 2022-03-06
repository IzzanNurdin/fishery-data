const SortSelect = ({ sort }) => {

  const OPTIONS = [
    { label: "Komoditas", value: "komoditas" },
    { label: "Lokasi", value: "area_provinsi" },
    { label: "Jumlah", value: "size" },
    { label: "Harga", value: "price" },
    { label: "Tanggal", value: "tgl_parsed" }
  ]

  return (
    <div className="col-md-4 my-4">
      <h6 className="me-2"><b>Urutkan Dari</b></h6>
      <select className="form-select" onChange={e => sort(e.target.value)}>
        <option selected disabled hidden>Pilih kolom</option>
        {OPTIONS.map(option => {
          return (
            <option value={option.value}>{option.label}</option>
          )
        })}
      </select>
    </div>
  )
}

export default SortSelect;