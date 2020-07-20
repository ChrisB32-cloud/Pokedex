import React, { Component } from 'react';
import Pokedex from './Pokedex';

class Pokegame extends Component {
  static defaultProps = {
    pokemon: [
      { id: 4, name: 'Charmander', type: 'fire', base_experience: 62 },
      { id: 7, name: 'Squirtle', type: 'water', base_experience: 63 },
      { id: 11, name: 'Metapod', type: 'bug', base_experience: 72 },
      { id: 12, name: 'Butterfree', type: 'flying', base_experience: 178 },
      { id: 25, name: 'Pikachu', type: 'electric', base_experience: 112 },
      { id: 39, name: 'Jigglypuff', type: 'normal', base_experience: 95 },
      { id: 94, name: 'Gengar', type: 'poison', base_experience: 225 },
      { id: 133, name: 'Eevee', type: 'normal', base_experience: 65 }
    ]
  };

  render() {
    const { pokemon } = this.props;

    let hand1 = [];
    let hand2 = [...pokemon];
    while (hand1.length < hand2.length) {
      let randIdx = Math.floor(Math.random() * hand2.length);
      let randPokemon = hand2.splice(randIdx, 1)[0];
      hand1.push(randPokemon);
    }

    let hand1Count = 0;
    hand1.map(t => {
      hand1Count = hand1Count + t.base_experience;
    });

    let hand2Count = 0;
    hand2.map(r => {
      hand2Count = hand2Count + r.base_experience;
    });

    let msg;
    if (hand1Count > hand2Count) {
      msg = 'Hand 1 Wins';
    } else {
      msg = 'Hand 2 Wins';
    }

    return (
      <div>
        <h1> {msg} </h1>
        <h2> Hand 1 </h2>
        <Pokedex pokemon={hand1} />
        <h2>Hand 2 </h2>
        <Pokedex pokemon={hand2} />
      </div>
    );
  }
}

export default Pokegame;
