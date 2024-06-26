import { useState } from "react";
import "./Login.scss";
import "../../App.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import video from "../../LoginAssets/Video.mp4";
import logo from "../../LoginAssets/logo.png";

import { FaUserShield } from "react-icons/fa";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";


const Login = () => {
  const Navigate=useNavigate()
  
  const [loginusername, setloginusername] = useState('')
  const [loginphone, setloginphone] = useState('')
  
  const loginUser = (e)=> {
         e.preventDefault();
        axios.post('http://localhost:3002/login',{ 
            LoginUsername: loginusername,
            LoginPhone: loginphone
        }).then((response)=>{
            if(response.data.status==="Login success"){Navigate("/DashboardShart")}
        })
    }



    return (
        <div className='loginPage flex'>  
            <div className='container flex'> 

            <div className='videoDiv'>
                <video src={video} autoPlay muted loop></video>
            
            <div className="textDiv">
                <h2 className="title">ร่างกายดี ชีวิตดี มีความสุข</h2>
                <p>มาจดบันทึกการเปลี่ยนแปลงของร่างกายกัน</p>
            </div>

          <div className="footerDiv flex">
            <span className="text"> ยังไม่มี บัญชี? </span>
            <Link to={"/register"}>
              <button className="btn">สมัคร</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="logo image" />
          </div>

          <form action="" className="form grid" onSubmit={loginUser}>
            <div className="inputDiv">
              <label htmlFor="username">ขื่อ ผู้ใช้</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setloginusername(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="phone">เบอร์โทร</label>
              <div className="input flex">
                <FaPhoneAlt className="icon" />
                <input
                  type="phone"
                  id="phone"
                  placeholder="Enter Phone"
                  onChange={(event) => {
                    setloginphone(event.target.value);
                  }}
                />
              </div>
            </div>

                    <button type='submit' className='btn flex' >
                        <span>Login</span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>

            {/* <a href="/dashboard">Dashboard</a> */}

            <span className="AdminLogin">
              Admin Login <Link to="/adminlogin">Click Here</Link>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
