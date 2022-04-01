import React, { useEffect } from 'react'
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

export default function MainMenu() {
  const [autoFan, setAutoFan] = useState(4);
  const [autoLed, setAutoLed] = useState(6);
  const [fan, setFan] = useState(0);
  const [led, setLed] = useState(2);
  const [brightness, setBrightness] = useState(0);
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [isUsed, setIsUsed] = useState(0);

  const onAutoSwitchFan = () => {
      if (autoFan == 4) {
          console.log(autoFan + 1);
          axios.post('https://io.adafruit.com/api/feeds/auto-fan/data', 
            {"value": "5"}, {
                headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
            }).then(response => console.log(response));
          setAutoFan(5);
      } else {
          console.log(autoFan - 1);
          axios.post('https://io.adafruit.com/api/feeds/auto-fan/data', 
            {"value": "4"}, {
                headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
            }).then(response => console.log(response));
          setAutoFan(4);
      }
  };
  const onAutoSwitchLed = () => {
      if (autoLed == 6) {
          console.log(autoLed + 1);
          axios.post('https://io.adafruit.com/api/feeds/auto-led/data', 
            {"value": "7"}, {
                headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
            }).then(response => console.log(response));
          setAutoLed(7);
          
      } else {
        console.log(autoLed - 1);
        axios.post('https://io.adafruit.com/api/feeds/auto-led/data', 
            {"value": "6"}, {
                headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
            }).then(response => console.log(response));
        setAutoLed(6);
      }
  };

  const onSwitchFan = () => {
    if (fan == 0) {
        console.log(fan + 1);
        axios.post('https://io.adafruit.com/api/feeds/co3109-fan/data', 
            {"value": "1"}, {
                headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
            }).then(response => console.log(response));
        setFan(1);
    } else {
        console.log(fan - 1);
        axios.post('https://io.adafruit.com/api/feeds/co3109-fan/data', 
            {"value": "0"}, {
                headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
            }).then(response => console.log(response));
        setFan(0);
    }
  };
  const onSwitchLed = () => {
    if (led == 2) {
        console.log(led + 1);
        axios.post('https://io.adafruit.com/api/feeds/co3109-led/data', 
            {"value": "3"}, {
                headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
            }).then(response => console.log(response));
        setLed(3);
    } else {
        console.log(led - 1);
        axios.post('https://io.adafruit.com/api/feeds/co3109-led/data', 
            {"value": "2"}, {
                headers: {"x-aio-key": "aio_wpGb16uEqxE9Sr3F9tr7C37aOtqs"}
            }).then(response => console.log(response));
        setLed(2);
    }
   };

  useEffect(() => {
    fetch(`https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-infrared`)
    .then((res) => res = res.json())
    .then((res) => {
        setIsUsed(res.last_value);
        console.log(res.last_value);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-humidity`)
    .then((res) => res = res.json())
    .then((res) => {
        setHumidity(res.last_value);
        console.log(res.last_value);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-temperature`)
    .then((res) => res = res.json())
    .then((res) => {
        setTemperature(res.last_value);
        console.log(res.last_value);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-light`)
    .then((res) => res = res.json())
    .then((res) => {
        setBrightness(res.last_value);
        console.log(res.last_value);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-fan`)
    .then((res) => res = res.json())
    .then((res) => {
        setFan(res.last_value);
        if (res.last_value == 1) {
            document.getElementById("fan").checked = true;
        }
        console.log(res.last_value);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`https://io.adafruit.com/api/v2/Nhom_N/feeds/co3109-led`)
    .then((res) => res = res.json())
    .then((res) => {
        setLed(res.last_value);
        if (res.last_value == 3) {
            document.getElementById("led").checked = true;
        }
        console.log(res.last_value);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`https://io.adafruit.com/api/v2/Nhom_N/feeds/auto-fan`)
    .then((res) => res = res.json())
    .then((res) => {
        setAutoFan(res.last_value);
        if (res.last_value == 5) {
            document.getElementById("autoFan").checked = true;
        }
        console.log(res.last_value);
    })
    .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`https://io.adafruit.com/api/v2/Nhom_N/feeds/auto-led`)
    .then((res) => res = res.json())
    .then((res) => {
        setAutoLed(res.last_value);
        if (res.last_value == 7) {
            document.getElementById("autoLed").checked = true;
        }
        console.log(res.last_value);
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
            <Link to="/login"><button type="button" className="btn-outline-success mr-md-2 mb-md-0 mb-2 btn-outline-success btn-round" style={{height:"3rem", width:"10rem", fontSize:"20px"}}>Login</button></Link>
            
            </div>
        </div>
        <div className='row'>
            <div className='col-md-12' style={{marginTop: "30px", marginBottom:"30px"}}>
                <h1>BEDROOM CONTROL CENTER</h1>
            </div>
        </div>
        </div>
        <div className='container-fluid row top' style={{ marginTop: "100px", height:"37rem"}}>
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
                            <input id="autoFan" type="checkbox" onClick={() => onAutoSwitchFan()}/>
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
                            <input id="fan" type="checkbox" onClick={() => onSwitchFan()}/>
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
                            <input id="autoLed" type="checkbox" onClick={() => onAutoSwitchLed()}/>
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
                            <input id="led" type="checkbox" onClick={() => onSwitchLed()}/>
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
                            <h4>{isUsed}</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4' style={{ marginTop: "0.25rem"}}>
                            <TiWeatherSunny size={35}/>
                        </div>
                        <div className='col-md-4' style={{ marginTop: "0.4rem"}}>
                            <h4>{brightness}</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4' style={{ marginTop: "0.25rem"}}>
                            <WiHumidity size={35}/>
                        </div>
                        <div className='col-md-4' style={{ marginTop: "0.4rem"}}>
                            <h4>{humidity}</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4' style={{ marginTop: "0.25rem"}}>
                            <RiTempHotLine size={35}/>
                        </div>
                        <div className='col-md-4' style={{ marginTop: "0.4rem"}}>
                            <h4>{temperature}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
      </div>
  )
}
