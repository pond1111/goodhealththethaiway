import React, { useState } from 'react';
import './listing.scss';
import DateSelector from './DateSelector';
import axios from 'axios';
import { AiOutlineSwapRight } from "react-icons/ai";

const Listing = () => {
  const userId = localStorage.getItem('id'); // ดึง userId จาก localStorage

  const [weight, setWeight] = useState('');
  const [bpressure, setBpressure] = useState('');
  const [height, setHeight] = useState('');
  const [wccfr, setWccfr] = useState('');
  const [Sgvbefore, setSgvbefore] = useState('');
  const [SgvAfter, setSgvAfter] = useState('');
  const [Acmlsugarlevel, setAcmlsugarlevel] = useState('');
  const [date, setDate] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3002/saveUserData', {
        Weight: weight,
        Bloodpressure: bpressure,
        Height: height,
        Wccfr: wccfr,
        Sgvbefore:Sgvbefore,
        SgvAfter: SgvAfter,
        Acmlsugarlevel:acmlsugarlevel,
        Date: date,
      });
      alert('Data saved successfully');
    } catch (error) {
      console.error('Error saving data', error);
    }
  };

  return (
    <div className='listingSection'>
      <form onSubmit={handleSubmit}>
        <div className='input flex'>
          <h1>เลือกวันที่:</h1>
          <DateSelector onDateChange={setDate} />
        </div>
        <div className='inputdata flex'>
          <label htmlFor='weight'>น้ำหนัก: </label>
          <input type='text' id='weight' name='weight' value={weight} 
          onChange={(e) => {
          setWeight(e.target.value)}} />


          <label htmlFor='bpressure'>ความดัน: </label>
          <input type='text' id='bpressure' name='bpressure' value={bpressure} 
          onChange={(e) => {
          setBpressure(e.target.value) }} />
        </div>

        <div className='inputdata flex'>
          <label htmlFor='height'>ส่วนสูง: </label>
          <input type='text' id='height' name='height' value={height} 
          onChange={(e) => {
          setHeight(e.target.value)}} />

          <label htmlFor='wccfr'>รอบเอว: </label>
          <input type='text' id='wccfr' name='wccfr' value={wccfr} 
          onChange={(e) => {
          setWccfr(e.target.value)}} />
        </div>

        <div className='inputdata flex'>
          <label htmlFor='Sgvbefore'>ค่าน้ำตาล<br />ก่อนอาหาร: </label>
          <input type='text' id='Sgvbefore' name='Sgvbefore' value={Sgvbefore}
           onChange={(e) =>{
            setSgvbefore(e.target.value)}} />

          <label htmlFor='SgvAfter'>ค่าน้ำตาล<br />หลังอาหาร: </label>
          <input type='text' id='SgvAfter' name='SgvAfter' value={SgvAfter} 
          onChange={(e) => {
          setSgvAfter(e.target.value)}} />
        </div>

        <div className='inputdata flex'>
          <label htmlFor='Acmlsugarlevel'>ค่าน้ำตาลสะสม: </label>
          <input type='text' id='Acmlsugarlevel' name='Acmlsugarlevel' value={Acmlsugarlevel} 
          onChange={(e) => {
          setAcmlsugarlevel(e.target.value)}} />
        </div>

        <button type='submit' className='btn flex'>
          <span>บันทึก</span>
          <AiOutlineSwapRight className="icon" />
        </button>
      </form>
    </div>
  );
};

export default Listing;
