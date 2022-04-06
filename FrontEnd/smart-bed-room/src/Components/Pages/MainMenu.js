import React, { useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/MainMenu.css'
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiTempHotLine } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useState } from 'react';
import { Data } from '../../Context';
import {
    Link
} from 'react-router-dom';
import {TiArrowMaximiseOutline, TiWeatherSunny} from 'react-icons/ti';
import axios from 'axios';
export default function MainMenu() {

  const [humanDetect, setHumanDetect] = useState("");
  const [bright, setBright] = useState("");
  const [ledstatus, setLedstatus] = useState({isOn: false, isAuto: false});
  const [fanstatus, setFanstatus] = useState({isOn: false, isAuto: false});
  const [roomstatus, setRoomstatus] = useState({humidity : 0,
    brightness : 0,
    hasHuman: 0,
    temperature: 0})
	
  const SwitchFan = () => {
    axios.post('http://localhost/8000/fan', 
    fanstatus).then(response => console.log(response));
    var check = document.getElementById("autoFan").checked;
    if (check) document.getElementById("autoFan").checked = false;
  };
  const SwitchAutoFan = () => {
    axios.post('http://localhost/8000/fan', 
    fanstatus).then(response => console.log(response));
};
  const SwitchLed = () => {
    axios.post('http://localhost/8000/bulb', 
    ledstatus).then(response => console.log(response));
    var check = document.getElementById("autoLed").checked;
    if (check) document.getElementById("autoLed").checked = false;
  };
  const SwitchAutoLed = () => {
    axios.post('http://localhost/8000/bulb', 
    ledstatus).then(response => console.log(response));
};

  useEffect(() => {
    fetch(`http://localhost/8000/room`)
    .then((res) => res = res.json())
    .then((res) => {
        setRoomstatus(res.humidity, res.brightness, res.hasHuman, res.temperature);
        if (res.brightness == 0) {
            setHumanDetect("Has people");
        } else {
            setHumanDetect("No people");
        }
        if (res.brightness == 1) {
            setBright("Bright");
        } else {
            setBright("Dark");
        }
        console.log(res);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost/8000/fan`)
    .then((res) => res = res.json())
    .then((res) => {
        setFanstatus(res.isOn, res.isAuto);
        document.getElementById("fan").checked = res.isOn ? true : false;
        document.getElementById("autoFan").checked = res.isAuto ? true : false;
        console.log(res);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost/8000/bulb`)
    .then((res) => res = res.json())
    .then((res) => {
        setLedstatus(res.isOn, res.isAuto);
        document.getElementById("led").checked = res.isOn ? true : false;
        document.getElementById("autoLed").checked = res.isAuto ? true :false;
        console.log(res);
    })
    .catch((err) => console.log(err));
  }, []);

  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  if (today.getHours() < 10) hour = "0" + hour;
  if (today.getMinutes() < 10) minute = "0" + minute;
  var displayTime = hour + ':' + minute;
  return (
      <div>
        <div className="container-fluid">
        <div className='row' style={{marginTop: "20px"}}>
            <div className='col-md-3'><h1>{displayTime}</h1></div>
            <div className='col-md-6'>
            </div>
            <div className='col-md-3'>
            {!state.isLoggedIn ? (
                <>
                {" "}
                <Link to="/login"><button type="button" className="btn-outline-success mr-md-2 mb-md-0 mb-2 btn-outline-success btn-round" style={{height:"3rem", width:"10rem", fontSize:"20px"}}>Login</button></Link>
                </>
            ) : (
                <>
                {" "}
                <Link to="/"><button type="button" className="btn-outline-success mr-md-2 mb-md-0 mb-2 btn-outline-success btn-round" style={{height:"3rem", width:"10rem", fontSize:"20px"}} onClick={clickHandler}>Logout</button></Link>
                </>
            )}
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12' style={{marginTop: "30px", marginBottom:"30px"}}>
                <h1>BEDROOM CONTROL CENTER</h1>
            </div>
        </div>
        </div>
        <div className='container-fluid row top' style={{ marginTop: "100px", height:"37rem"}}>
        {!state.isLoggedIn ? (
            <>
            {" "}
                <div class="col-md-4 col-xl-4" style={{ marginTop: "100px"}}>
                <div class="card bg-c-green order-card">
                    <div class="card-block">
                        <div class="row">
                            <h1 class="col-md-10 m-b-20">Fan</h1>
                            <div className='col-md-2'style={{marginTop:"0.5rem"}}>
                                <Link to="/device-information" style={{color: "white"}}><AiOutlineInfoCircle size={30}/></Link>
                            </div>
                        </div>
                        <div class="row" style={{marginTop:"1rem"}}>
                            <div class='col-md-6'>
                                <h4>Auto</h4>
                            </div>
                            <div class='col-md-6'>
                                <label className="switch">
                                <input id="autoFan" type="checkbox" onClick={() => SwitchAutoFan()}/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="row"style={{ marginTop: "1rem"}}>
                            <div class='col-md-6'>
                                <h4>Fan</h4>
                            </div>
                            <div class='col-md-6'>
                                <label className="switch">
                                <input id="fan" type="checkbox" onClick={() => SwitchFan()}/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-xl-4" style={{ marginTop: "100px"}}>
                <div class="card bg-c-green order-card">
                    <div class="card-block">
                        <div class="row">
                            <h1 class="col-md-10 m-b-20">Led</h1>
                            <div className='col-md-2'style={{marginTop:"0.5rem"}}>
                                <Link to="/device-information" style={{color: "white"}}><AiOutlineInfoCircle size={30}/></Link>
                            </div>
                        </div>
                        <div class="row" style={{marginTop:"1rem"}}>
                            <div class='col-md-6'>
                                <h4>Auto</h4>
                            </div>
                            <div class='col-md-6'>
                                <label className="switch">
                                <input id="autoLed" type="checkbox" onClick={() => SwitchLed()}/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div class="row"style={{ marginTop: "1rem"}}>
                            <div class='col-md-6'>
                                <h4>Led</h4>
                            </div>
                            <div class='col-md-6'>
                                <label className="switch">
                                <input id="led" type="checkbox" onClick={() => SwitchAutoLed()}/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-md-4 col-xl-4" style={{ marginTop: "100px"}}>
                            <div class="card bg-c-green order-card">
                    <div class="card-block">
                    <div className='row'>
                            <div className='col-md-4'>
                                <BsFillPeopleFill size={35}/>
                            </div>
                            <div className='col-md-4' style={{ marginTop: "0.4rem"}}>
                                <h4>{humanDetect}</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4' style={{ marginTop: "0.25rem"}}>
                                <TiWeatherSunny size={35}/>
                            </div>
                            <div className='col-md-4' style={{ marginTop: "0.4rem"}}>
                                <h4>{bright}</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4' style={{ marginTop: "0.25rem"}}>
                                <WiHumidity size={35}/>
                            </div>
                            <div className='col-md-4' style={{ marginTop: "0.4rem"}}>
                                <h4>{roomstatus.humidity}%</h4>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-4' style={{ marginTop: "0.25rem"}}>
                                <RiTempHotLine size={35}/>
                            </div>
                            <div className='col-md-4' style={{ marginTop: "0.4rem"}}>
                                <h4>{roomstatus.temperature}&deg;C</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ) : (
            <>
            {" "}
            <div>
                <p>Hello See You Again!</p>
            </div>
            </>
        )
        }
        </div>
      </div>
  )
}
