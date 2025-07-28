import { FaUser } from 'react-icons/fa';
import { FaUserDoctor } from 'react-icons/fa6';
import { useNavigate } from 'react-router-dom';

function MedCheck(){
    const navigate = useNavigate();

    const handleCaretakerClick = () => {
        navigate('/caretaker/login');
  };
    const handlePatientClick = () => {
        navigate('/patient/login');
    };

    return (<>
        <div className = "medcheck">
            <h1>Welcome to MediTrack</h1>
            <p>Your personal assistant for timely medication reminders.</p>
        </div>
        <div className = "grid-container">
            <div className="grid-row1">
                <div style={{ color: 'green', fontSize: '24px' }}>
                    <FaUser/>
                </div>

                <h2>I'm a Patient</h2>
                <p>Gentle reminders for your medication, and a safe space for your health records.</p>
                <ul>
                    <li>Set up medication reminders</li>
                    <li>Track your medication intake</li>
                    <li>Receive notifications for missed doses</li>
                </ul>
                <button onClick={handlePatientClick} style={styles.button}>
                    Continue as Patient
                </button>
            </div>
            <div className="grid-row2">
                <div style={{ color: 'green', fontSize: '24px' }}>
                    <FaUserDoctor/>
                </div>
                <h2>I'm a Caretaker</h2>
                <p>Monitor and support your loved one's medication needs.</p>
                <ul>
                    <li>Receive email alerts</li>
                    <li>Monitor medication adherence</li>
                    <li>View detailed reports</li>
                </ul>
                <button onClick={handleCaretakerClick} style={styles.button}>
                    Continue as Caretaker
                </button>
            </div>
        </div>
        <p className = "para">You can switch roles anytime after setup.</p>
        </>
    );

}
const styles = {
  button: {
    background: 'rgb(2, 123, 2)',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    padding: '1rem 1.5rem',
    fontSize: '1rem',
    cursor: 'pointer',
    transition: 'background 0.2s',
    marginTop: '1.5rem',
  },
  buttonHover: {
    background: 'rgba(2, 123, 2, 0.834)',
  },
};


export default MedCheck;