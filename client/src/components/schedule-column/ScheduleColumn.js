import React from 'react';
import Day from './slot/Day';
import Hour from './slot/Hour';
import { DAY_HOURS } from '../../constants/constants'
import './ScheduleColumn.css';

class ScheduleColumn extends React.Component {

    // local state to keep track of hours column hiding
    state = {
        hours: 'shown'
    };

    handleHoursHide = () => {
        this.setState(this.state.hours === 'hidden' ? { hours: 'shown' } : {hours: 'hidden'});
    };

    render() {
        return (
            <div className='column' key={this.props.d}> 
                <Day day={this.props.d} key={this.props.d+this.props.i} handleHoursHide={this.handleHoursHide}/>
                <div className={`hours ${this.state.hours}`}>
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