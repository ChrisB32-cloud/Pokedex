import React, { Component } from 'react';
import './Pokecard.css';

// const poke_Api =
//   'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/';

const poke_Api = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/';

let padToThree = number => (number <= 999 ? `00${number}`.slice(-3) : number);

class Pokecard extends Component {
  render() {
    const { id, name, type, exp } = this.props;
    let imgScr = `${poke_Api}${padToThree(id)}.png`;
    // console.log(poke_Api);

    return (
      <div className="poke-card">
        <h3 className="pokecard-title">{name}</h3>
        <img alt={name} src={imgScr} />
        <p className="pokecard-data">Type: {type}</p>
        <p className="pokecard-data">Exp: {exp}</p>
      </div>
    );
  }
}

export default Pokecard;
