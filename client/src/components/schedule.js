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
    // direct redux to dispatch action for retrieving server data
    componentDidMount = () => {
        console.log("mount");
        this.props.getData(); 
    };

    render() {
        return ( 
            <div id='schedule'>
                <div>{this.props.note}</div>
                {   !this.props.appointments
                    ? <div>retrieving data...</div>
                    :   WEEK_DAYS.map((d, i) => ( // give unique keys for each divs inside
                            <div id={d} key={d}> 
                                <Day day={d} key={d+i} />
                                {
                                    DAY_HOURS.map((h) => (
                                        <Hour day={d} hour={h} key={d+h} />
                                    ))
                                }
                            </div>
                        ))
                        
                }
            </div>
        );
    };
}

const mapStateToProps = (state) => {
    return {
        appointments: state.appointments,
        note: state.note
    }
};

const Schedule = connect(mapStateToProps, { getData }) (ConnectSchedule);

export default Schedule;

/*
const mapDispatchToProps = (dispatch) => {
    return {
        getData: () => dispatch(getData())
    }
};

const Schedule = connect(null, mapDispatchToProps) (ConnectSchedule);
 */