import React, { useState } from 'react';
import { FaEnvelope } from 'react-icons/fa';
import { FaBell } from 'react-icons/fa6';

const Notifications = () => {
  const [emailEnabled, setEmailEnabled] = useState(true);
  const [emailAddress, setEmailAddress] = useState('');
  const [missedAlertsEnabled, setMissedAlertsEnabled] = useState(true);
  const [alertDelay, setAlertDelay] = useState('2 hours');
  const [reminderTime, setReminderTime] = useState('20:00');

  return (
    <div style={styles.container}>
      <h2 style={styles.header}><FaBell  style={{ marginRight: '10px' }}/>Notification Preferences</h2>

      {/* Email Notifications */}
      <div style={styles.section}>
        <h3>Email Notifications</h3>
        <label style={styles.toggleLabel}>
          <input
            type="checkbox"
            checked={emailEnabled}
            onChange={() => setEmailEnabled(!emailEnabled)}
          />
          Enable Email Alerts
        </label>
        {emailEnabled && (
          <input
            type="email"
            value={emailAddress}
            onChange={(e) => setEmailAddress(e.target.value)}
            placeholder="Enter caretaker email"
            style={styles.input}
          />
        )}
      </div>

      {/* Missed Medication Alerts */}
      <div style={styles.section}>
        <h3>Missed Medication Alerts</h3>
        <label style={styles.toggleLabel}>
          <input
            type="checkbox"
            checked={missedAlertsEnabled}
            onChange={() => setMissedAlertsEnabled(!missedAlertsEnabled)}
          />
          Enable Missed Medication Alerts
        </label>
        {missedAlertsEnabled && (
          <>
            <label style={styles.label}>Alert me if medication isn't taken within:</label>
            <select
              value={alertDelay}
              onChange={(e) => setAlertDelay(e.target.value)}
              style={styles.select}
            >
              <option value="1 hour">1 hour</option>
              <option value="2 hours">2 hours</option>
              <option value="3 hours">3 hours</option>
            </select>

            <label style={styles.label}>Daily Reminder Time:</label>
            <input
              type="time"
              value={reminderTime}
              onChange={(e) => setReminderTime(e.target.value)}
              style={styles.input}
            />

            <p style={styles.caption}>Time to check if today's medication was taken</p>
          </>
        )}
      </div>
     <div style={styles.notify}>
        <h2 style={styles.header}><FaEnvelope  style={{ marginRight: '10px' }}/> Notification Preferences</h2>
        <h2 style={styles.subject}>Medication Alert - Patient's Name</h2>
        <p style={styles.greeting}>Hello,</p>
        <p style={styles.message}>
            This is a reminder that <strong>Patient's Name</strong> has not taken her medication today.
        </p>
        <p style={styles.message}>
            Please check with her to ensure she takes her prescribed medication.
        </p>
        <p style={styles.metrics}>
            <strong>Current adherence rate:</strong> <span style={styles.highlight}>85%</span> (
            <span style={styles.streak}>5-day streak</span>)
        </p>
        <button style={styles.button}>Save Notification Settings</button>
    </div>
</div>
  );
};

// 🧩 Styling Object
const styles = {
  container: {
    padding: '20px',
    maxWidth: '900px',
    margin: 'auto',
    backgroundColor: '#f9f9f9',
    borderRadius: '8px',
    fontFamily: 'sans-serif',
    boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
  },
  notify:{
    padding: '5px',
    backgroundColor: '#f9f9f9',
  },
  header: {
    marginBottom: '10px',
    color: 'green',
    marginLeft:'5px',
   
  },
  section: {
    marginBottom: '30px',
    color:'green',
  },
  toggleLabel: {
    display: 'block',
    marginBottom: '10px',
  },
  input: {
    display: 'block',
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },

  select: {
    width: '100%',
    padding: '10px',
    marginBottom: '15px',
    borderRadius: '4px',
    border: '1px solid #ccc',
  },
  label: {
    marginTop: '10px',
    display: 'block',
    marginBottom: '6px',
    fontWeight: 'bold',
  },
  caption: {
    fontSize: '0.9rem',
    color: '#669',
    marginTop: '4px',
  },
  subject: {
    fontSize: '20px',
    marginBottom: '20px',
    color: 'red',
  },
  greeting: {
    fontSize: '16px',
    marginBottom: '10px',
  },
  message: {
    fontSize: '15px',
    lineHeight: '1.6',
    marginBottom: '15px',
  },
  metrics: {
    fontSize: '15px',
    marginBottom: '25px',
  },
  highlight: {
    color: '#27ae60',
    fontWeight: 'bold',
  },
  streak: {
    color: '#2980b9',
  },
  button: {
    backgroundColor: '#27ae60',
    color: '#fff',
    padding: '12px 20px',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },

};

export default Notifications;
