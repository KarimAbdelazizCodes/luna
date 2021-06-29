const initialState = {
    hello: "world",
}

const defaultReducer = (state=initialState, action) => {
    switch(action.type){
        case 'STORE_INPUT':
            const form = Object.keys(action.payload)[0];
            const updatedForm = {...state[form], ...action.payload[form]}
            //Check this out It is perfect!
            //console.log({...state, [form]:updatedForm})
            return {...state, [form]:updatedForm};
        default:
            return state;
    }
}

export default defaultReducer;