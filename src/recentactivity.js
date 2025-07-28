import React from 'react';
import './recentactivity.css'; // Optional: for cleaner styling

const medicationLog = [
  { day: 'Monday, June 10', time: '8:30 AM', status: 'Completed', photo: true },
  { day: 'Sunday, June 9', time: '8:15 AM', status: 'Completed', photo: false },
  { day: 'Saturday, June 8', time: '', status: 'Missed', photo: false },
  { day: 'Friday, June 7', time: '8:45 AM', status: 'Completed', photo: true },
  { day: 'Thursday, June 6', time: '8:20 AM', status: 'Completed', photo: false },
];

const StatusIcon = ({ status }) => (
  <span style={{ fontSize: '20px', color: status === 'Completed' ? 'green' : 'red' }}>
    {status === 'Completed' ? '✔' : '⚠'}
  </span>
);

const RecentActivity = () => {
  return (
    <div className="activity-container">
      <h2>Recent Medication Activity</h2>
      {medicationLog.map((entry, index) => (
        <div key={index} className="activity-card">
          <div className="left-section">
            <StatusIcon status={entry.status} />
            <div className="text-info">
              <div className="day">{entry.day}</div>
              <div className="time">
                {entry.time ? `Taken at ${entry.time}` : 'Medication missed'}
              </div>
            </div>
          </div>
          <div className="right-section">
            {entry.photo && <button className="photo-btn">View Photo</button>}
            <div className={`status-label ${entry.status.toLowerCase()}`}>{entry.status}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default RecentActivity;

