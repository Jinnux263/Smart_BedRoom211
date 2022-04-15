import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import MainMenu from './Components/Pages/MainMenu';
import FanDataHistory from './Components/Pages/FanDataHistory';
import LedDataHistory from './Components/Pages/LedDataHistory';
import RoomDataHistory from './Components/Pages/RoomDataHistory';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/fan-data-history" element={<FanDataHistory />} />
          <Route exact path="/led-data-history" element={<LedDataHistory/>} />
          <Route exact path="/room-data-history" element={<RoomDataHistory/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
