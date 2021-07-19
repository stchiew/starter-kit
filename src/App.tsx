import React from 'react';
import './App.css';
import { Clock } from './components/Clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Starter Kit
        </p>
      </header>
      <div>My Stuff Here</div>
      <Clock description='A Clock app here' />
    </div>
  );
}

export default App;
