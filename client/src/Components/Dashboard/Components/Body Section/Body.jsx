import React from 'react'
import './body.scss'
import Top from './Top Section/Top'
import Listing from './Listing Section/Listing'
import Activity from './Acyivity Section/Activity'

const Body = () => {
  return (
    <div className='mainContent'>
      
      <Top/>

      <div className='bottom flex'>
      <Listing/>
      <Activity/>
    </div>
    </div>
  )
}

export default Body