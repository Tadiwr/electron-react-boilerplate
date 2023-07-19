import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import icon from '../../assets/icon.svg';
import './App.css';
import SplashScreen from './screens/Splash';

function StartScreen() {
  return (
    <div>
      <h1>Context Pad</h1>
      <button>Open File</button>
      <p>Recent Files</p>
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />

        {/* LogIn Screen */}
        <Route path="/" element={<SplashScreen />} />
        {/* Start Screen */}
        <Route path="/" element={<StartScreen />} />
        {/* Text Editor */}

      </Routes>
    </Router>
  );
}
