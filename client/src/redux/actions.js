import $ from 'axios';

export const ADD_NAME = 'ADD_NAME';
export const GET_DATA = 'GET_DATA';

export function addName(payload) {
    return {
        type: ADD_NAME,
        payload
    };
}

export function getData() {
    return function(dispatch) {
        return (
            $.get('/api/appointments')
            .then((res) => {
                if (res.data.status === 200) {
                    dispatch({ type: 'GET_DATA', payload: res.data.data });
                }
            })
        );    
    };
}