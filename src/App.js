import React, { Component } from 'react';
import FlavorForm from './flavor-form';
import NameForm from './name-form';
import Reservation from './reservation';
import Calculator from './calculator';
import SittingHuman from './sitting-human';
import './App.css';


function NumberList(props) { const numbers = props.numbers; const listItems = numbers.map((number, index) =>
    <li key={index}> {number*5} </li>);
  return (
    <ul>{listItems}</ul>
  );
}
const numbers = [1, 2, 5, 4, 5];

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>Hello World</p>
          <NumberList numbers={numbers} />
          <NameForm />
          <FlavorForm />
          <Reservation />
          <Calculator />
          <SittingHuman head='Curly' torso='Hoodie' bottom='BaggyPants'/>
        </header>
      </div>
    );
  }
}

export default App;
