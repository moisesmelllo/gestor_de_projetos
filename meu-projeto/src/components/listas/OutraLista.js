import React from 'react'

function OutraLista({itens}) {
  return (
    <>
      <h3>Lista de coisas boas: </h3>
      <div>
        {itens.length > 0 ? (
          itens.map((item, index) => (
            <p key={index}>{item}</p>
          ))) : (
            <p>Não ha itens na lista!</p>
          )
        }
      </div>
    </>
  )
}

export default OutraLista