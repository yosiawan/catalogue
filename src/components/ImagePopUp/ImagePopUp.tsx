import React from "react";
import { Modal, Image } from "react-bootstrap";

import "./imagePopUp.css";

type ImagePopUpProp = {
  showModal: boolean;
  handleClose: () => void;
  modalImage: string;
}
export default function ImagePopUp(props: ImagePopUpProp) {
  
  const {
    showModal,
    handleClose,
    modalImage
  } = props;

  return (
    <Modal
      show={showModal} 
      onHide={handleClose}
    >
      <Modal.Header closeButton/>
      <Image className="image-popup__image" src={modalImage}/>
    </Modal>
  )
}