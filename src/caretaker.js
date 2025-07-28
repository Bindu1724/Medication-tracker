import Header from './header.js';
import './caretaker.css';
import Notifications from './notifications.js';
import CalendarView from './calendarview.js'
import RecentActivity from './recentactivity.js';
import Overview from './overview.js';
import Greet from './greet.js';
import { useState } from 'react';



function CaretakerView(){
  const [activeTab, setActiveTab] = useState("Overview");

    return (<>
      <Header /> 
      <Greet />
<div className="tab-items">
  <button
    className={`icons ${activeTab === "Overview" ? "active-tab" : ""}`}
    onClick={() => setActiveTab("Overview")}
  >
    Overview
  </button>
  <button
    className={`icons ${activeTab === "RecentActivity" ? "active-tab" : ""}`}
    onClick={() => setActiveTab("RecentActivity")}
  >
    Recent Activity
  </button>
  <button
    className={`icons ${activeTab === "CalendarView" ? "active-tab" : ""}`}
    onClick={() => setActiveTab("CalendarView")}
  >
    Calendar View
  </button>
  <button
    className={`icons ${activeTab === "Notifications" ? "active-tab" : ""}`}
    onClick={() => setActiveTab("Notifications")}
  >
    Notifications
  </button>
</div>

      <div>
        {activeTab === "Overview" ? <Overview /> : ''} 
        {activeTab === "RecentActivity" ? <RecentActivity /> : ''}
        {activeTab === "CalendarView" ? <CalendarView /> : ''}
        {activeTab === "Notifications" ? <Notifications /> : ''}
        
      </div>
    </>);
};

export default CaretakerView;
