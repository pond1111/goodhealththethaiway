import React from 'react';
import './listing.scss';
import DateSelector from './DateSelector';

import {AiOutlineSwapRight} from "react-icons/ai"

const Listing = () => {
  return (
    <div className='listingSection'>
      <div className='input flex'>
        <h1>เลือกวันที่:</h1><DateSelector />
      </div>
      <div className='inputdata flex'>
        <label htmlFor='weight'>น้ำหนัก: </label>
        <input type='text' id='weight' name='weight' />
        <label htmlFor='bloodPressure'>ความดัน: </label>
        <input type='text' id='bloodPressure' name='bloodPressure' />
      </div>
      <div className='inputdata flex'>
          <label htmlFor='weight'>ส่วนสูง: </label>
          <input type='text' id='weight' name='weight' />
          <label htmlFor='bloodPressure'>รอบเอว: </label>
          <input type='text' id='bloodPressure' name='bloodPressure' />
      </div>
      <div className='inputdata flex'>
          <label htmlFor='weight'>ค่าน้ำตาล<br/>ก่อนอาหาร: </label>
          <input type='text' id='weight' name='weight' />
          <label htmlFor='bloodPressure'>ค่าน้ำตาล<br/>หลังอาหาร: </label>
          <input type='text' id='bloodPressure' name='bloodPressure' />
      </div>
      <div className='inputdata flex'>
          <label htmlFor='weight'>ค่าน้ำตาลสะสม: </label>
          <input type='text' id='weight' name='weight' />
      </div>

      <button type='submit' className='btn flex' >
                        <span>บันทึก</span>
                        <AiOutlineSwapRight className="icon"/>
                    </button>
    </div>
    
    
  );
}

export default Listing;
