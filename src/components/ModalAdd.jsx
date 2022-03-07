import { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { v4 as uuidv4 } from 'uuid';
import dayjs from 'dayjs';

const ModalAdd = ({ open, setOpenModal, onSave, loading }) => {

  const [input, setInput] = useState({});

  const onClose = () => {
    setInput({});
    setOpenModal(false);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    input['uuid'] = uuidv4();
    input['tgl_parsed'] = dayjs();
    onSave(input, setInput)
  }

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput(prevValues => ({...prevValues, [name]: value}))
  }

  return (
    <Modal show={open} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Tambah data</Modal.Title>
      </Modal.Header>
      
      <Form onSubmit={handleSubmit}>
        <Modal.Body>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Komoditas</Form.Label>
            <Form.Control
              value={input.komoditas || ""}
              name="komoditas"
              required
              onChange={handleChange}
              type="text"
              as="input"
              placeholder="contoh: Ikan Cue" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Kota</Form.Label>
            <Form.Control
              value={input.area_kota || ""}
              required
              name="area_kota"
              onChange={handleChange}
              type="text"
              as="input" placeholder="contoh: Bogor" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Provinsi</Form.Label>
            <Form.Control
              value={input.area_provinsi || ""}
              required
              name="area_provinsi"
              onChange={handleChange}
              type="text"
              as="input"
              placeholder="contoh: Jawa Barat" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Jumlah</Form.Label>
            <Form.Control
              value={input.size || ""}
              required
              name="size"
              onChange={handleChange}
              type="number"
              as="input"
              placeholder="contoh: 10" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
            <Form.Label>Harga</Form.Label>
            <Form.Control
              value={input.price || ""}
              required
              name="price"
              onChange={handleChange}
              type="number"
              as="input"
              placeholder="contoh: 15000" />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onClose}>Tutup</Button>
          <Button variant="primary" type="submit" disabled={loading}>
            {loading ?
              <div
                className="spinner-border"
                style={{ width: '1rem', height: '1rem' }}
                role="status">
                <span className="visually-hidden">Loading...</span>
              </div> : "Simpan"}
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  )
}

export default ModalAdd;