import React, { Component } from 'react';

export default class PokemonCard extends Component {
    constructor() {
        super();

        this.state = {
            pokemonName: '',
            pokemonImage: '',
            pokemonDescription: '',
            pokemonTypes: [],
            isClicked: false, // State to manage the click effect
        }
    }

    async componentDidMount() {
        let randomNumber = Math.ceil(Math.random() * 1025);

        // Fetching the Pokémon data
        let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomNumber}`);
        let data = await response.json();

        // Fetching types
        const types = data.types.map(type => type.type.name);

        // Fetching species data to get the description
        let speciesResponse = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${randomNumber}`);
        let speciesData = await speciesResponse.json();

        // Getting the description from the flavor_text_entries array
        const englishDescription = speciesData.flavor_text_entries.find(entry => entry.language.name === 'en');

        this.setState({
            pokemonName: data.name,
            pokemonImage: data.sprites.front_default,
            pokemonTypes: types,
            pokemonDescription: englishDescription ? englishDescription.flavor_text : 'No description available.'
        });
    }

    // Method to handle click event
    handleClick = () => {
        this.setState((prevState) => ({ isClicked: !prevState.isClicked })); // Toggles the description display
    }

    render() {
        const cardClass = this.state.isClicked ? 'pokemonCard clicked' : 'pokemonCard';

        return (
            <div className={cardClass}>
                {
                    this.state.pokemonName && this.state.pokemonImage ?
                        <>
                            <h1>{this.state.pokemonName}</h1>
                            <div onClick={this.handleClick}>
                                <img src={this.state.pokemonImage} alt={this.state.pokemonName} style={{ cursor: 'pointer' }} />
                            </div>
                            {/* Show type and description */}
                            {this.state.isClicked && (
                                <div className="description">
                                    <p><strong>Type:</strong> {this.state.pokemonTypes.join(', ')}</p>
                                    <p><strong>Description:</strong> {this.state.pokemonDescription}</p>
                                </div>
                            )}
                        </>
                        :
                        <h1>Loading...</h1>
                }
            </div>
        )
    }
}