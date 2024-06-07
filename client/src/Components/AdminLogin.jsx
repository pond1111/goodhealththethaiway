import { useState } from "react";
//import "./Login.scss";
import "../App.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import video from "../LoginAssets/Video.mp4";
import logo from "../LoginAssets/logo.png";

import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";


const AdminLogin = () => {
  const Navigate=useNavigate()
  
  const [Adminloginusername, setAdminloginusername] = useState('')
  const [Adminloginphone, setAdminloginphone] = useState('')
  const [Adminloginpassword, setAdminloginpassword] = useState('')
  
  const Adminlogin = (e)=> {
         e.preventDefault();
        axios.post('http://localhost:3002/Adminlogin',{ 
            AdminLoginUsername: Adminloginusername,
            AdminLoginPhone: Adminloginphone,
            AdminloginPassword: Adminloginpassword
        }).then((response)=>{
            if(response.data.status==="Login success"){Navigate("/DashboardAdmin")}
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

          <form action="" className="form grid" onSubmit={Adminlogin}>
            <div className="inputDiv">
              <label htmlFor="Adminusername">ขื่อ ผู้ใช้</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setAdminloginusername(event.target.value);
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
                    setAdminloginphone(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">รหัสผ่าน</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter password"
                  onChange={(event) => {
                    setAdminloginpassword(event.target.value);
                  }}
                />
              </div>
            </div>

                    <button type='submit' className='btn flex' >
                        <span>Login</span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminLogin;
