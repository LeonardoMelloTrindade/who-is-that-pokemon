import React, { useContext } from "react";
import DataContext from "../../data/DataContext";
import "./btnPokemon.css";

export default function BtnPokemon(props) {
  const { nomePokemon } = props;
  const context = useContext(DataContext)
  const inputPokemon = context.pokemon.nome

  const verificarNomePokemon = () => {
    console.log(nomePokemon.toUpperCase())
    console.log(inputPokemon)
    if (nomePokemon == inputPokemon) {
      console.log(`Parabens, voce acertou o Pokemon ${inputPokemon}`)
    } else {
      console.log('nomes diferentes')
    }
    
  };

  return (
    <>
      <button onClick={verificarNomePokemon} type="submit">
        Pronto
      </button>
    </>
  );
}
