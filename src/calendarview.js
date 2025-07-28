import { useState } from 'react';
import { FaRegCalendarAlt } from 'react-icons/fa';
import Calendar from 'react-calendar';


function CalendarView() {
  const [date, setDate] = useState(new Date());

    const onChange = (newDate) => {
        setDate(newDate);
    };
    return (<>
        <div style = {styles.calContainer}>
            <h2 style = {styles.calendarIcon}><FaRegCalendarAlt /> Medication Calendar</h2>
            <Calendar style = {styles.cal} onChange={onChange} value={date} />
        </div>
    </>
  );
};

export default CalendarView;

const styles = {
  calContainer: {
    backgroundColor: '#e1e9f054',
    marginTop: '2rem',
    borderRadius: '8px',
    padding:'12px',
    position: 'absolute',
    top: '94%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',

    
},
  calendarIcon : {
    display: 'flex',
    alignItems: 'center'

    
    
},
  cal: {
    marginLeft:'50px',
},
};


