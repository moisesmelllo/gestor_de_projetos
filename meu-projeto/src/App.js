import './App.css';
import HelloWorld from './components/HelloWorld';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import PrimeiraFrase from './components/PrimeiraFrase'

function App() {
  return (
    <div className="App">
      <h1>testando</h1>
      <HelloWorld />
      <SayMyName nome='Matheus'/>
      <SayMyName nome='Moises' />
      <SayMyName nome='Marcos' />
      <SayMyName nome='Vitoria'/>
      <Pessoa nome='moises' idade='22' profissão='dev web' />
      <PrimeiraFrase />
    </div>
  );
}

export default App;
