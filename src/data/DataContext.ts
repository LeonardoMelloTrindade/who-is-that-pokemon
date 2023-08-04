import React from 'react'

export const data = {
    nome: '',
    pokedex: 0,
    acertou: false
}

const DataContect = React.createContext(data);

export default DataContect;
