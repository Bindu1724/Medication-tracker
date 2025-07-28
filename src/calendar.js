import React, { useState } from 'react';
import Calendar from 'react-calendar';
import './calendar.css';
import { FaRegCalendarAlt } from 'react-icons/fa';

function CalendarComponent() {
    const [date, setDate] = useState(new Date());

    const onChange = newDate => {
        setDate(newDate);
    };
    return (<>

        <div className="cal-container">
            <h2 className="cal-icon"><FaRegCalendarAlt /> Medication Calendar</h2>
            <Calendar className="calendar" onChange={onChange} value={date} />
        </div>
    </>);
};

export default CalendarComponent;