import Livro from './components/Livro'
import dadosJSON from './dados.json';
import './App.css';


function App() {
  return (
    <div className="App">
      <Livro dadosJSON={dadosJSON}/> 
    </div>
  );
}

export default App;
