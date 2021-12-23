import React, { useState } from 'react';
import { Button, Container, Navbar } from 'react-bootstrap';
import MyModal from './MyModal';

const MyNavbar = () => {
  const [modalShow, setModalShow] = useState(false);
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">CRUD Application</Navbar.Brand>
        <Button variant="primary" onClick={() => setModalShow(true)}>
                Create User
            </Button>
            <MyModal show={modalShow} onHide={() => setModalShow(false)} />
      </Container>
    </Navbar>
  )
}

export default MyNavbar;
