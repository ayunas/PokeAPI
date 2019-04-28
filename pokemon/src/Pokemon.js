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
        console.log(this.props.aPokee.clic)
        return (
            <figure>
                {/* {this.props.aPokee.clicked && <div><img className="pokee" src={this.props.aPokee.avatar} alt='avatar'/></div> } */}
                {this.props.pokemons.map( (pokemon, i) => (
                            <div>
                                <img className="pokee" src={this.props.aPokee.avatar} alt='avatar'/>
                                <figcaption key={i} onClick={() => {
                                    this.setState({clicked : !this.state.clicked});
                                    this.props.detailPokemon(pokemon.url, this.state.clicked);
                                    }}> {pokemon.name} 
                                </figcaption>
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

