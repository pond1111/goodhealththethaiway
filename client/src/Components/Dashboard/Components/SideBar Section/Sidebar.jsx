import React from 'react'
import './sidebar.scss'

import { IoMdSpeedometer } from "react-icons/io";
import { MdDeliveryDining } from "react-icons/md";
import { MdOutlineExplore } from "react-icons/md";
import { BsTrophy } from "react-icons/bs";
import { AiOutlinePieChart } from "react-icons/ai";
import { BiTrendingUp } from "react-icons/bi";
import { MdOutlinePermContactCalendar } from "react-icons/md";
import { BsCreditCard2Front } from "react-icons/bs";
import { BsQuestionCircle } from "react-icons/bs";


import logo from '../../../../LoginAssets/logo.png';


const SideBar = () => {
  return (
    <div className='sideBar grid'>

      <div className='logoDiv flex'>
        <img src={logo} alt='Image Name'/>
        <h2>Planti.</h2>
      </div>

      <div className="menuDiv">
        <h3 className="divTitle">
          QUICK MENU
        </h3>
        <ul className="menuLists grid">

          <li className='listitem'>
            <a href='#' className='menuLink flex'>
              <IoMdSpeedometer className='icon'/>
              <span className='smallText'>
                Dash board
              </span>
            </a>
          </li>

          <li className='listitem'>
            <a href='#' className='menuLink flex'>
              <MdDeliveryDining className='icon'/>
              <span className='smallText'>
                My Order
              </span>
            </a>
          </li>

          <li className='listitem'>
            <a href='#' className='menuLink flex'>
              <MdOutlineExplore className='icon'/>
              <span className='smallText'>
                Explore
              </span>
            </a>
          </li>
        
          <li className='listitem'>
            <a href='#' className='menuLink flex'>
              <BsTrophy className='icon'/>
              <span className='smallText'>
                Product
              </span> 
            </a>
          </li>

        </ul>
      </div>

      <div className="settingDiv">
        <h3 className="divTitle">
          SETTING
        </h3>
        <ul className="menuLists grid">

          <li className='listitem'>
            <a href='#' className='menuLink flex'>
              <AiOutlinePieChart className='icon'/>
              <span className='smallText'>
                Charts
              </span>
            </a>
          </li>

          <li className='listitem'>
            <a href='#' className='menuLink flex'>
              <BiTrendingUp className='icon'/>
              <span className='smallText'>
                Trend
              </span>
            </a>
          </li>

          <li className='listitem'>
            <a href='#' className='menuLink flex'>
              <MdOutlinePermContactCalendar className='icon'/>
              <span className='smallText'>
                Contact
              </span>
            </a>
          </li>
        
          <li className='listitem'>
            <a href='#' className='menuLink flex'>
              <BsCreditCard2Front className='icon'/>
              <span className='smallText'>
                bliling
              </span> 
            </a>
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