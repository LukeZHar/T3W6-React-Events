import React, { Component } from 'react';
import './App.css';

export default class App extends Component {
  constructor() {
    super();
    
    this.state = {
      numberOfPokemon: 6
    }
  }

  inceasePokemonNumber = () => {
    this.setState({numberOfPokemon: this.state.numberOfPokemon + 1});
  }

  decreasePokemonNumber = () => {
    if (this.state.numberOfPokemon > 0) {
      this.setState({numberOfPokemon: this.state.numberOfPokemon - 1});
    }
  }

  render() {
    return (
      <>
        <h1>Hello World!</h1>
        <p>My Pokemon Team</p>
        <h5>Number of Pokemon: {this.state.numberOfPokemon}</h5>
        <button onClick={ () => {
          this.inceasePokemonNumber();
        } 
          }>Increase Pokemon Amount</button>
        <button onClick={ () => {
          this.decreasePokemonNumber();
        } 
          }>Decrease Pokemon Amount</button>
      </>
    )
  }
}

