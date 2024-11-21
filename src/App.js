import React, { Component } from 'react';
import './App.css';
import PokemonCard from './components/PokemonCard';

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
        } }>Decrease Pokemon Amount</button>
        {
          // Creats an array of given length
          Array(this.state.numberOfPokemon)
          // Fills the array with null
          .fill(null)
          // Maps over the array and places the component
          .map((element, index) => {
            return <PokemonCard key={index}/>
          })
        }
      </>
    )
  }
}

