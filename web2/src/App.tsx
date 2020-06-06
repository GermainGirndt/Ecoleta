// { useState} for using not only the first state of a variable/const, but also the new state
import React, { useState } from 'react';
import './App.css';

// JSX: The X addition allow to write xml syntax (html) inside js

import Header from './Header';

function App() {
  // defining states inside a function
  // uses useState for using not only a the initial vale but also the new value
  const [counter, setCounter] = useState(0); // [state value, function for atualizing the value state]

  function handleButtonClick() {
    // setting new counter value
    setCounter(counter +1);

  }
  return (
    <div>
      {/*  passing in 'Hello World' as title to the Header'*/} 
      <Header title = "Hello World"/>
      <Header title = "Hello World 2"/>
      <h1>Conteúdo da Aplicação</h1>
      {/*  using the const defined in the function */} 
      <h2>{counter}</h2>
      <button type="button" onClick={handleButtonClick}>Aumentar</button>

    </div>
  );
}

export default App;