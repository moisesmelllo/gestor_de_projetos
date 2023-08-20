import React from 'react'

function Saudacao({nome}) {


  function gerarSaudacao(algumnome) {
    return `ola, ${algumnome}, tudo bem?`
  }


  return (
  <>
    {nome && <div>{gerarSaudacao(nome)}</div>}
    </>
  )
}

export default Saudacao