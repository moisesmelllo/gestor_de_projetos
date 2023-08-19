import React from 'react'

function Pessoa({nome, idade, profissão}) {
  return (
    <div>
      <h1>Nome: {nome}</h1>
      <p>idade: {idade}</p>
      <p>profissão: {profissão}</p>
    </div>
  )
}

export default Pessoa