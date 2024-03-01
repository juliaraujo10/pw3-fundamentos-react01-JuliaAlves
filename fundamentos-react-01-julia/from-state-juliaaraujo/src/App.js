import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  // ESTADO DE DADOS DE NOME
  const [nome, setNome] = useState("");

  // ESTADO DE DADOS DE E-MAL
  const [email, setEmail] = useState("");

  // ESTADO DE DADOS DE SENHA
  const [senha, setSenha] = useState("");

  function cadastrarUsuario(event){
    event.preventDefault();
  // alert('TESTE DE SUBMIT!');
  alert(`NOME: ${nome} E-MAIL: ${email} SENHA: ${senha}`)
}

  // FUNÇÃO DE CADASTRAR
  return (
    <div className="App">

      <form onSubmit={cadastrarUsuario} className='form'>


        <h1>FORMULÁRIO DE CADASTRO</h1>

        <input
          type = 'text'
          placeholder='Digite seu nome'
          required
          value={nome}
          onChange={(event) => {setNome(event.target.value)}}
          />

        <input
          type = 'email'
          placeholder='Digite seu email'
          required
          value={email}
          onChange={(event) => {setEmail(event.target.value)}}
          />

        <input
          type = 'password'
          placeholder='Digite sua senha'
          required
          value={senha}
          onChange={(event) => {setSenha(event.target.value)}}
          />

          <button type='submit'>CADASTRAR</button>

</form>
</div>
);
}

export default App;
