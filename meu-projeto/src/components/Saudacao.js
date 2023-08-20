import React from 'react'

function Saudacao({nome}) {


  function gerarSaudacao(algumnome) {
    return `ola, ${algumnome}, tudo bem?`
  }


  return (
    <div>{nome && (gerarSaudacao(nome))}</div>
  )
}

export default Saudacao