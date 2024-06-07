import React from 'react'
import './Topam.scss'
import { RiHealthBookFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Topam = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <RiHealthBookFill className='icon'></RiHealthBookFill>
          <h1>User Data</h1>
        </div>
        <div className='titleusername'>
          <FaUser className='icon'/>
          <h1>Admin</h1>
        </div>
      </div>
    </div>
  )
}

export default Topam