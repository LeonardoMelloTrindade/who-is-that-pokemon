import React, { useState, useContext, useEffect } from "react";
import { Button, Modal } from "react-bootstrap";
import { AppContext } from "../../store/Store";
import './modalInfo.css';

export default function ModalInfo() {
  const { errou, pokemon, openModal, setOpenModal, setPontuacao, pontuacao } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [variante, setVariante] = useState("");
  const [textBtn, setTextBtn] = useState("");

  const reloadGame = () => {
    if (errou) window.location.reload();  
    setModal(false);
    setOpenModal(false);
  }

  useEffect(() => {
    if (openModal) {
      setModal(true);
      setTitulo(errou ? "Você errou, tente novamente." : "Parabéns, você acertou!!!");
      setVariante(errou ? "outline-danger" : "outline-success");
      setTextBtn(errou ? "Tentar novamente!" : "Jogar de novo!");
      setPontuacao(errou ? 0 : pontuacao + 1)
    }
  }, [errou, openModal]);

  return (
    <Modal show={modal} onHide={reloadGame}>
      <Modal.Header>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body>O nome do Pokémon é<span className="nomePokemon">&nbsp;{pokemon}</span>.</Modal.Body>
      <Modal.Footer>
        <Button
          variant={variante}
          className="d-flex justify-content-center"
          onClick={reloadGame}
        >
          {textBtn}
        </Button>
      </Modal.Footer>
    </Modal>
  );
}
