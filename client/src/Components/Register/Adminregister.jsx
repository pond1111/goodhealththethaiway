import React, {useState} from 'react';
import './Register.scss'
import '../../App.scss'
import { Link } from "react-router-dom"


import video from '../../LoginAssets/Video.mp4'
import logo from '../../LoginAssets/logo.png'

import {FaUserShield} from "react-icons/fa"
import {BsFillShieldLockFill} from "react-icons/bs"//แม่กุญแจ
import {AiOutlineSwapRight} from "react-icons/ai"
import { FaPhoneAlt } from "react-icons/fa"

import axios from 'axios'; 

const AdminRegister = () => {
    const [adminusername, setAdminusername] = useState('')
    const [adminphone, setAdminphone] = useState('')
    const [adminpassword, setAdminpassword] = useState('')
   

    const createUser = ()=> {
        axios.post('http://localhost:3002/adminregister',{ 
            AdminUsername: adminusername,
            AdminPhone: adminphone,
            Adminpassword: adminpassword
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
                <h2 className="title">ร่างกายดี ชีวิตดี มีความสุข</h2>
                <p>มาจดบันทึกการเปลี่ยนแปลงของร่างกายด้วยกัน</p>
            </div>

            <div className="footerDiv flex">
             <span className="text">มีบัญชีแล้วใช่ใหม?</span>
             <Link to={'/'}>
             <button className="btn">กลับไปหน้า ล็อคอิน</button>
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
                     <label htmlFor="username">ชื่อผู้ใช้</label>
                     <div className="input flex">
                     <FaUserShield className='icon'/>
                     <input type="text" id='username' placeholder="Enter Username"
                     on onChange={(event)=>{
                        setAdminusername(event.target.value)
                     }}/>
                     </div>
                    </div>
                    <div className='inputDiv'>
                     <label htmlFor="username">เบอร์โทร</label>
                     <div className="input flex">
                     <FaPhoneAlt  className='icon'/>
                     <input type="phone" id='phone' placeholder="Enter Phone Number"
                     on onChange={(event)=>{
                        setAdminphone(event.target.value)
                     }}/>
                     </div>
                    </div>

                    <div className='inputDiv'>
                     <label htmlFor="Adminpassword">รหัสผ่าน</label>
                     <div className="input flex">
                     <BsFillShieldLockFill  className='icon'/>
                     <input type="Adminpassword" id='Adminpassword' placeholder="Enter Password"
                     on onChange={(event)=>{
                        setAdminpassword(event.target.value)
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

export default AdminRegister     