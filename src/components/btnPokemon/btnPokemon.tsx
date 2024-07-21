import React, { useContext } from "react";
import "./btnPokemon.css";
import { AppContext } from "../../data/Store";

interface BtnPokemonProps {
  nomePokemon: string
}

export default function BtnPokemon(props: BtnPokemonProps) {
  const { nomePokemon } = props;
  const {nome, setAcertou, setErrou } = useContext(AppContext)


  const verificarNomePokemon = () => {
    if (nomePokemon === nome) {
      setAcertou(true);
    } else {
      setAcertou(false)
      setErrou(true);
    }
    
  };

  return (
    <>
      <button onClick={verificarNomePokemon} type="submit" className="button-87">
        Pronto
      </button>
    </>
  );
}
