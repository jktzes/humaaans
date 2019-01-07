import React, { Component } from 'react';
import SittingHuman from './sitting-human';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <SittingHuman 
            head='Turban2' 
            torso='Hoodie' 
            bottom='BaggyPants'
            posture='sitting'
            direction='right'
          />
        </header>
      </div>
    );
  }
}

export default App;
