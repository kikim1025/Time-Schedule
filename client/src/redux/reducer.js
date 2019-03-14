import { ADD_NAME, GET_DATA, FAIL_DUP } from './actions';

const initState = {};

function reducer(state = initState, action) {
    switch (action.type) {
        case ADD_NAME:
            return Object.assign({}, state, {
                name: action.payload
            });
        case GET_DATA:
            return Object.assign({}, state, {
                appointments: action.payload,
                note: ''
            });
        case FAIL_DUP:
            return Object.assign({}, state, { 
                appointments: action.payload,
                note: 'Somebody already signed up for the hour slot between client data retrieval and client data submission. Appointment data refreshed, please pick other time slots.'
            });
        default: 
            return state;
    };
};

export default reducer;