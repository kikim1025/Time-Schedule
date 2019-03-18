import $ from 'axios';

export const ADD_NAME = 'ADD_NAME';
export const GET_DATA = 'GET_DATA';
export const FAIL_DUP = 'FAIL_DUP';

// login feature with a user's name to redux store
export function addName(payload) {
    return {
        type: ADD_NAME,
        payload
    };
};

// retrieve appointments data from server to redux store
export function getData() {
    return function(dispatch) {
        return (
            $.get('/api/appointments')
            .then((res) => {
                dispatch({ type: 'GET_DATA', payload: res.data.data });
            })
        );    
    };
};

// send appointments request to server, then relay success or duplicate fail response, with refreshed appointments data to store
export function sendAppointment(name, day, hour) {
    return function(dispatch) {
        return (
            $.post('/api/appointments', { name: name, day: day, hour: hour })
            .then((res) => {
                if (res.data.status === 200) {
                    dispatch({ type: 'GET_DATA', payload: res.data.data });
                } else if (res.data.status === 409){
                    dispatch({ type: 'FAIL_DUP', payload: res.data.data });
                };
            })
        );    
    };
};