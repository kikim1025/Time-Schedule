import React from 'react';
import './Day.css';

const Day = (props) => ( //id={props.day} for special UI
    <div className='day' onClick={props.handleHoursHide}>{props.day}</div>
);

export default Day;