import React from 'react'
import Item from '../Item'

function List() {
  return (
    <>
      <h1>Minha Lista</h1>
      <ul>
        <Item marca={'chevrolet'} ano_lancamento={1999}/>
        <Item marca={'Ferrari'} ano_lancamento={2000}/>
        <Item marca={'gol'}/>
        <Item/>
      </ul>
    </>
  )
}

export default List