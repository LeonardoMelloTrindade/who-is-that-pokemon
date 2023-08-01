import React from 'react'
import './inputPokemon.css'

export default function inputPokemon() {
  return (
    <>
    
        <article className='boxInput'>
        <input
              type="text"
              required={true}
              className="input_pokemon"
            />
        <span className='placeholder'>nome do pokemon</span>
        </article>

    </>
  )
}
