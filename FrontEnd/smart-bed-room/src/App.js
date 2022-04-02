import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Components/Pages/Login';
import MainMenu from './Components/Pages/MainMenu';
import DeviceInformation from './Components/Pages/DeviceInformation';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<MainMenu />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/device-information" element={<DeviceInformation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
