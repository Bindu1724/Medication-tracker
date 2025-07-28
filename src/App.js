import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginPage from './loginpage.js';
import CaretakerView from './caretaker.js'; // new page component
import MedCheck from './med_check.js';
import PatientView from './patient.js'; 
import Header from './header.js'; // import the header component


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MedCheck />} />
        <Route path="/patient/login" element={<LoginPage />} />
        <Route path="/caretaker/login" element={<LoginPage />} />
        <Route path="/patient" element={<PatientView />} />
        <Route path="/caretaker" element={<CaretakerView />} />

      {/* Header included only on these pages */}
        <Route path="/caretaker" element={<> <Header /> <CaretakerView /> </>} />
        <Route path="/patient" element={<> <Header /> <PatientView /> </>} />
      </Routes>
    </Router>
  );
}

export default App;

