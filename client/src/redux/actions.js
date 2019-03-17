import $ from 'axios';

export const ADD_NAME = 'ADD_NAME';
export const GET_DATA = 'GET_DATA';
export const FAIL_DUP = 'FAIL_DUP';

export function addName(payload) {
    return {
        type: ADD_NAME,
        payload
    };
};

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