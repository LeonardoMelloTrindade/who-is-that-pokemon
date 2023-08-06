import React, { useContext } from "react";
import "./btnPokemon.css";
import { AppContext } from "../../data/Store.";

interface BtnPokemonProps {
  nomePokemon: string
}

export default function BtnPokemon(props: BtnPokemonProps) {
  const { nomePokemon } = props;
  const {nome, setAcertou} = useContext(AppContext)

  const verificarNomePokemon = () => {
    console.log(nomePokemon)
    console.log(nome)
    if (nomePokemon.trim() == nome.trim()) {
      console.log(`Parabens, voce acertou o Pokemon ${nome}`)
      setAcertou(true);
    } else {
      console.log('nomes diferentes')
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
