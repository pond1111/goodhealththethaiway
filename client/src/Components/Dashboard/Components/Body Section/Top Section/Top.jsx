import React from 'react'
import './top.scss'
import { RiHealthBookFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";

const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <RiHealthBookFill className='icon'></RiHealthBookFill>
          <h1>การบันทึกสุขภาพ</h1>
        </div>
        <div className='titleusername'>
          <FaUser className='icon'/>
          <h1>username</h1>
        </div>
      </div>
    </div>
  )
}

export default Top