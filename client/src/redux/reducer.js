import Actions, {ADD_NAME, ADD_DAY, ADD_HOUR} from './actions'

const initState = {};

function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_NAME:
            return Object.assign({}, state, {
                name: action.payload
            });
        case ADD_DAY:
            return Object.assign({}, state, {
                day: action.payload
            });
        case ADD_HOUR:
            return Object.assign({}, state, {
                hour: action.payload
            });
        default: 
            return state;
    }
}

export default reducer;