import React, { useState} from 'react';
import ReactModal from 'react-modal';

const [showModal, setShowModal] = useState(false);

const handleOpenModal = () => {
  setShowModal(true);
}

const handleCloseModal = () => {
  setShowModal(false);
}

const Contact = () => {
  return (
    <ReactModal
      isOpen={showModal}
      contentLabel='Contact info modal'
      >
        <p>Modal text</p>
        <button onClick={handleCloseModal}>Close Modal</button>
      </ReactModal>
  );
}

export default Contact;
