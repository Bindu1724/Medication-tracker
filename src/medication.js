import React, {useState} from 'react';
import { FaRegCalendar} from 'react-icons/fa';
import { FaRegClock } from 'react-icons/fa';
import './medication.css';

function MedicationList() {
  const [medicines, setMedicines] = useState([{ id: 1, title: "Aspirin", completed: false }]);
  const [newMedicine, setNewMedicine] = useState("");

  function handleInputChange(event) {
    setNewMedicine(event.target.value);
  }

  const addMedicine = () => {
    if (newMedicine === "") {
      alert("Please enter a medicine.");
      return;         // Prevent adding empty tasks
    }

    const newTaskObj = {
      id: medicines.length + 1,   // Simple ID generation
      title: newMedicine,
      completed: false
    };

    setMedicines([...medicines, newTaskObj]);
    setNewMedicine("");           // Clear input field after adding task
  };


  const markAsDone = (id) => {
    setMedicines(prevMedicines =>
      prevMedicines.map(medicine =>
        medicine.id === id ? { ...medicine, completed: !medicine.completed } : medicine
      )
    );
  };

  return (<>
    <div className="medication-wrapper">
      <h2><FaRegCalendar /> Today's Medication</h2>
            <div>
                <input
                    type = "text"
                    placeholder ="Enter a medicine name"
                    value={newMedicine}
                    onChange={handleInputChange}
                />

                <button className="add-button"
                onClick={addMedicine}>
                    Add
                </button>
            </div>
            
            <ol>
            <div className="medication-table">
                {medicines.map(medicine => (
                    <div key={medicine.id} className="medication-row">
                        <div className="column name-column">
                            <input
                            type="checkbox"
                            checked={medicine.completed}
                            onChange={() => markAsDone(medicine.id)}
                            />
                            <span style={{ textDecoration: medicine.completed ? "line-through" : "none" }}>
                                {medicine.title}
                            </span>
                            <span className="time-span">
                                <FaRegClock/> 8:00 AM
                            </span>
                            <button className="mark-button"
                            onClick={() => markAsDone(medicine.id)}>
                                Mark as Taken
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            </ol>
    </div>
        
    </>);
};
export default MedicationList;
