function Greet (){
    return (
        <>
        {/* Greeting Section */}
      <div className="header-section">
        <h1 className="header-item ">Caretaker DashBoard!</h1>
        <p className="header-item ">Monitoring Patient's Medication</p>
        <div className="stats-box">
          <div className="text-center">
            <h2 className="stats-item ">0%</h2>
            <p className = "stats-item">Adherence Rate</p>
          </div>
          <div className="text-center">
            <h2 className="stats-item ">0</h2>
            <p className="stats-item ">Current Streak</p>
          </div>
          <div className="text-center">
            <h2 className="stats-item ">0</h2>
            <p className = "stats-item">Missed this month</p>
          </div>
          <div className="text-center">
            <h2 className="stats-item ">0</h2>
            <p className = "stats-item">Taken this week</p>
          </div>
        </div>
      </div>
      </>
    );
};
export default Greet;