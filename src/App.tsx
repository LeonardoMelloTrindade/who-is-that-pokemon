import { useEffect } from 'react'
import PokemonService from './services/pokemon.service'
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
      <div className='bgPokemon'>
        
      </div>
    </>
  )
}

export default App
