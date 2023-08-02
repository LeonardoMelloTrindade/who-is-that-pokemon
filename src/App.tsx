import { useState } from "react";
import ContainerPokemon from "./components/containerPokemon/containerPokemon";
import DataContext, { data } from "./data/DataContext";
import "./App.css";

function App() {
  const [pokemon, setPokemon] = useState(data);

  return (
    <DataContext.Provider value={{ pokemon, setPokemon }}>
      <main>
        <section className="container_Pokemon">
          <ContainerPokemon />
        </section>
        <section></section>
      </main>
    </DataContext.Provider>
  );
}

export default App;
