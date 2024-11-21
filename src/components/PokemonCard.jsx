import React, { Component } from 'react';

export default class PokemonCard extends Component {
    constructor() {
        super();

        this.state = {
            pokemonName: '',
            pokemonImage: ''
        }
    }

    async componentDidMount() {
        let randomNumber = Math.ceil(Math.random() * 1025);

        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        let data = await response.json();

        this.setState({
            pokemonName: data.name,
            pokemonImage: data.sprites.front_default
        })
    }

    render() {
        return (
            // Group the elements in the block
            <div className="pokemonCard">
                {/* // Recieve the data from the API
                // We can create a loading content (Conditional rendering) */}
                {
                    // Ternary operator
                    // Condition check
                    this.state.pokemonName && this.state.pokemonImage ? 
                    // if true, Render content here
                    <>
                        <h1>{this.state.pokemonName}</h1>
                        <img src={this.state.pokemonImage} alt={this.state.pokemonName}/>
                    </>
                    :
                    // if false, Render content here
                    <h1>Loading...</h1>
                }

            </div>
        )
    }
}