import React from 'react';
import './App.scss';
import {connect} from 'react-redux';
import {fetchPokemons} from './actions';

import Pokemon from './Pokemon';

function App(props) {
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={() => props.fetchPokemons('https://pokeapi.co/api/v2/pokemon/')}>Fetch Pokemon</button>
        <Pokemon />
      </header>
    </div>
  );
}

export default connect(null,{fetchPokemons})(App);
