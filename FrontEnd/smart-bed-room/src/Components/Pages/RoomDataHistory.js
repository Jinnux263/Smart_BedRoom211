import React, { Component, useState, useEffect, useContext } from 'react'
import Select from 'react-select'
import '../Pages/Device.css'
import { FaHome } from 'react-icons/fa';
import {
    Link
} from 'react-router-dom';
import Table from '../Table/Table';
import { MDBContainer } from "mdbreact";
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';

export default function RoomDataHistory() {

  const json = localStorage.getItem("state");
  const saveAccount = JSON.parse(json);
  let saveUsername = "";
  let savePassword = "";
  let saveIsLogin = false;
  if (saveAccount) {
      saveUsername = saveAccount.user.username;
      savePassword = saveAccount.user.password;
      saveIsLogin = true;
  } else {
    window.location.href = '/';
  }
  const [timeRange, setTimeRange] = useState([]);
  const [temperatureData, setTemperatureData] = useState([]);
  const [humidityData, setHimidityData] = useState([]);
  const [infraredData, setInfraredData] =  useState([]);
  const [lightData, setLightData] = useState([]);

  let timeRangeTemp = []
  let temperatureDataTemp = []
  let humidityDataTemp = []
  let infraredDataTemp = []
  let lightDataTemp = []

  useEffect(() => {
    fetch(`http://localhost:8000/room/history`)
    .then((res) => res = res.json())
    .then((res) => {
        res = res.slice(0, 5).reverse();
        for (let i = 0; i < res.length; i++) {
          setTimeRange(prev => [...prev, (new Date(res[i].time)).toLocaleString()]);
          setTemperatureData(prev => [...prev, res[i].temperature]);
          setHimidityData(prev => [...prev, res[i].humidity]);
          setInfraredData(prev => [...prev, res[i].isUse]);
          setLightData(prev => [...prev, res[i].brightness]);
        }
    })
    .catch((err) => console.log(err));
  }, []);
  
  const interval = setInterval(function() {
    fetch(`http://localhost:8000/room/history`)
    .then((res) => res = res.json())
    .then((res) => {
        timeRangeTemp = []
        temperatureDataTemp = []
        humidityDataTemp = []
        infraredDataTemp = []
        lightDataTemp = []
        res = res.slice(0, 5).reverse();
        for (let i = 0; i < res.length; i++) {
          timeRangeTemp.push((new Date(res[i].time)).toLocaleString());
          temperatureDataTemp.push(res[i].temperature);
          humidityDataTemp.push(res[i].humidity);
          infraredDataTemp.push(res[i].isUse);
          lightDataTemp.push(res[i].brightness);
        }
        setTimeRange(timeRangeTemp);
        setTemperatureData(temperatureDataTemp);
        setHimidityData(humidityDataTemp);
        setInfraredData(infraredDataTemp);
        setLightData(lightDataTemp);
    })
    .catch((err) => console.log(err));
    // method to be executed;
  }, 60000);
  const temperature = {
    labels: timeRange,
    datasets: [
      {
        label: "Temperature",
        data: temperatureData,
        fill: true,
        backgroundColor: "rgba(6, 156,51, .3)",
        borderColor: "#02b844",
      }
    ]
  };
  const humidity = {
    labels: timeRange,
    datasets: [
      {
        label: "Humidity",
        data: humidityData,
        fill: true,
        backgroundColor: "rgba(6, 156,51, .3)",
        borderColor: "#02b844",
      }
    ]
  };
  const infrared = {
    labels: timeRange,
    datasets: [
      {
        label: "Infrared",
        data: infraredData,
        fill: true,
        backgroundColor: "rgba(6, 156,51, .3)",
        borderColor: "#02b844",
      }
    ]
  };
  const light = {
    labels: timeRange,
    datasets: [
      {
        label: "Light",
        data: lightData,
        fill: true,
        backgroundColor: "rgba(6, 156,51, .3)",
        borderColor: "#02b844",
      }
    ]
  };
  return (
    <div>
      <div className="row">
        <Link to="/">
          <button
            className="btn btn-light position-absolute top-0 start-0 px-lg-4 bg-gradient"
            style={{
              borderBottomRightRadius: "32px",
            }}
          >
        <FaHome size={30}/>
        </button>
        </Link>
      </div>
      <p style={{fontSize: "3rem", marginTop: "1rem"}}>Room Data History</p>
      <div className='container-fluid' style={{marginTop: "0px", width:"80%"}}>
        <div className='row'>
          <MDBContainer className='col-md-6'>
            <Line data={temperature} />
          </MDBContainer>
          <MDBContainer className='col-md-6'>
            <Line data={humidity} />
          </MDBContainer>
        </div>
        <br></br>
        <div className='row'>
          <MDBContainer className='col-md-6'>
            <Line data={infrared} />
          </MDBContainer>
          <MDBContainer className='col-md-6'>
            <Line data={light} />
          </MDBContainer>
        </div>
      </div>
    </div>
  )
}
