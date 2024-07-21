import React, { useState } from "react";
import Data  from "./Data";

interface Props {
  children: React.ReactNode;
}

export const AppContext = React.createContext(Data);

const Store: React.FC<Props> = (props) => {
  const [state, setState] = useState(Data);

  function updateState(key: string, value: string | number | boolean) {
    setState({
      ...state,
      [key]: value,
    });
  }

  return (
    <AppContext.Provider
      value={{
        nome: state.nome,
        pokemon: state.pokemon,
        pokedex: state.pokedex,
        acertou: state.acertou,
        errou: state.errou,
        setNome: (n: string) => updateState("nome", n),
        setPokemon: (n: string) => updateState("pokemon", n),
        setPokedex: (n: number) => updateState("pokedex", n),
        setAcertou: () => {},
        setErrou: (n: boolean) => updateState("errou", n),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
