import React, { useContext } from "react";
import DataContext from "../../data/DataContext";
import "./btnPokemon.css";

export default function btnPokemon(props) {
  const { nomePokemon } = props;
  const context = useContext(DataContext)

  const verificarNomePokemon = () => {
    console.log(nomePokemon)
    console.log(context.pokemon.nome)
    if (nomePokemon == context.pokemon.nome) {
      console.log(context.pokemon.nome)
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
