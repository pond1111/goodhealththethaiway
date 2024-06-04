import React from 'react'
import './body.scss'
import Topshart from './Top Section/Topshart'
import Listingshart from './Listing Section/Listingshart';
import Activity from './Acyivity Section/Activity'

const Bodyshart = () => {
  return (
    <div className='mainContent'>
      
      <Topshart/>

      <div className='bottom flex'>
      <Listingshart/>
      {/* <Activity/> */}
    </div>
    </div>
  )
}

export default Bodyshart