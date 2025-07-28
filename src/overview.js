
import './overview.css'; 
import { FaCalendar } from 'react-icons/fa';
import { FaEnvelope } from 'react-icons/fa';
import { FaCog } from 'react-icons/fa';
import MonthlyAdherenceProgress from './monthlyadherence';

function Overview() {
  return (
  
        <div className="dashboard-row">
          <div className="card status-card">
            <h2><FaCalendar />Today's Status</h2>
            <div className="status-content">
              <div className="task-label">Daily Medication Set</div>
              <div className="task-time">8:00 AM</div>
              <span className="status-badge pending">Pending</span>
            </div>
          </div>
          <div className="card adherence-card">
            <MonthlyAdherenceProgress taken={22} missed={3} remaining={5}/>
          </div>
          <div className="card actions-card">
            <h2>Quick Actions</h2>
            <div className="action-buttons">
            <button><FaEnvelope className="icon"/>Send Reminder Email</button>
            <button><FaCog className="icon"/>Configure Notifications</button>
            <button><FaCalendar className="icon"/>View Full Calendar</button>
            </div>
          </div>
        </div>
      
  );
};

export default Overview;
