import axios from 'axios';

export function fetchPokemons(url) {
    console.log("fetchPokemon was called from the button in <App>");
    return (dispatch) => {
        dispatch({type: "LOADING"});
        axios.get(url)
             .then( res => {
                 console.log("API response: ", res.data);
                 dispatch({type: "FETCHED", payload: res.data.results})
             })
             .catch( err => {
                 console.log(err);
             })
    }
}


export function detailPokemon(url) {
    // console.log('event', e.target.value);
    console.log('detailPokemon has been triggered');
    console.log('url', url);

    return (dispatch) => {
        dispatch({type: 'LOADING'});
        axios.get(url)
        .then( res => {
            console.log(res);
            dispatch(
                {type: "DETAIL", 
                payload: { 
                    name : res.data.name,
                    avatar: res.data.sprites.front_default
                }
            });
        })
    }
}
