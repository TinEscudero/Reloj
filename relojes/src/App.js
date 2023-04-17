
import './App.css';
import Reloj from './components/Reloj';
import Cronometro from './components/Cronometro';
import CuentaAtras from './components/CuentaAtras';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        
        <Reloj></Reloj>
      <Cronometro></Cronometro>
      <CuentaAtras></CuentaAtras>
       
      </header>
    </div>
  );
}

export default App;
