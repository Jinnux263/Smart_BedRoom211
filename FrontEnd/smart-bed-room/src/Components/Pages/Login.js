import React, { useContext, useState } from 'react'
import '../Pages/Login.css'
import image from '../Images/N_Group.png';
import { FaHome } from 'react-icons/fa';
import {
    Link, Navigate
} from 'react-router-dom';
import { BsFillEnvelopeFill } from "react-icons/bs";
import { BsFillShieldLockFill } from "react-icons/bs";
import axios from "axios";
import { LoginContext } from '../../LoginContext';

const styleLogin = {
    borderRadius: "30px",
    boxShadow: "0px 15px 16.83px 0.17px rgb(0,0,0,0.2)",
  };
export default function Login() {
  const {state, setState} = useContext(LoginContext);
  const [user, setUser] = useState({
    username: "",
    password: "",
  });

  const submitHandler = (e) => {
    e.preventDefault();
    axios.post(
      "http://localhost:8000/login",{...user}
    )
    .then((res) => {
      if (res.data) setState((prev) => ({...prev, isLogin: true, user: user}));
    })
    .catch((res, status) => alert(res, status));
  };

  if (state.isLogin) return <Navigate to="/" />
  else
  return (
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
                  htmlFor="username"
                  className="input-group-text bg-white border-0 border-bottom border-secondary rounded-0"
                >
                  <BsFillEnvelopeFill/>
                </label>
                <input
                  className="form-control border-0 border-bottom border-secondary rounded-0 shadow-none"
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Nhập username"
                  value={user.username}
                  onChange={e => setUser({...user, username: e.target.value})}
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
                  value={user.password}
                  onChange={e => setUser({...user, password: e.target.value})}
                />
              </div>
              <button type="submit" className="btn mb-2 mb-md-0 btn-secondary btn-block btn-round" onClick={submitHandler}>Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}
