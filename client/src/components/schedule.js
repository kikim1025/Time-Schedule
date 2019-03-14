import React from 'react';
import { connect } from 'react-redux'
import { getData } from '../redux/actions'
import Day from './slot/day'
import Hour from './slot/hour';

// Define weekdays to be shown on schedule, as well as hour heading
const WEEK_DAYS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

// Define specific hours to be shown per day
const DAY_HOURS = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

class ConnectSchedule extends React.Component {
    // only the modal state is stored locally, and all app-wide data is sent to redux store
    state = {
        
    };

    // direct redux to dispatch action for retrieving server data
    componentDidMount = () => {
        console.log("mount");
        this.props.getData(); 
    };

    render() {
        return ( 
            <div id='schedule'>
                { // generate a week schedule(calendar), basically 2-D
                    WEEK_DAYS.map((d, i) => ( // give unique keys for each divs inside
                        <div id={d} key={d}> 
                            <Day day={d} key={d+i} />
                            {
                                DAY_HOURS.map((h) => (
                                    <Hour day={d} hour={h} key={d+h} appointments={this.props.appointments}/>
                                ))
                            }
                        </div>
                    ))
                }
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    }
};

const Schedule = connect(null, mapDispatchToProps) (ConnectSchedule);

export default Schedule;