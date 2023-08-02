import React from 'react'

export const data = {
    nome: 'leo',
    pokedex: 0
}

const DataContect = React.createContext(data);

export default DataContect;