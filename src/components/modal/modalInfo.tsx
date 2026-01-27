import { useContext, useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AppContext } from "../../store/Store";
import './modalInfo.css';
import { getRandomNumber } from "../../utils";
import PokemonService from "../../services/pokemon.service";

export default function ModalInfo() {
  const pokemonService = new PokemonService();
  const { pokemonNameApi, setPokemonNameApi, errou, openModal, setOpenModal, setPontuacao, pontuacao, setSpritePokemon, } = useContext(AppContext);
  const [modal, setModal] = useState(false);
  const [titulo, setTitulo] = useState("");
  const [variante, setVariante] = useState("");
  const [textBtn, setTextBtn] = useState("");
  const [textPontuacao, setTextPontuacao] = useState("");

  interface PokemonData {
    name: string;
    sprites: {
      front_default: string;
    };
  }

  const reloadGame = () => {
    if (errou) window.location.reload();
    setModal(false);
    setOpenModal(false);

    const randomNumber = getRandomNumber(1, 151);
    pokemonService
      .getPokemons(randomNumber)
      .then((pokemon: PokemonData) => {
        setSpritePokemon(pokemon.sprites.front_default);
        setPokemonNameApi(pokemon.name.toLowerCase())
        console.log('Nome do pokemon: ', pokemon.name)
      })
      .catch((error: Error) => {
        console.error("Ocorreu um erro ao obter os dados do pokemon:", error);
      });
  }

  useEffect(() => {
    if (openModal) {
      setModal(true);
      setTitulo(errou ? "Você errou, tente novamente." : "Parabéns, você acertou!!!");
      setVariante(errou ? "outline-danger" : "outline-success");
      setTextBtn(errou ? "Tentar novamente!" : "Jogar de novo!");
      setTextPontuacao(errou ? "Você perdeu seus pontos." : "Você ganhou mais 1 ponto.")
      setPontuacao(errou ? 0 : pontuacao + 1)
    }
  }, [errou, openModal]);

  return (
    <Modal show={modal} onHide={reloadGame}>
      <Modal.Header>
        <Modal.Title>{titulo}</Modal.Title>
      </Modal.Header>
      <Modal.Body className="text_pontuacao">
        <div>
          O nome do Pokémon é<span className="nomePokemon">&nbsp;{pokemonNameApi}</span>.
        </div>
        <div>
          {textPontuacao}
        </div>
      </Modal.Body>
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
