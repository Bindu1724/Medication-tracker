import React, { useState } from 'react';
import { useNavigate, useLocation  } from 'react-router-dom';


function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const location = useLocation();

  // Automatically detect role from URL
  const role = location.pathname.includes('caretaker') ? 'caretaker' : 'patient';


  const handleCaretakerLogin = () => {
    // Simulate login logic
    if ((role=== 'caretaker' && username === 'caretaker' && password === '1234')||
       (role=== 'patient' && username === 'patient' && password === '1234')) {
       const user = { username, role };
       localStorage.setItem('user', JSON.stringify(user));
       navigate(`/${role}`);
    } else {
      alert('Invalid credentials');
    }
  };


  return (
    <div className = "login-Container">
      <h2>{role === 'caretaker' ? 'Caretaker Login' : 'Patient Login'}</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        style={styles.input}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        style={styles.input}
      />
      <button onClick={handleCaretakerLogin} style={styles.button}>
        Login
      </button>
    </div>
  );
}

const styles = {
  input: {
    display: 'block',
    margin: '10px 0',
    padding: '8px',
    width: '200px',
  },
  button: {
    padding: '12px 20px',
    backgroundColor: 'green',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    marginTop: '15px',
  },
};

export default LoginPage;
