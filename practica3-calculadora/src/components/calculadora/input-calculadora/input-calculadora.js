import React from 'react';

class InputCalculadora extends React.Component {

    constructor(props) {
      super(props);
    }
  
    handleChange = (e) => {
      this.props.onChange(e.target.value);
    }
  
    render() {
      const value = this.props.value;
      const escala = this.props.escala;
      return (
              <div>
                <label>Ingrese la Temperatura en  <b>{escala}</b>: </label>
                <input type="text" value={value} onChange={this.handleChange} />
              </div>
      );
    }
}
export default InputCalculadora;