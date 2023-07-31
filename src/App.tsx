import { useEffect } from 'react'
import PokemonService from './services/pokemon.service'
import ContainerPokemon from './components/containerPokemon/containerPokemon'
import './App.css'


function App() {
  const pokemonService = new PokemonService()

  useEffect(() => {
    pokemonService
      .getPokemons()
      .then((pokemon:object ) => {
        console.log(pokemon);
      })
      .catch((error: Error) => {
        console.error("Ocorreu um erro ao obter os jogos:", error);
      });
    }, [])
  return (
    <>
     <main>

        <section className='container_Pokemon'>
          <ContainerPokemon/>
        </section>
        <section>
               
        </section>

     </main>
    </>
  )
}

export default App
