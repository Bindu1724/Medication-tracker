
import { useNavigate, useLocation } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';

function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  
  // Determine current role based on URL
  const isCaretaker = location.pathname.includes('/caretaker');

  const handleSwitch = () => {
    navigate(isCaretaker ? '/patient/login' : '/caretaker/login');
  };


  return (
    <header style={styles.header}>
      <div style={styles.logoSection}>
        <FaUserCircle style={styles.icon} />
        <h1 style={styles.title}>MediTrack Companion</h1>
      </div>
      <button style={styles.switchButton} onClick={handleSwitch}>
        {isCaretaker ? 'Switch to Patient' : 'Switch to Caretaker'}
      </button>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '16px 24px',
    backgroundColor: '#C8F7C5',
    borderBottom: '2px solid green',
  },
  logoSection: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  icon: {
    fontSize: '40px',
    color: 'green',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'green',
    margin: 0,
  },
  switchButton: {
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    padding: '10px 16px',
    borderRadius: '6px',
    cursor: 'pointer',
    fontWeight: 'bold',
  },
};

export default Header;
