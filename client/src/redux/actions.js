export const ADD_NAME = 'ADD_NAME';
export const ADD_DAY = 'ADD_DAY';
export const ADD_HOUR = 'ADD_HOUR';

export default {
    addName: function(payload) {
        return {
            type: ADD_NAME,
            payload
        }
    },
    addDay: function(payload) {
        return {
            type: ADD_DAY,
            payload
        }
    },
    addHour: function(payload) {
        return {
            type: ADD_HOUR,
            payload
        }
    }
}