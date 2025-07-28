import React from 'react';
import './MonthlyAdherenceProgress.css';

function MonthlyAdherenceProgress({ taken, missed, remaining }) {
  const total = taken + missed + remaining;
  const progress = Math.round((taken / total) * 100);

  return (
    <div >
      <h2>Monthly Adherence Progress</h2>
      <div className="adherence-bar">
        <div className="adherence-fill" style={{ width: `${progress}%` }}></div>
      </div>
      <div className="adherence-stats">
        <span className="taken">{taken} days Taken</span>
        <span className="missed">{missed} days Missed</span>
        <span className="remaining">{remaining} days Remaining</span>
      </div>
    </div>
  );
};

export default MonthlyAdherenceProgress;