import React from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {fetchPokemons} from './actions';

import Pokemon from './Pokemon';

function App(props) {
  return (
    <div className="App">
      <img src="https://media0dk-a.akamaihd.net/79/17/f903f1c5d19528ef34fddeaaa681886a.jpg" alt="pokemon"/>
      <button onClick={() => props.fetchPokemons('https://pokeapi.co/api/v2/pokemon/')}>Fetch Pokemon</button>
      <Pokemon />
    </div>
  );
}

export default connect(null,{fetchPokemons})(App);
