import React from 'react';
import './App.css';
import CounterContainer from './Container/CounterContainer'
import TodosContainer from './Container/TodosContainer'


function App() {
  return (
    <div className="App">
      <CounterContainer/>
      <hr/>
      <TodosContainer/>
    </div>
  );
}

export default App;
