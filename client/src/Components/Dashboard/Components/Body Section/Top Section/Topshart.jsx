import React from 'react'
import './top.scss'
import { RiHealthBookFill } from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";

const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <BiSolidReport className='icon'></BiSolidReport>
          <h1> กราฟเปรียบเทียบ
                ค่าน้ำตาลสะสม และภาพรวมข้อมูล</h1>
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