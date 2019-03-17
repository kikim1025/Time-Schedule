import React from 'react';
import './Day.css';

const Day = (props) => (
    <div id={props.day} className='day' onClick={props.handleHoursHide}>{props.day}</div>
);

export default Day;