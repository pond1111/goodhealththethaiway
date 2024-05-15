import React, {useState} from 'react';
import './Register.scss'
import '../../App.scss'
import { Link } from "react-router-dom"


import video from '../../LoginAssets/Video.mp4'
import logo from '../../LoginAssets/logo.png'

import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"
import {AiOutlineSwapRight} from "react-icons/ai"
import axios from 'axios'; 

const Register = () => {
    const [username, setusername] = useState('')
    const [phone, setphone] = useState('')
   

    const createUser = ()=> {
        axios.post('http://localhost:3002/register',{ 
            Username: username,
            Phone: phone
        }).then(()=>{
            console.log('User had been created')
        })
    }

    return (
        <div className='registerPage flex'>  
            <div className='container flex'> 

            <div className='videoDiv'>
                <video src={video} autoPlay muted loop></video>
            
            <div className="textDiv">
                <h2 className="title">Create And Sell Extraordinary Products</h2>
                <p>Adopt the peace of nature!</p>
            </div>

            <div className="footerDiv flex">
             <span className="text">have a account?</span>
             <Link to={'/'}>
             <button className="btn">To LoginPage</button>
             </Link>
            </div>
            </div>

            <div className="formDiv flex">
                <div className="headerDiv">
                    < img src={logo} alt="logo image" />
                    <h3>Let Us Know You!</h3>
                </div>

                <form action="" className='form grid'>
            
                    <div className='inputDiv'>
                     <label htmlFor="username">Usernsme</label>
                     <div className="input flex">
                     <FaUserShield className='icon'/>
                     <input type="text" id='username' placeholder="Enter Username"
                     on onChange={(event)=>{
                        setusername(event.target.value)
                     }}/>
                     </div>
                    </div>
                    <div className='inputDiv'>
                     <label htmlFor="username">Phone Number</label>
                     <div className="input flex">
                     <BsFillShieldLockFill  className='icon'/>
                     <input type="phone" id='phone' placeholder="Enter Phone Number"
                     on onChange={(event)=>{
                        setphone(event.target.value)
                     }}/>
                     </div>
                    </div>

                    <button type='submit' className='btn flex' onClick={createUser}>
                        <span>Register</span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>

                </form>
            </div>


            </div>
        </div>
    )
}

export default Register     