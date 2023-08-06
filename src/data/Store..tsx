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
        pokedex: state.pokedex,
        acertou: state.acertou,
        setNome: (n) => updateState("nome", n),
        setPokedex: (n) => updateState("pokedex", n),
        setAcertou: (n) => updateState("acertou", n),
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default Store;
