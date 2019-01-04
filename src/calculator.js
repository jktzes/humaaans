import React, { Component } from 'react';

function BoilingWizard(props) {
  if (Number.isNaN(props.celsius)) {
    return <p>Schrodinger's boilding water.</p>
  } else if (props.celsius >= 100) {
    return <p>The water is freaking hot!</p>
  } else {
    return <p>The water is not boiling.</p>
  }
}

function toCelsius(fahrenheit) {
  return(fahrenheit - 32) * 5 / 9;
}

function toFahrenheit(celsius) {
  return(celsius * 9 / 5) + 32;
}

function tryConvert(temperature, convert) {
  const input = parseFloat(temperature);
  if (Number.isNaN(input)) {
    return '';
  }
  const output = convert(input);
  const rounded = Math.round(output * 1000) / 1000;
  return rounded.toString();
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
};

class TemperatureInput extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onTemperatureChange(e.target.value);
  }

  render() {
    const temperature = this.props.temperature;
    const scale = this.props.scale;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input value={temperature} 
               onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.handleCelsiusChange = this.handleCelsiusChange.bind(this);
    this.handleFahrenheitChange = this.handleFahrenheitChange.bind(this);
    this.state = {temperature: '', scale: 'c'};
  }

  handleCelsiusChange(temperature) {
    this.setState({scale: 'c', temperature});
  }

  handleFahrenheitChange(temperature) {
    this.setState({scale: 'f', temperature});
  }

  render() {
    const scale = this.state.scale;
    const temperature = this.state.temperature;
    const celsius = scale === 'f' ? tryConvert(temperature, toCelsius) : temperature;
    const fahrenheit = scale === 'c' ? tryConvert(temperature, toFahrenheit) : temperature;

    return(
    <div>
      <TemperatureInput 
        scale="c"
        temperature={celsius}
        onTemperatureChange={this.handleCelsiusChange} />

      <TemperatureInput 
        scale="f"
        temperature={fahrenheit}
        onTemperatureChange={this.handleFahrenheitChange} />

      <BoilingWizard
        celsius={parseFloat(celsius)} />
    </div>
    )
  }
}

export default Calculator;
