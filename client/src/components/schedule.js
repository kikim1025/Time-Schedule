import React from 'react';
import Day from './slot/day'
import Hour from './slot/hour';

// Define weekdays to be shown on schedule, as well as hour heading
const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

// Define specific hours to be shown per day
const DAY_HOURS = ['9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm'];

class Schedule extends React.Component {
    // only the modal state is stored locally, and all app-wide data is sent to redux store
    state = {
        
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

export default Schedule;