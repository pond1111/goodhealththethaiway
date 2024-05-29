import React from 'react'
import './top.scss'
import img from '../../../../../LoginAssets/User.jpg'
import video from '../../../../../LoginAssets/Video.mp4'
import img2 from '../../../../../LoginAssets/imgg.jpg'

import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle2Filled } from "react-icons/tb";
import { IoIosNotificationsOutline } from "react-icons/io";
import { BsArrowRightShort } from "react-icons/bs";

const Top = () => {
  return (
    <div className='topSection'>
      <div className='headerSection flex'>
        <div className='title'>
          <h1>Welcome to Planti.</h1>
          <p>hello User, welcome back!.</p>
        </div>

        <div className='searchBar flex'>
          <input type='text' placeholder='Search Dashboard'/>
          <BiSearchAlt className='icon'/>
        </div>
          
        <div className='adminDiv flex'>
          <TbMessageCircle2Filled className='icon'/>
          <IoIosNotificationsOutline className='icon'/>
          <div className='adminImage'>
            <img src={img} alt='AdminImage'/>
          </div>
        </div>
        
      </div>

      <div className='cardSection flex'>

        <div className='rightCrad flex'>
          <h1>Createe and sell products</h1>
          <p>The wordd's fast growing</p>

          <div className='buttons flex'>
                <button className='btn'>Explore More</button>
                <button className='btn transparent'>Top sellers</button>
          </div>

          <div className='videoDiv'>
            <video src={video} autoPlay loop muted></video>
          </div>
        </div>

        <div className='leftCrad flex'> 
          <div className='mian flex'>

              <div className='textDiv'>
                <h1>My State</h1>

                <div className='flex'>
                  <span>
                    Today <br/> <small>4 Orders</small>
                  </span>
                  <span>
                    This month <br/> <small>111 Orders</small>
                  </span>
                </div>

                <span className='flex link'>
                  Go to my orders <BsArrowRightShort className='icon'/>
                </span>

              </div>

            {/* <div className='imgDiv'>
              <img src={img2} alt="Image Name"/>
            </div> */}

            {/* <div className='sidBarCard'>
                <BsQuestionCircle className='icon'/>
                <div className='cardContent'>
                  <div className='circle1'></div>
                  <div className='circle2'></div>

                  <h3>Help Center</h3>
                  <p>Having trouble in Planti, please Contact us from more question.</p>
                  <button className='btn'>Go to Help Center</button>
                </div>
            </div> */}

          </div>
        </div>

      </div>
    </div>
  )
}

export default Top