import React from 'react';
import logo from './logo.svg';
import './App.css';
import WorkTimer from './components/WorkTimer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Work Timer</h1>
        <WorkTimer />
      </header>
    </div>
  );
}

export default App;
