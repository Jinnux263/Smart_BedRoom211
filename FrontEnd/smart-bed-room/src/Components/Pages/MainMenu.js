import React, { useContext, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Pages/MainMenu.css'
import { BsFillPeopleFill } from 'react-icons/bs';
import { RiTempHotLine } from 'react-icons/ri';
import { WiHumidity } from 'react-icons/wi';
import { AiOutlineInfoCircle } from 'react-icons/ai';
import { useState } from 'react';
import {
    Link
} from 'react-router-dom';
import {TiArrowMaximiseOutline, TiWeatherSunny} from 'react-icons/ti';
import axios from 'axios';
import { LoginContext } from '../../LoginContext';
import { AiOutlineAreaChart } from 'react-icons/ai';

export default function MainMenu() {

  const {state, setState} = useContext(LoginContext);
  const json = localStorage.getItem("state");
  const saveAccount = JSON.parse(json);
  let saveUsername = "";
  let savePassword = "";
  let saveIsLogin = false;
  if (saveAccount) {
      saveUsername = saveAccount.user.username;
      savePassword = saveAccount.user.password;
      saveIsLogin = true;
  }
  useEffect(() => {
    const user = {username: saveUsername, password: savePassword};
    setState((prev) => ({...prev, isLogin: saveIsLogin, user: user}));
  }, []);
  const [humanDetect, setHumanDetect] = useState("");
  const [bright, setBright] = useState("");
  const [ledstatus, setLedstatus] = useState({isOn: false, isAuto: false});
  const [fanstatus, setFanstatus] = useState({isOn: false, isAuto: false});
  const [roomstatus, setRoomstatus] = useState({humidity : 0,
    brightness : 0,
    hasHuman: 0,
    temperature: 0});

  const clickHandler = () => {
    localStorage.removeItem("state");
    setState({isLogin: false, user: {}});
    axios.post("http://localhost:8000/logout")
    .then((res) => {
        console.log(res.data);
    })
    .catch((res, status) => alert(res, status));
  }
	
  const SwitchFan = () => {
    axios.post('http://localhost:8000/fan', 
    {isOn: !fanstatus.isOn, isAuto: fanstatus.isAuto}).then();
    if (fanstatus.isAuto) {
        setFanstatus({isOn: !fanstatus.isOn, isAuto: !fanstatus.isAuto});
    } else {
        setFanstatus({isOn: !fanstatus.isOn, isAuto: fanstatus.isAuto});
    }
    var check = document.getElementById("autoFan").checked;
    if (check) document.getElementById("autoFan").checked = false;
  };
  const SwitchAutoFan = () => {
    axios.post('http://localhost:8000/fan', 
    {isOn: fanstatus.isOn, isAuto: !fanstatus.isAuto}).then();
    setFanstatus({isOn: fanstatus.isOn, isAuto: !fanstatus.isAuto});
  };
  const SwitchLed = () => {
    axios.post('http://localhost:8000/bulb', 
    {isOn: !ledstatus.isOn, isAuto: ledstatus.isAuto}).then();
    if (ledstatus.isAuto) {
        setLedstatus({isOn: !ledstatus.isOn, isAuto: !ledstatus.isAuto});
    } else {
        setLedstatus({isOn: !ledstatus.isOn, isAuto: ledstatus.isAuto});
    }
    var check = document.getElementById("autoLed").checked;
    if (check) document.getElementById("autoLed").checked = false;
  };
  const SwitchAutoLed = () => {
    axios.post('http://localhost:8000/bulb', 
    {isOn: ledstatus.isOn, isAuto: !ledstatus.isAuto}).then();
    setLedstatus({isOn: ledstatus.isOn, isAuto: !ledstatus.isAuto});
};

  useEffect(() => {
    fetch(`http://localhost:8000/room`)
    .then((res) => res = res.json())
    .then((res) => {
        setRoomstatus({humidity: res.humidity, brightness: res.brightness, hasHuman: res.hasHuman, temperature: res.temperature});
        if (res.hasHuman) {
            setHumanDetect("Has people");
        } else {
            setHumanDetect("No people");
        }
        if (res.brightness == 1) {
            setBright("Bright");
        } else {
            setBright("Dark");
        }
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/fan`)
    .then((res) => res = res.json())
    .then((res) => {
        setFanstatus({isOn: res.isOn, isAuto: res.isAuto});
        document.getElementById("fan").checked = res.isOn ? true : false;
        document.getElementById("autoFan").checked = res.isAuto ? true : false;
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`http://localhost:8000/bulb`)
    .then((res) => res = res.json())
    .then((res) => {
        setLedstatus({isOn: res.isOn, isAuto: res.isAuto});
        document.getElementById("led").checked = res.isOn ? true : false;
        document.getElementById("autoLed").checked = res.isAuto ? true :false;
    })
    .catch((err) => console.log(err));
  }, []);

//   const interval = setInterval(function() {
//     fetch(`http://localhost:8000/room`)
//     .then((res) => res = res.json())
//     .then((res) => {
//         setRoomstatus({humidity: res.humidity, brightness: res.brightness, hasHuman: res.hasHuman, temperature: res.temperature});
//         if (res.hasHuman) {
//             setHumanDetect("Has people");
//         } else {
//             setHumanDetect("No people");
//         }
//         if (res.brightness == 1) {
//             setBright("Bright");
//         } else {
//             setBright("Dark");
//         }
//     })
//     .catch((err) => console.log(err));

//     fetch(`http://localhost:8000/fan`)
//     .then((res) => res = res.json())
//     .then((res) => {
//         setFanstatus({isOn: res.isOn, isAuto: res.isAuto});
//         document.getElementById("fan").checked = res.isOn ? true : false;
//         document.getElementById("autoFan").checked = res.isAuto ? true : false;
//     })
//     .catch((err) => console.log(err));

//     fetch(`http://localhost:8000/bulb`)
//     .then((res) => res = res.json())
//     .then((res) => {
//         setLedstatus({isOn: res.isOn, isAuto: res.isAuto});
//         document.getElementById("led").checked = res.isOn ? true : false;
//         document.getElementById("autoLed").checked = res.isAuto ? true :false;
//     })
//     .catch((err) => console.log(err));

//     // method to be executed;
//   }, 30000);
  var today = new Date();
  var hour = today.getHours();
  var minute = today.getMinutes();
  if (today.getHours() < 10) hour = "0" + hour;
  if (today.getMinutes() < 10) minute = "0" + minute;
  var displayTime = hour + ':' + minute;
  return (
      <div>
        <div className="container-fluid header">
        <div className='row'>
            <div className='col-md-3 col-sm-2' style={{marginTop: "20px"}}><h1>{displayTime}</h1></div>
            <div className='col-md-6 col-sm-1' style={{marginTop: "20px"}}>
            </div>
            <div className='col-md-3 col-sm=9' style={{marginTop: "20px"}}>
            {!state.isLogin ? (
                <>
                {" "} 
                <Link to="/login"><button type="button" className="btn-outline-success mr-md-2 mb-md-0 mb-2 btn-outline-success btn-round" style={{height:"3rem", width:"10rem", fontSize:"20px"}}>Login</button></Link>
                </>
            ) : (
                <>
                {" "}
                <Link to="/"><button type="button" className="btn-outline-success mr-md-2 mb-md-0 mb-2 btn-outline-success btn-round" style={{height:"3rem", width:"10rem", fontSize:"20px"}} onClick={()=>clickHandler()}>Logout</button></Link>
                </>
            )}
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12' style={{marginTop: "30px", marginBottom:"150px"}}>
                <h1 style={{fontSize:"3rem",fontWeight:"500"}}>BEDROOM CONTROL CENTER</h1>
            </div>
        </div>
        </div>
        <div className='container-fluid row top' style={{height:"37rem"}}>
        {state.isLogin ? (
            <>
            {" "}
                <div className="col-md-4 col-xl-4" style={{ marginTop: "100px"}}>
                <div className="card bg-c-green order-card" style={{height:"20rem"}}>
                    <div className="card-block">
                        <div className="row">
                            <h1 className="col-md-10 col-sm-9 m-b-20" style={{fontWeight:"500"}}>Fan</h1>
                            <div className='col-md-2 col-sm-3'style={{marginTop:"0.5rem"}}>
                                <Link to="/fan-data-history" style={{color: "white"}}><AiOutlineInfoCircle size={30}/></Link>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"1.4rem"}}>
                            <div className='col-md-6'>
                                <h1>Auto</h1>
                            </div>
                            <div className='col-md-6' style={{marginTop:"0.7rem"}}>
                                <label className="switch">
                                <input id="autoFan" type="checkbox" onClick={() => SwitchAutoFan()}/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row"style={{ marginTop: "1.5rem"}}>
                            <div className='col-md-6'>
                                <h1>Fan</h1>
                            </div>
                            <div className='col-md-6' style={{marginTop:"0.8rem"}}>
                                <label className="switch">
                                <input id="fan" type="checkbox" onClick={() => SwitchFan()}/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-xl-4" style={{ marginTop: "100px"}}>
                <div className="card bg-c-green order-card" style={{height:"20rem"}}>
                    <div className="card-block">
                        <div className="row">
                            <h1 className="col-md-10 m-b-20" style={{fontWeight:"500"}}>Led</h1>
                            <div className='col-md-2'style={{marginTop:"0.5rem"}}>
                                <Link to="/led-data-history" style={{color: "white"}}><AiOutlineInfoCircle size={30}/></Link>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"1.4rem"}}>
                            <div className='col-md-6'>
                                <h1>Auto</h1>
                            </div>
                            <div className='col-md-6' style={{marginTop:"0.7rem"}}>
                                <label className="switch">
                                <input id="autoLed" type="checkbox" onClick={() => SwitchAutoLed()}/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row"style={{ marginTop: "1.5rem"}}>
                            <div className='col-md-6'>
                                <h1>Led</h1>
                            </div>
                            <div className='col-md-6' style={{marginTop:"0.8rem"}}>
                                <label className="switch">
                                <input id="led" type="checkbox" onClick={() => SwitchLed()}/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-xl-4" style={{ marginTop: "100px"}}>
                <div className="card bg-c-green order-card" style={{height:"20rem"}}>
                    <div className="card-block">
                    <div className="row">
                        <h3 className="col-md-12 col-lg-10 m-b-20" style={{fontWeight:"500", fontSize:"2.3rem"}}>Room data</h3>
                        <div className='col-lg-2 col-md-12'style={{marginTop:"0rem"}}>
                            <Link to="/room-data-history" style={{color: "white"}}><AiOutlineAreaChart size={30}/></Link>
                        </div>
                    </div>
                        <div className='row' style={{marginTop:"0rem"}}>
                            <div className='col-md-3'>
                                <BsFillPeopleFill size={35}/>
                            </div>
                            <div className='col-md-9'style={{textAlign:"left"}}>
                                <h3>{humanDetect}</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3' style={{ marginTop: "0.25rem"}}>
                                <TiWeatherSunny size={35}/>
                            </div>
                            <div className='col-md-9' style={{ marginTop: "0.4rem", textAlign:"left"}}>
                                <h3>{bright}</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3' style={{ marginTop: "0.25rem"}}>
                                <WiHumidity size={35}/>
                            </div>
                            <div className='col-md-9' style={{ marginTop: "0.4rem", textAlign:"left"}}>
                                <h3>{roomstatus.humidity}%</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3' style={{ marginTop: "0.25rem"}}>
                                <RiTempHotLine size={35}/>
                            </div>
                            <div className='col-md-9' style={{ marginTop: "0.4rem", textAlign:"left"}}>
                                <h3>{roomstatus.temperature}&deg;C</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        ) : (
            <>
            {" "}
            <div className="col-md-4 col-xl-4" style={{ marginTop: "100px"}}>
                <div className="card bg-c-green order-card" style={{height:"20rem"}}>
                    <div className="card-block">
                        <div className="row">
                            <h1 className="col-md-10 col-sm-9 m-b-20" style={{fontWeight:"500"}}>Fan</h1>
                            <div className='col-md-2 col-sm-3'style={{marginTop:"0.5rem"}}>
                                <Link to="/" style={{color: "white"}}><AiOutlineInfoCircle size={30}/></Link>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"1.4rem"}}>
                            <div className='col-md-6'>
                                <h1>Auto</h1>
                            </div>
                            <div className='col-md-6' style={{marginTop:"0.7rem"}}>
                                <label className="switch">
                                <input id="autoFan" type="checkbox" onClick={() => SwitchAutoFan()} disabled/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row"style={{ marginTop: "1.5rem"}}>
                            <div className='col-md-6'>
                                <h1>Fan</h1>
                            </div>
                            <div className='col-md-6' style={{marginTop:"0.8rem"}}>
                                <label className="switch">
                                <input id="fan" type="checkbox" onClick={() => SwitchFan()} disabled/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-xl-4" style={{ marginTop: "100px"}}>
                <div className="card bg-c-green order-card" style={{height:"20rem"}}>
                    <div className="card-block">
                        <div className="row">
                            <h1 className="col-md-10 m-b-20" style={{fontWeight:"500"}}>Led</h1>
                            <div className='col-md-2'style={{marginTop:"0.5rem"}}>
                                <Link to="/" style={{color: "white"}}><AiOutlineInfoCircle size={30}/></Link>
                            </div>
                        </div>
                        <div className="row" style={{marginTop:"1.4rem"}}>
                            <div className='col-md-6'>
                                <h1>Auto</h1>
                            </div>
                            <div className='col-md-6' style={{marginTop:"0.7rem"}}>
                                <label className="switch">
                                <input id="autoLed" type="checkbox" onClick={() => SwitchAutoLed()} disabled/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                        <div className="row"style={{ marginTop: "1.5rem"}}>
                            <div className='col-md-6'>
                                <h1>Led</h1>
                            </div>
                            <div className='col-md-6' style={{marginTop:"0.8rem"}}>
                                <label className="switch">
                                <input id="led" type="checkbox" onClick={() => SwitchLed()} disabled/>
                                <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-md-4 col-xl-4" style={{ marginTop: "100px"}}>
                <div className="card bg-c-green order-card" style={{height:"20rem"}}>
                    <div className="card-block">
                    <div className="row">
                        <h3 className="col-md-12 col-lg-10 m-b-20" style={{fontWeight:"500", fontSize:"2.3rem"}}>Room data</h3>
                        <div className='col-lg-2 col-md-12'style={{marginTop:"0rem"}}>
                            <Link to="/" style={{color: "white"}}><AiOutlineAreaChart size={30}/></Link>
                        </div>
                    </div>
                        <div className='row' style={{marginTop:"0rem"}}>
                            <div className='col-md-3'>
                                <BsFillPeopleFill size={35}/>
                            </div>
                            <div className='col-md-9' style={{textAlign:"left"}}>
                                <h3>{humanDetect}</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3' style={{ marginTop: "0.25rem"}}>
                                <TiWeatherSunny size={35}/>
                            </div>
                            <div className='col-md-9' style={{ marginTop: "0.4rem", textAlign:"left"}}>
                                <h3>{bright}</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3' style={{ marginTop: "0.25rem"}}>
                                <WiHumidity size={35}/>
                            </div>
                            <div className='col-md-9' style={{ marginTop: "0.4rem", textAlign:"left"}}>
                                <h3>{roomstatus.humidity}%</h3>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-3' style={{ marginTop: "0.25rem"}}>
                                <RiTempHotLine size={35}/>
                            </div>
                            <div className='col-md-9' style={{ marginTop: "0.4rem", textAlign:"left"}}>
                                <h3>{roomstatus.temperature}&deg;C</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
        )
        }
        </div>
      </div>
  )
}
