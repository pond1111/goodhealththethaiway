import React,{useState} from 'react';
import './Login.scss'
import '../../App.scss'
import {Link} from "react-router-dom";
import axios from 'axios'; 


import video from '../../LoginAssets/Video.mp4'
import logo from '../../LoginAssets/logo.png'

import {FaUserShield} from "react-icons/fa";
import {BsFillShieldLockFill} from "react-icons/bs";
import {AiOutlineSwapRight} from "react-icons/ai";

const Login = () => {

   // e.prevenDefault();

    const [loginusername, setloginusername] = useState('')
    const [loginphone, setloginphone] = useState('')
    

    const loginUser = async(Event)=> {
        Event.preventDefault()
        
        await axios.post('http://localhost:3002/login',{ 
            LoginUsername: loginusername,
            LoginPhone: loginphone
        }).then((response)=>{
            console.log(response)
        })
    }



    return (
        <div className='loginPage flex'>  
            <div className='container flex'> 

            <div className='videoDiv'>
                <video src={video} autoPlay muted loop></video>
            
            <div className="textDiv">
                <h2 className="title">ร่างกายดี ชีวิตดี มีความสุข</h2>
                <p>มาจดบันทึกการเปลี่ยนแปลงของร่างกายด้วยกัน</p>
            </div>

            <div className="footerDiv flex">
             <span className="text"> ยังไม่มี บัญชี? </span>
             <Link to={'/register'}>
             <button className="btn">สมัคร</button>
             </Link>
            </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    < img src={logo} alt="logo image" />
                    <h3> </h3>
                </div>

                <form action="" className='form grid'>
                    <div className='inputDiv'>
                     <label htmlFor="username">ขื่อ ผู้ใช้</label>
                     <div className="input flex">
                     <FaUserShield className='icon'/>
                     <input type="text" id='username' placeholder="Enter Username"
                     onChange={(event)=>{
                        setloginusername(event.target.value)
                     }}/>
                     </div>
                    </div>

                    <div className='inputDiv'>
                     <label htmlFor="username">เบอร์โทร</label>
                     <div className="input flex">
                     <BsFillShieldLockFill  className='icon'/>
                     <input type="phone" id='phone' placeholder="Enter Phone"
                      onChange={(event)=>{
                        setloginphone(event.target.value)
                     }}/>
                     </div>
                    </div>

                    <button type='submit' className='btn flex' onClick={(Event)=>loginUser(Event)}>
                        <span>Login</span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>

                    <a href="/dashboard">Dashboard</a>

                    <span className="forgotPassword">
                      Forgot your password? <a href="">Click Here</a>
                    </span>

                </form>
            </div>


            </div>
        </div>
    )
}

export default Login      