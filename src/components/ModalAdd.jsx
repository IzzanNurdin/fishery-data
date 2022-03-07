import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const ModalAdd = ({ open, setOpenModal, onSave, loading }) => {

  const [komoditas, setKomoditas] = useState('');
  const [area_kota, setKota] = useState('');
  const [area_provinsi, setProvinsi] = useState('');
  const [size, setSize] = useState('');
  const [price, setPrice] = useState('');

  return (
    <Modal show={open} onHide={() => setOpenModal(false)}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah data</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Komoditas</Form.Label>
            <Form.Control
              value={komoditas}
              onChange={e => setKomoditas(e.target.value)}
              type="text"
              as="input"
              placeholder="contoh: Ikan Cue" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Kota</Form.Label>
            <Form.Control
              value={area_kota}
              onChange={e => setKota(e.target.value)}
              type="text"
              as="input" placeholder="contoh: Bogor" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Provinsi</Form.Label>
            <Form.Control
              value={area_provinsi}
              onChange={e => setProvinsi(e.target.value)}
              type="text"
              as="input"
              placeholder="contoh: Jawa Barat" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Jumlah</Form.Label>
            <Form.Control
              value={size}
              onChange={e => setSize(e.target.value)}
              type="number"
              as="input"
              placeholder="contoh: 10" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              value={price}
              onChange={e => setPrice(e.target.value)}
              type="number"
              as="input"
              placeholder="contoh: 15000" />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={() => setOpenModal(false)}>Tutup</Button>
        <Button variant="primary"
          type="submit"
          disabled={loading}
          onClick={() => onSave(komoditas, area_kota, area_provinsi, size, price)}
        >
          {loading ?
            <div
              className="spinner-border"
              style={{ width: '1rem', height: '1rem' }}
              role="status">
              <span className="visually-hidden">Loading...</span>
            </div> : "Simpan"}
        </Button>
      </Modal.Footer>
    </Modal>
  )
}

export default ModalAdd;