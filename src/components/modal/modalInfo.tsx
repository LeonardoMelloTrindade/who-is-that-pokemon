import React, { useState, useContext, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { BsArrowRepeat } from "react-icons/bs";
import { AppContext } from "../../data/Store.";

export default function ModalInfo() {
  const { acertou, nome } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    setShow(acertou);
  }, [acertou]);

  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Parabéns, você acertou o pokemon {nome}</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button
            variant="outline-success"
            className="d-flex justify-content-center"
            onClick={() => window.location.reload() }
          >
            <BsArrowRepeat />
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
