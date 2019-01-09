import React, { Component } from 'react';
import Human from './components/Humaaans/human';
import './App.css';

class App extends Component {
  render() {
    return (
      [
          <Human 
            size={600}
            posture='sitting'
            head='Turban2' 
            torso='Hoodie' 
            bottom='BaggyPants'
          />
        ,
          <Human 
            size={600}
            head='Turban2' 
            torso='Hoodie' 
            bottom='Skirt'
            direction='left'
          />
      ]
    );
  }
}

export default App;
