import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

import Contador from './contador.js'

function App() {
  const [contador, setContador] = useState(0);
  const incrementar = () => setContador(contador + 1);
  const resetar = () => setContador(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <Contador value={contador} onResetar={resetar} />

        <button onClick={incrementar}> Incrementar </button>
      </header>
    </div>
  );
}

export default App;
