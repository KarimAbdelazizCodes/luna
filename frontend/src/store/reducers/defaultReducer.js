const initialState = {
    hello: "world",
    token: '',
    topRestaurants: [],
    searchResults: [],
    categories: [],
    userData: [],
    restaurant: {},
    reviews: [],
    comments: [],
    userReviews: [],
}

const defaultReducer = (state=initialState, action) => {
    switch(action.type){
        case 'STORE_INPUT':
            const form = Object.keys(action.payload)[0];
            const updatedForm = {...state[form], ...action.payload[form]}
            //Check this out It is perfect!
            //console.log({...state, [form]:updatedForm})
            return {...state, [form]:updatedForm};

        case 'ADD_TOKEN':
            return {...state, token: action.payload}
        case 'TOP_RESTAURANTS':
            return {...state, topRestaurants: action.payload}
        case 'SEARCH_RESULTS':
            return {...state, searchResults: action.payload}
        case 'CATEGORIES':
            return {...state, categories: action.payload}
        case 'USERDATA':
            return {...state, userData: action.payload}
        case 'USERREVIEWS':
            return {...state, userReviews: action.payload}
        case 'RESTAURANT':
            return {...state, restaurant: action.payload}
        case 'RESTAURANT_REVIEWS':
            return {...state, reviews: action.payload}
        case 'REVIEW_COMMENTS':
            return {...state, comments: action.payload}
        case 'NEW_COMMENT':
            return {...state, comments: [action.payload, ...state.comments]}
        case 'DROP_KEY':
            //console.log(action.payload)
            return {...state, dropKey: action.payload}
        default:
            return state;
    }
}

export default defaultReducer;