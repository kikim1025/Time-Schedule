import React from 'react';
import { connect } from 'react-redux';
import { getData } from '../redux/actions';
import ScheduleColumn from './schedule-column/ScheduleColumn';
import { WEEK_DAYS } from '../constants/constants'
import './Schedule.css';

class ConnectSchedule extends React.Component {

    // direct redux to dispatch action for retrieving server data
    componentDidMount = () => {
        this.props.getData(); 
    };

    render() {
        return ( 
            <div>
                <div id='schedule-note'>{this.props.note}</div>
                {   !this.props.appointments
                    ?   <div>retrieving data...</div>
                    :   <div id='schedule'>
                            {
                                WEEK_DAYS.map((d, i) => (
                                    <ScheduleColumn d={d} i={i} />
                                ))
                            }
                        </div>
                }
            </div>
        );
    };
};

const mapStateToProps = (state) => {
    return {
        appointments: state.appointments,
        note: state.note
    };
};

const Schedule = connect(mapStateToProps, { getData }) (ConnectSchedule);

export default Schedule;