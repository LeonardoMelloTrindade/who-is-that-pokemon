import React, { useState, useContext, useEffect } from "react";
import DataContext,{ data } from "../../data/DataContext";
import "./inputPokemon.css";

export default function inputPokemon() {
  const [inputValue, setInputValue] = useState('');
  const context = useContext(DataContext);

  useEffect(() => {
    console.log("Valor atualizado do nome:", context.pokemon.nome);
  }, [context.pokemon.nome]);


  const handleKeyPress = (event) => {
    console.log(inputValue)
    if (event.key === "Enter") {
      context.setPokemon({
        ...context.pokemon,
        nome: inputValue
      })
      console.log("Tecla Enter pressionada! Valor do input:", inputValue);
    }
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <>
      <article className="boxInput">
        <input
          type="text"
          required={true}
          className="input_pokemon"
          value={inputValue}
          onChange={handleChange}
          onKeyDown={handleKeyPress}
        />
        <span className="placeholder">nome do pokemon</span>
      </article>
    </>
  );
}
