import './App.css';
import React, { useState, useEffect } from 'react';
import StartScreen from './components/StartScreen';

function App() {
  const begin=10
  const [start, setStart] = useState(begin);
  const [startScreen, setStartScreen] = useState(false);
  if (startScreen) {
    setTimeout(() => {
      setStart(start - 1);

      if (start === 0) {
        setStartScreen(false);
      }
    }, 1000);
  }
  if(start<0){
    setStart(begin+1)
  }

  return startScreen ? (
    <div className="App d-flex flex-column align-items-center justify-content-center">
      <h1 className="number fs-0 "> {start}</h1>
      <h3>GET READY</h3>
    </div>
  ) : (
    <StartScreen startScreen={(e) => setStartScreen(e)} />
  );
}

export default App;
