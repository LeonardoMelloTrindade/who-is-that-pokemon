import React, { useContext } from "react";
import "./btnPokemon.css";
import { AppContext } from "../../store/Store";

interface BtnPokemonProps {
  nomePokemon: string
}

export default function BtnPokemon(props: BtnPokemonProps) {
  const { nomePokemon } = props;
  const { nome, setErrou, setOpenModal } = useContext(AppContext)


  const verificarNomePokemon = () => {
    setOpenModal(true)
    setErrou(nomePokemon === nome ? false : true);
  };

  return (
    <>
      <button onClick={verificarNomePokemon} type="submit" className="button-87">
        Pronto
      </button>
    </>
  );
}
