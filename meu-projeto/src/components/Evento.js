import React from 'react'
import Button from './evento/Button_'

function meuEvento() {
   console.log('opa, fui ativado!');
}

function segundoEvento() {
  console.log('opa, segundo evento ativado!');
}

function Evento() {
  return (
    <div>
      <p>Clique para disparar um evento</p>
        <Button event={meuEvento} name={'evento 1'}/>
        <Button event={segundoEvento} name={'evento 2'}/>
    </div>
  )
}

export default Evento