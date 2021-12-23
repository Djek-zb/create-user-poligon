import React from "react";
import {  Modal } from "react-bootstrap";
import MyForm from "./MyForm";

const MyModal = (props) => {
    const {setModalShow}=props;
    return (
        <Modal
        {...props}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
          <Modal.Header closeButton/>
        <Modal.Body>
        <MyForm setModalShow={setModalShow}/>
        </Modal.Body>
        
      </Modal>
    )
}

export default MyModal;
  