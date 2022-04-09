import React, { Component, useState, useEffect } from 'react'
import Select from 'react-select'
import '../Pages/Device.css'
import { FaHome } from 'react-icons/fa';
import {
    Link
} from 'react-router-dom';
import Table from '../Table/Table';

export default function FanDataHistory() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/fan/history`)
    .then((res) => res = res.json())
    .then((res) => {
        setData(res);
    })
    .catch((err) => console.log(err));
  }, []);
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
