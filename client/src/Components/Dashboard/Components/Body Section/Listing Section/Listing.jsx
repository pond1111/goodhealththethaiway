import React from 'react'
import './listing.scss'

import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";


const listing = () => {
  return (
    <div className='listingSection'>

      <div className='heading flex'>
        <h1>My Listing</h1>
        <button className='btn flex'>
          See All <BsArrowRightShort className='icon'/>
        </button>
      </div>

      <div className='secContianer flex'>
        <div className='singleItem'>
          <AiFillHeart className='icon'/>
          <img src="" alt="Item Name"/>
        </div>
      </div>
    </div>
  )
}

export default listing