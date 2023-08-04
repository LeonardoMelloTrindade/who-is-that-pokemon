import React, { useContext } from "react";
import DataContext from "../../data/DataContext";
import "./btnPokemon.css";

export default function BtnPokemon(props) {
  const { nomePokemon } = props;
  const context = useContext(DataContext);
  const inputPokemon = context.pokemon.nome;

  const verificarNomePokemon = () => {
    console.log(nomePokemon)
    console.log(inputPokemon)
    if (nomePokemon.trim() == inputPokemon.trim()) {
      console.log(`Parabens, voce acertou o Pokemon ${inputPokemon}`)
      context.setPokemon({
        ...context.pokemon,
        acertou: true,
      });
    } else {
      console.log('nomes diferentes')
    }
    
  };

  return (
    <>
      <button onClick={verificarNomePokemon} type="submit" className="button-56" role="button">
        Pronto
      </button>
    </>
  );
}
