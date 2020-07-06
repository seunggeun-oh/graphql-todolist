import React, { useState } from "react";

import { 
  Modal,
  Button,
  Form,
  Row,
  Col,
} from 'react-bootstrap';

const ModalCreateList = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleCreateList = () => {
    const title = document.getElementById("todoId").value;
    const author = document.getElementById("nameId").value;

    // 여기서 중지
  }
  
  return (
    <>
      <Button className="btn btn-primary" onClick={handleShow}>Add Task </Button>
 
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group as={Row} >
            <Form.Label column sm="2">
              해야할 일
            </Form.Label>
            <Col sm="10" >
              <Form.Control id="todoId" plaintext placeholder="..." />
            </Col>
          </Form.Group>

          <Form.Group as={Row} >
            <Form.Label column sm="2">
              작성자
            </Form.Label>
            <Col sm="10">
              <Form.Control id="nameId" plaintext placeholder="..." />
            </Col>
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCreateList}>Understood</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default ModalCreateList