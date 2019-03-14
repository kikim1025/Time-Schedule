// This selector is used to process appointments data retrieved from server
export function selectColor(state, ownProps) {
    for (let e of state.appointments) {
        if (e.name === state.name && e.day === ownProps.day && e.hour === ownProps.hour) {
            return 'green';
        } else if (e.name !== state.name && e.day === ownProps.day && e.hour === ownProps.hour) {
            return 'red';       
        };
    };
    return 'white';
};