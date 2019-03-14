/*
// This selector is used to process appointments data retrieved from server
export function selectColor(state, ownProps) {
    console.log("hiya");
    console.log(state);
    return "asdf";
};
*/

export function selectColor(state, ownProps) {
    if (state.appointments) {
        console.log(state);
        let color = 'white';
        state.appointments.forEach(e => {
            if (e.name === ownProps.name) {
                color = 'green';
            } else if (e.day === ownProps.day && e.hour === ownProps.hour) {
                color = 'red';
            }
        });
        return color;
    } else {
        console.log("dam!")
        return 'white';
    }
};