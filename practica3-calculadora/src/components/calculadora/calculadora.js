import React from 'react';
import InputCalculadora from './input-calculadora/input-calculadora'

class Calculadora extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', escala: 'Celsius'};
    }

    toCelsius(fahrenheit) {
        return (fahrenheit - 32) * 5 / 9;
    }

    toFahrenheit(celsius) {
        return (celsius * 9 / 5) + 32;
    }
  
    celsiusChange = (value) => {
      this.setState({escala: 'Celsius', value});
    }

    fahrenheitChange = (value) => {
      this.setState({escala: 'Fahrenheit', value});
    }

    render() {
      const escala = this.state.escala;
      const value = this.state.value;
      const fahrenheit = (escala === 'Celsius') ? this.toFahrenheit(value) : value;
      const celsius = (escala === 'Fahrenheit') ? this.toCelsius(value) : value;
  
      return (
        <div>
          <InputCalculadora
            escala="Celsius"
            value={celsius}
            onChange={this.celsiusChange} />
          <InputCalculadora
            escala="Fahrenheit"
            value={fahrenheit}
            onChange={this.fahrenheitChange} />
        </div>
      );
    }
}
export default Calculadora;