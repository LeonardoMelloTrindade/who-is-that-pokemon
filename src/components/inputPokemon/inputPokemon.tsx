import React, { useState, useContext, useEffect } from "react";
import DataContext, { data } from "../../data/DataContext";
import "./inputPokemon.css";

export default function inputPokemon() {
  const [inputValue, setInputValue] = useState("");
  const context = useContext(DataContext);

  const handleChange = (event) => {
    const updatedValue = event.target.value;
    setInputValue(updatedValue);
    context.setPokemon({
      ...context.pokemon,
      nome: updatedValue,
    });
    console.log(context.pokemon.nome)

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
