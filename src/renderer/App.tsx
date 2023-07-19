import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';

function StartScreen() {
  return (
    <div>
      <h1>Welcome to Context Pad! ✍️</h1>
      <button> Log In </button>
      <p>Continue without loging in 👍</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartScreen />} />

        {/* LogIn Screen */}
        {/* Start Screen */}
        {/* Text Editor */}

      </Routes>
    </Router>
  );
}
