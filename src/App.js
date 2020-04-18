import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="outerWrap">
      <div className="App">
        <div className="navBar">
          <div className="logo">
            logo
          </div>
          <ul>
            <li>Home</li>
            <li>Search</li>
            <li>Library</li>
          </ul>
        </div>
      </div>
      <div className="musicControls">music controls</div>
    </div>
  );
}

export default App;
