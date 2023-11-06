import React, { useState, useContext, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { AppContext } from "../../data/Store.";
import './modalInfo.css'

export default function ModalInfo() {
  const { acertou, errou, pokemon } = useContext(AppContext);
  const [show, setShow] = useState(false);
  const [titulo, setTitulo] = useState("")
  const [variante, setVariante] = useState("")
  const [textBtn, setTextBtn] = useState("")
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (acertou === true) {
      setShow(true);
      setTitulo("Parabéns, você acertou!!!");
      setVariante("outline-success");
      setTextBtn("Jogar de novo!")
      
    } else if (errou === true) {
      
      setShow(true);
      setTitulo("Você errou, tente novamente.");
      setVariante("outline-danger");
      setTextBtn("Tentar novamente!")
    } else {
      console.log('erro')
    }
  }, [acertou, errou]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>O pokemon era<span className="nomePokemon">&nbsp;{pokemon}</span>.</Modal.Body>
      <Modal.Footer>
        <Button
          variant={variante}
          className="d-flex justify-content-center"
          onClick={() => window.location.reload()}
        >
          {textBtn}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
