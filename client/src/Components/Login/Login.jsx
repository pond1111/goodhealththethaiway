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

    const loginUser = ()=> {
        axios.post('http://localhost:3002/login',{ 
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
                <h2 className="title">Create And Sell Extraordinary Products</h2>
                <p>Adopt the peace of nature!</p>
            </div>

            <div className="footerDiv flex">
             <span className="text"> Don't have a account? </span>
             <Link to={'/register'}>
             <button className="btn">Sign Up</button>
             </Link>
            </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    < img src={logo} alt="logo image" />
                    <h3>Welcome Back!</h3>
                </div>

                <form action="" className='form grid'>
                    <div className='inputDiv'>
                     <label htmlFor="username">Usernsme</label>
                     <div className="input flex">
                     <FaUserShield className='icon'/>
                     <input type="text" id='username' placeholder="Enter Username"
                     onChange={(event)=>{
                        setloginusername(event.target.value)
                     }}/>
                     </div>
                    </div>

                    <div className='inputDiv'>
                     <label htmlFor="username">Phone</label>
                     <div className="input flex">
                     <BsFillShieldLockFill  className='icon'/>
                     <input type="phone" id='phone' placeholder="Enter Phone"
                      onChange={(event)=>{
                        setloginphone(event.target.value)
                     }}/>
                     </div>
                    </div>

                    <button type='submit' className='btn flex' onClick={loginUser}>
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