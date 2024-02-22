import logo from './logo.svg';
import Livro from './components/Livro';
import './App.css';

import cavernas from './livros/cavernas_aco.jpg';
import sol from './livros/sol_desvelado.jpg';
import robos from './livros/robos_alvorada.jpg';

const desc = 'As Cavernas de Aço, de Isaac Asimov, é o primeiro romance da consagrada Série dos Robôs, uma das mais populares da ficção científica. A história nasceu de um desafio: Asimov queria provar para seu editor que a ficção científica não era limitada e poderia ser incorporada a qualquer gênero literário, inclusive nos dramas policiais.'

function App() {
  return (
    <div className="App">
      <Livro 
        titulo="As Cavernas de Aço"
        autor="Isaac Azimov"
        imagem={cavernas}
        descricao={desc}
      /> 

      <Livro 
        titulo="O Sol Desvelado"
        autor="Isaac Azimov"
        imagem={sol}
        descricao={desc}
      /> 

        <Livro 
        titulo="Os Robôs da Alvorada"
        autor="Isaac Azimov"
        imagem={robos}
        descricao={desc}
      /> 
    </div>
  );
}

export default App;
