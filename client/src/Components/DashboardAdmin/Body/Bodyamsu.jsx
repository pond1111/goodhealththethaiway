import React from 'react'
import './Bodyam.scss'
import Listing from '../../Dashboard/Components/Body Section/Listing Section/Listing'
import Topam from '../TopamSection/Topam'



const Bodyam = () => {
  return (
    <div className='mainContent'>
      
      <Topam/>

      <div className='bottom flex'>
      <Listing/>
      
    </div>
    </div>
  )
}

export default Bodyam