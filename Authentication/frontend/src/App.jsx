import react from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './pages/Login';
import Signup from './pages/Signup';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />  {/* Login page */}
        <Route path="/signup" element={<Signup />} />{/* Signup page */}
      </Routes>
    </Router>
  );
};

export default App;