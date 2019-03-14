import { ADD_NAME, GET_DATA } from './actions'

const initState = {
    appointments: []
};

function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_NAME:
            return Object.assign({}, state, {
                name: action.payload
            });
        case GET_DATA:
            return Object.assign({}, state, {
                appointments: action.payload
            });
        default: 
            return state;
    };
};

export default reducer;