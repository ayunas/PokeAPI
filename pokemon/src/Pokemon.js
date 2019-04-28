import React from 'react'
import {connect} from 'react-redux'

function Pokemon(props) {
    console.log("Props.Pokemons", props.pokemons);
  return (
    <figure>
        <img src="#" alt="pokemon"/>
        {props.pokemons.map( pokemon => <figcaption>{pokemon.name}</figcaption>)}
    </figure>
  )
}

function mapStateToProps(state) {
    return {
        pokemons : state.pokemons
    }
}


export default connect(mapStateToProps,null)(Pokemon);

