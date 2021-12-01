import { useState } from 'react';
import './App.css';

function App() {
  const [count, setCount] = useState(0);

  const [term,setTerm] = useState('')
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <p>Visited {count} times</p>

      <div>
        <button onClick={() => setCount(count + 1)}>Visit</button>
      </div>

      <div>
        <label htmlFor='search'>Search</label>
        <input id='search' type='text' value={term} onChange={e=> setTerm(e.target.value)}></input>
        <div>
           {term}
        </div>
      </div>

    </div>
  );
}

export default App;
