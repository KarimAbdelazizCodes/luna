const initialState = {
    hello: "world",
    topRestaurants: [],
    searchResults: [],
    categories: []
}

const defaultReducer = (state=initialState, action) => {
    switch(action.type){
        case 'STORE_INPUT':
            const form = Object.keys(action.payload)[0];
            const updatedForm = {...state[form], ...action.payload[form]}
            //Check this out It is perfect!
            //console.log({...state, [form]:updatedForm})
            return {...state, [form]:updatedForm};
        case 'TOP_RESTAURANTS':
            return {...state, topRestaurants: action.payload}
        case 'SEARCH_RESULTS':
            return {...state, searchResults: action.payload}
        case 'CATEGORIES':
            return {...state, categories: action.payload}
        default:
            return state;
    }
}

export default defaultReducer;