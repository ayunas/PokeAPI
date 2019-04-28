import React from 'react'
import {connect} from 'react-redux'

import {detailPokemon} from './actions';

function Pokemon(props) {
    if (props.pokemons[0]) {
        console.log(props.pokemons[0].url);
    }
  return (
    <figure>
        <img src="#" alt="pokemon"/>
        {props.pokemons.map( (pokemon, i) => (
                    <div>
                        <figcaption key={i}> {pokemon.name} </figcaption>
                        <button onClick={() => props.detailPokemon(pokemon.url)}>Info</button>
                    </div>
                )
            )
        }
    </figure> 
  )
}


function mapStateToProps(state) {
    return {
        pokemons : state.pokemons
    }
}


export default connect(mapStateToProps,{detailPokemon})(Pokemon);

