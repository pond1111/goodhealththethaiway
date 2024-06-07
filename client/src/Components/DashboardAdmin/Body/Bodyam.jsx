import React from 'react'
import './Bodyam.scss'
import Listing from '../../Dashboard/Components/Body Section/Listing Section/Listing'
import Listingshart from '../../Dashboard/Components/Body Section/Listing Section/Listingshart'
import Topam from '../TopamSection/Topam'



const Bodyam = () => {
  return (
    <div className='mainContent'>
      
      <Topam/>

      <div className='bottom flex'>
      <Listing/>
      
      <Listingshart/>
      
    </div>
    </div>
  )
}

export default Bodyam