import React from 'react';
import './Day.css';

const Day = (props) => ( //id={props.day} for special ui later if i want
    <div className='day' onClick={props.handleHoursHide}>{props.day}</div>
);

export default Day;