
function reducer(state = {pokemons : []},action) {

    switch(action.type) {
        case "LOADING":
            return {
                ...state,
                loading: true
            }
        
        case "FETCHED":
            return {
                ...state,
                loading: false,
                pokemons: action.payload
            }

        default : 
            return state;
    }
}

export default reducer;
