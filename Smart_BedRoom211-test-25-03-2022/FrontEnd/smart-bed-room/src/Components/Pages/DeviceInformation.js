import React, { Component } from 'react'
import Select from 'react-select'
import '../Pages/Device.css'
import { FaHome } from 'react-icons/fa';
import {
    Link
} from 'react-router-dom';

export default function DeviceInformation() {
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
        <p style={{fontSize:"3rem"}}>Device Information</p>
      </div>
      <div className="col-lg-1 col-md-2" style={{marginTop:"1.5rem"}}>
    <div className="dropdown"> <button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"> <span>Countries</span> <i className="fa fa-caret-down"></i> </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Australia</a></li>
            <li><a className="dropdown-item" href="#">India</a></li>
            <li><a className="dropdown-item" href="#">United States</a></li>
        </ul>
    </div>
    </div>
    <div className="col-lg-2 col-md-2" style={{marginTop:"1.5rem"}}>
    <div className="dropdown"> <button className="btn btn-outline-danger dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-expanded="false"> <span>Countries</span> <i className="fa fa-caret-down"></i> </button>
        <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a className="dropdown-item" href="#">Australia</a></li>
            <li><a className="dropdown-item" href="#">India</a></li>
            <li><a className="dropdown-item" href="#">United States</a></li>
        </ul>
    </div>
    </div>
      </div>
	<div className="limiter">
		<div className="container-table100">
			<div className="wrap-table100">
				<div className="table100 ver1 m-b-110">
					<div className="table100-head">
						<table>
							<thead>
								<tr className="row100 head">
									<th className="cell100 column1">Class name</th>
									<th className="cell100 column2">Type</th>
								</tr>
							</thead>
						</table>
					</div>

					<div className="table100-body js-pscroll">
						<table>
							<tbody>
								<tr className="row100 body">
									<td className="cell100 column1">Like a butterfly</td>
									<td className="cell100 column2">Boxing</td>
								</tr>

								<tr className="row100 body">
									<td className="cell100 column1">Mind Body</td>
									<td className="cell100 column2">Yoga</td>
								</tr>
							</tbody>
						</table>
					</div>
				</div>
    </div>
    </div>
  </div>
  </div>
  )
}
