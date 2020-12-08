import React from "react";
import { Button, Modal } from "semantic-ui-react";

const ContactModal = ({ title, message, dimmer, open, onClose }) => {
  return (
    <Modal dimmer={dimmer} open={open}>
      <Modal.Header>{title}</Modal.Header>
      <Modal.Content>{message}</Modal.Content>
      <Modal.Actions>
        <Button positive onClick={onClose}>
          Close
        </Button>
      </Modal.Actions>
    </Modal>
  );
};

export default ContactModal;
