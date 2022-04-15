import React, { Component, useState, useEffect, useContext } from 'react'
import Select from 'react-select'
import '../Pages/Device.css'
import { FaHome } from 'react-icons/fa';
import {
    Link
} from 'react-router-dom';
import Table from '../Table/Table';

export default function FanDataHistory() {
  
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
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/fan/history`)
    .then((res) => res = res.json())
    .then((res) => {
        setData(res);
    })
    .catch((err) => console.log(err));
  }, []);
  const interval = setInterval(function() {
    fetch(`http://localhost:8000/fan/history`)
    .then((res) => res = res.json())
    .then((res) => {
        setData(res);
    })
    .catch((err) => console.log(err));
    // method to be executed;
  }, 15000);
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
        <div className="row" style={{marginTop:"5rem"}}>
        <div className="col-lg-8 col-md-7">
          <p style={{fontSize:"3rem"}}>Fan Data History</p>
        </div>
        </div>
      <Table data={data} rowsPerPage={5}></Table>
  </div>
  )
}
