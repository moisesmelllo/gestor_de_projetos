import { useState } from 'react';


function Form() {

  function cadastrar(e) {
  
    e.preventDefault()
    console.log('cadastrado!');
    console.log(`nome: ${name}`);
    console.log(`senha: ${senha}`);
    
  }

  const [name, Setname] = useState()
  const [senha, Setsenha] = useState()

  return (
    <div>
      <h1>Meu cadastro:</h1>
      <form onSubmit={cadastrar}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input 
            type="text" 
            name="nome" 
            id="nomeid" 
            placeholder='Digite seu nome'
            onChange={(e) => Setname(e.target.name)} />
        </div>
        <div>
          <label htmlFor="name">Senha:</label>
          <input 
            type="password" 
            name="senha"
            id="senhaid"
            placeholder='Digite sua senha' 
            onChange={(e) => Setsenha(e.target.value)}/>
        </div>
        <div>
          <input type="submit" value="Cadastrar" />
        </div>
      </form>
    </div>
  )
}

export default Form