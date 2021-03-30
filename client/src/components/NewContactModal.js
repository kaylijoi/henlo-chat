import React, {useRef} from 'react'
import { Modal, Form, Button } from 'react-bootstrap';

export default function NewContactModal({ closeModal }) {
  const idRef = useRef()
  const nameRef = useRef()

  function handleSubmit(e) {
    e.preventDefault()

    // createContact(idRef.current.value, nameRef.current.value)
    closeModal()
  }
  return (
    <>
      <Modal.Header closeButton>Create Contact</Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Label>Id</Form.Label>
          <Form.Control type="text" ref={idRef} required>
          </Form.Control>
          
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" ref={nameRef} required>
          </Form.Control>
        </Form>
      </Modal.Body>
    </>
  )
}
