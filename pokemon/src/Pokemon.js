import React from 'react'
import {connect} from 'react-redux'

import {detailPokemon} from './actions';

class Pokemon extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            clicked : false
        }
    }
    
    render() {
        return (
            <figure>
                {this.props.pokemons.map( (pokemon, i) => (
                            <div>
                                <figcaption key={i} onClick={() => {
                                    this.setState({clicked : !this.state.clicked});
                                    this.props.detailPokemon(pokemon.url, this.state.clicked);
                                    }}> {pokemon.name} </figcaption>
                                {/* <button onClick={() => props.detailPokemon(pokemon.url)}>Show</button> */}
                                {this.props.aPokee.clicked && <div><img src={this.props.aPokee.avatar} /></div> }
                            </div>
                        )
                    )
                }
            </figure> 
          )
    }
}


function mapStateToProps(state) {
    return {
        pokemons : state.pokemons,
        aPokee : state.aPokee
    }
}


export default connect(mapStateToProps,{detailPokemon})(Pokemon);

