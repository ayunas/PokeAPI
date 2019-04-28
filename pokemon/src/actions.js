import axios from 'axios';

export function fetchPokemons(url) {
    console.log("fetchPokemon was called from the button in <App>");
    return (dispatch) => {
        dispatch({type: "LOADING"});
        axios.get(url)
             .then( res => {
                 console.log(res.data.results);
                 dispatch({type: "FETCHED", payload: res.data.results})
             })
             .catch( err => {
                 console.log(err);
             })
    }
}



