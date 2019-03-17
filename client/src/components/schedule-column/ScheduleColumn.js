import React from 'react';
import Day from './slot/Day';
import Hour from './slot/Hour';
import { DAY_HOURS } from '../../constants/constants'
import './ScheduleColumn.css';

class ScheduleColumn extends React.Component {

    // simple local presentational state to track whether a day's schedule is hidden from view
    // each index represents each weekday in order
    // all 'shown' by default, onclick of day => 'hidden'
    state = {
        Monday: false
    };

    render() {
        return (
            <div className='column' key={this.props.d}> 
                <Day day={this.props.d} key={this.props.d+this.props.i} handleHoursHide={this.handleHoursHide}/>
                <div >
                    {
                        DAY_HOURS.map((h) => (
                            <Hour day={this.props.d} hour={h} key={this.props.d+h} />
                        ))
                    }
                </div>
            </div>
        );
    };
};

export default ScheduleColumn;