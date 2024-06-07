import React from 'react'
import '../../Dashboard/Components/SideBar Section/sidebar.scss'
import { Link } from "react-router-dom"

import { BsQuestionCircle } from "react-icons/bs";
import { RiHealthBookFill } from "react-icons/ri";
import { BiSolidReport } from "react-icons/bi";
import { IoMdPersonAdd } from "react-icons/io";


import logo from '../../../LoginAssets/logo.png';


const SideBaram = () => {
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
            <Link to='/DashboardAdmin' className='menuLink flex'>
              <BiSolidReport className='icon'/>
              <span className='smallText'>
                User Data
              </span>
            </Link>
          </li>
          
          <li className='listitem'>
          <Link to='/DashboardAdminrecord' className='menuLink flex'>
            <a href='#' className='menuLink flex'>
              <RiHealthBookFill className='icon'/>
              <span className='smallText'>
              Patient Record
              </span>
            </a>
            </Link>
          </li>

          <li className='listitem'>
            <Link to='/DashboardAdminUser' className='menuLink flex'>
              <a href='#' className='menuLink flex'>
                <IoMdPersonAdd className='icon'/>
                <span className='smallText'>
                  Add User
                </span>
              </a>
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

export default SideBaram