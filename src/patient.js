import Header from './header.js';
import './patient.css';
import CalendarComponent from './calendar.js';
import 'react-calendar/dist/Calendar.css';
import MedicationList from './medication.js';
import React, { useState } from 'react';



function PatientView() {
  const[streak, setStreak] = useState(0);
  const [medicines, setMedicines] = useState([{ id: 1, title: "Aspirin", completed: false }]);

const updateStreak = () => {
  const today = new Date().toDateString();
  const yesterday = new Date(Date.now() - 86400000).toDateString();
  const lastTaken = localStorage.getItem("lastTakenDate");

  if (lastTaken === yesterday) {
    const newStreak = parseInt(localStorage.getItem("streakCount") || 0) + 1;
    localStorage.setItem("streakCount", newStreak);
    setStreak(newStreak);
  } else if (lastTaken !== today) {
    localStorage.setItem("streakCount", 0);
    setStreak(0);
  }

  localStorage.setItem("lastTakenDate", today);
};

  return (<>
    <Header />
    <div className="container">
      {/* Greeting Section */}
      <div className="greeting-section">
        <h1 className="greet-item ">Good Morning!</h1>
        <p className="greet-item ">Ready to stay on track with your medication?</p>
        <div className="stats-box">
          <div className="text-center">
            <h2 className="stats-item ">{streak}</h2>
            <p className = "stats-item">Day Streak</p>
          </div>
          <div className="text-center">
            <h2 className="stats-item ">0</h2>
            <p className="stats-item ">Today's Status</p>
          </div>
          <div className="text-center">
            <h2 className="stats-item ">0%</h2>
            <p className = "stats-item">Monthly Rate</p>
          </div>
        </div>
      </div>
    </div>
    <div className="dashboard-wrapper">
    {/* Medication Details Section */}
    <MedicationList
     medicines={medicines}
     setMedicines={setMedicines}
     updateStreak={updateStreak}
    />

      {/* Calendar Section */}
      <CalendarComponent />
    </div>

  </>);
};

export default PatientView;


     