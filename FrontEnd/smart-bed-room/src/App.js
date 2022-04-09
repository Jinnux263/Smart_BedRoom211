import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import MainMenu from './Components/Pages/MainMenu';
import FanDataHistory from './Components/Pages/FanDataHistory';
import LedDataHistory from './Components/Pages/LedDataHistory';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/fan-data-history" element={<FanDataHistory />} />
          <Route exact path="/led-data-history" element={<LedDataHistory/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
