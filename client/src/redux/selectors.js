// This selector is used to process appointments data retrieved from server
// Colors are shown on client schedule UI to represent accesibility of each hour slots
export function selectColor(state, ownProps) {
    for (let e of state.appointments) {
        if (e.name === state.name && e.day === ownProps.day && e.hour === ownProps.hour) {
            return 'green'; // assigned by user
        } else if (e.name !== state.name && e.day === ownProps.day && e.hour === ownProps.hour) {
            return 'red'; // assigned by another user
        };
    };
    return 'white'; // free to assign
};