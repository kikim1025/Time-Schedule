import React from 'react';
import Day from './slot/Day';
import Hour from './slot/Hour';
import { DAY_HOURS } from '../constants/constants'

class ScheduleColumn extends React.Component {

    // simple local presentational state to track whether a day's schedule is hidden from view
    // each index represents each weekday in order
    // all 'shown' by default, onclick of day => 'hidden'
    state = {
        Monday: false
    };

    render() {
        return (
            <div className='schedule__col'key={d}> 
                <Day day={d} key={d+i} handleHoursHide={this.handleHoursHide}/>
                <div >
                    {
                        DAY_HOURS.map((h) => (
                            <Hour day={d} hour={h} key={d+h} />
                        ))
                    }
                </div>
            </div>
        );
    };
};