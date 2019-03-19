import { ADD_NAME, GET_DATA, FAIL_DUP, FAIL } from '../constants/constants';

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
                note: 'Another client already signed up for the hour slot during your data retrieval and data submission. Appointment data refreshed, please pick other time slots.'
            });
        case FAIL:
            return Object.assign({}, state, { 
                note: 'ERROR'
            });
        default: 
            return state;
    };
};

export default reducer;