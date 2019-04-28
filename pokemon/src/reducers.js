
const initial = {
    pokemons : [],
    aPokee : {
        name : '',
        avatar : '',
        clicked : false
    }
}

function reducer(state=initial ,action) {

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
                    avatar : action.payload.avatar,
                    clicked : action.payload.clicked
                }
            }

        default : 
            return state;
    }
}

export default reducer;
