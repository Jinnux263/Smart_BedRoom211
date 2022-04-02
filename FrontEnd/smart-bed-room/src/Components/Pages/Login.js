import React from 'react'
import '../Pages/Login.css'
import image from '../Images/N_Group.png';
import { FaHome } from 'react-icons/fa';
import {
    Link
} from 'react-router-dom';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillShieldLockFill } from "react-icons/bs";

const styleLogin = {
    borderRadius: "30px",
    boxShadow: "0px 15px 16.83px 0.17px rgb(0,0,0,0.2)",
  };
export default function Login() {
  return (
    // <div className="limiter">
    // <div className="container-login100">
    //     <div className="login100-pic js-tilt" data-tilt>
    //         {/* <img src='../Images/N_Group.png'/> */}
    //     </div>
    //     <form className="login100-form validate-form">
    //         <span className="login100-form-title">
    //             Member login
    //         </span>

    //         <div>
    //             <input
    //                 className="input100"
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //                 placeholder="Nhập email"
    //                 value=""
    //                 onChange=""
    //             />
    //             <span className="focus-input100"></span>
    //             <span className="symbol-input100">
    //                 <i className="fa fa-envelope" aria-hidden="true"></i>
    //             </span>
    //         </div>

    //         <div>
    //             <input className="input100" type="password" name="pass" placeholder="Password" />
    //             <span className="focus-input100"></span>
    //             <span className="symbol-input100">
    //                 <i className="fa fa-lock" aria-hidden="true"></i>
    //             </span>
    //         </div>

    //         <div className="container-login100-form-btn">
    //                 <button className="login100-form-btn">
    //                     Login
    //                 </button>
    //             </div>
    //     </form>
    // </div>
    // </div>

    <div
    className="login bg-light d-flex align-items-center"
    style={{ minHeight: "100vh" }}
  >
    <div
      className=" bg-white container py-lg-5 position-relative"
      style={styleLogin}
    >
      <Link to="/">
        <button
          className="btn btn-light position-absolute top-0 start-0 px-lg-4 bg-gradient"
          style={{
            borderTopLeftRadius: "30px",
            borderBottomRightRadius: "32px",

          }}
        >
          <FaHome size={30}/>
        </button>
      </Link>
      <div className="login-content row py-lg-5 py-3 g-0">
        <div className="login-image col-lg-6 col-sm-0">
          <figure>
            <img
              className="d-block mx-auto"
              src={image}
              alt="singupimage"
            />
          </figure>
        </div>

        <div className="login-form col-lg-6 col-sm-12">
          <div className="d-flex-items-center align-items-lg-start flex-column">
            <h1 className="form-title mb-4">Member login</h1>
            <form method="" className="register-form w-75" id="login-form" style={{marginLeft:"5rem"}}>
              <div className="input-group mb-4 w-lg-75">
                <label
                  htmlFor="email"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <BsFillEnvelopeFill/>
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Nhập email"
                />
              </div>
              <div className="input-group mb-4 w-lg-75">
                <label
                  htmlFor="password"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <BsFillShieldLockFill />
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Mật khẩu"
                />
              </div>
              <button type="submit" className="btn mb-2 mb-md-0 btn-secondary btn-block btn-round">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
