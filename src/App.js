import React from 'react';
import Nav from './components/Nav';
import './App.scss';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <Nav />
      </div>
      <div className="musicControls">music controls</div>
    </div>
  );
}

export default App;
