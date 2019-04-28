
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
        
        case "DETAIL":
            return {
                ...state,
                loading: false,
                aPokee : {
                    name : action.payload.name,
                    avatar : action.payload.avatar
                }
            }

        default : 
            return state;
    }
}

export default reducer;
