import logo from './logo.svg';
import './App.css';
import Card from './components/card.component';
import React, {useState} from 'react';


function App() {

  const [count, setCount] = useState(4);

  function decrementCount(){
    setCount(prevCount => prevCount - 1);
  }


  function incrementCount(){
    setCount(prevCount => prevCount + 1);
  }
  return (
    <div className="App">
      <Card title= {'hello world!'}/>
      <Card title= {'goodbye world!'}/>
      <button onClick={decrementCount}> -</button>
      <span>{count}</span>
      <button onClick={incrementCount}>+</button>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React !!
        </a>
      </header>
    </div>
  );
}

export default App;
