import React from 'react'

function cadastrar(e) {
  e.preventDefault()
  console.log('cadastrado!');
}

function Form() {
  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrar}>
        <div>
          <input type="text" name="nome" id="nomeid" placeholder='Digite seu nome' />
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form