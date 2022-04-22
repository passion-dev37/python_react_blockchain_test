import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  const [inputA, setInputA] = useState("")
  const [inputB, setInputB] = useState("")

  const check = () => {
    if( inputA !== inputB ) {
      alert("Not Same Input")
    } else {
        alert("Same Input!")
    }
  }
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}

        <div className='checkinput'>
          <input className='form-control mt-5 mb-5' onChange={(e) => setInputA(e.target.value)} value={inputA} />
          <input className='form-control mt-5 mb-5' onChange={(e) => setInputB(e.target.value)} value={inputB} />
          <button onClick={check} className='btn btn-warning'>Check</button>
        </div>
      </header>
    </div>
  );
}

export default App;
