import React from 'react'
import './sidebar.scss'
import { Link } from "react-router-dom"

import { BsQuestionCircle } from "react-icons/bs";
import { RiHealthBookFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";


import logo from '../../../../LoginAssets/logo.png';


const SideBar = () => {
  return (
    <div className='sideBar grid'>

      <div className='logoDiv flex'>
        <img src={logo} alt='Image Name'/>
        <h2>good
            <br/>
            health 
            <br/>
            the thai way</h2>
      </div>

      <div className="menuDiv">
        
        <ul className="menuLists grid">
          <li className='listitem'>
            <Link to='/Dashboard' className='menuLink flex'>
              <RiHealthBookFill className='icon'/>
              <span className='smallText'>
                การบันทึกสุขภาพ
              </span>
            </Link>

          </li>

          
          <li className='listitem'>
            <Link to='/Dashboardshart' className='menuLink flex'>
              <BiSolidReport className='icon'/>
              <span className='smallText'>
                กราฟเปรียบเทียบ
                ค่าน้ำตาลสะสม <br/>และภาพรวมข้อมูล
              </span>
            </Link>


          </li>
        
        </ul>
      </div>


      <div className='sidBarCard'>
        <BsQuestionCircle className='icon'/>
        <div className='cardContent'>
          <div className='circle1'></div>
          <div className='circle2'></div>

          <h3>Help Center</h3>
          <p>Having trouble in Planti, please Contact us from more question.</p>
          <button className='btn'>Go to Help Center</button>
        </div>
      </div>
    </div>
  )
}

export default SideBar