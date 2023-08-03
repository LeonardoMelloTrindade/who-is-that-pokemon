import React, { useState, useContext, useEffect } from "react";
import DataContext,{ data } from "../../data/DataContext";
import "./inputPokemon.css";

export default function inputPokemon() {
  const [inputValue, setInputValue] = useState('');
  const context = useContext(DataContext);
  
  useEffect(() => {
    context.setPokemon({
      ...context.pokemon,
      nome: inputValue
    });
    console.log(context.pokemon.nome)
  }, [inputValue]);

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
        />
        <span className="placeholder">nome do pokemon</span>
      </article>
    </>
  );
}
