const initialState = {
    hello: "world",
}

const defaultReducer = (state=initialState, action) => {
    switch(action.type){
        case 'TEST':
            return state;
        default:
            return state;
    }
}

export default defaultReducer;