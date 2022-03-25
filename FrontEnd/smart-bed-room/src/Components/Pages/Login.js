import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import image from '../Images/N_Group.png';
import { FaHome } from 'react-icons/fa';
import {
    Link
} from 'react-router-dom';

export default function Login() {
  return (
    <div className='row'>
          <div className='col-md-4'></div>
          <div className='col-md-4' style={{backgroundColor: "#009300", marginTop: "150px", height: "300px", borderRadius: "2%"}}>
              <div className='row'>
                  <div className='col-md-1' >
                  <Link to="/" style={{color: "black"}}><FaHome size={25} /></Link>
                  </div>
              </div>              
              <div className='row'>
                  <div className='col-md-6'>
                      <img src={image} style={{width: "95%", marginTop: "30px", marginLeft:"20px"}}></img>
                  </div>
                  <div className='col-md-6'>
                      <form style={{marginTop: "30px", marginRight: "20px"}}>
                          <p style={{fontWeight: "bold"}}>Member Login</p>
                          <input placeholder='Username' className='form-control' style={{margin: "5px"}}></input>
                          <input placeholder='Password' className='form-control' style={{margin: "5px"}}></input>
                          <button class="btn btn-outline-secondary" style={{width: "100%", margin: "5px", backgroundColor: "#DF7401"}}>Login</button>
                      </form>
                  </div>
              </div>
          </div>
        <div className='col-md-4'></div>
    </div>
  )
}
