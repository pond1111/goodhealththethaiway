import React, { useState, useEffect } from 'react';
import './listingshart.scss';
import axios from 'axios';

const Listingshart = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3002/listingshart');
        setData(response.data);
        console.log(response.data); // ตรวจสอบข้อมูลที่ดึงมา
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      <h1>ข้อมูล User:</h1>
      {data.length > 0 ? (
        data.map((item, index) => (
          <div key={index} className="data-item">
            <p><strong>บันทึกล่าสุด:</strong> {item.date}</p>
            <p><strong>น้ำหนัก:</strong> {item.weight}</p>
            <p><strong>ความดันโลหิต:</strong> {item.bpressure}</p>
            <p><strong>รอบเอว:</strong> {item.wccfr}</p>
            <p><strong>ส่วนสูง:</strong> {item.height}</p>
            <p><strong>ค่าน้ำตาลก่อนอาหาร:</strong> {item.Sgvbefore}</p>
            <p><strong>ค่าน้ำตาลหลังอาหาร:</strong> {item.SgvAfter}</p>
            <p><strong>ค่าน้ำตาลสะสม:</strong> {item.Acmlsugarlevel}</p>
          </div>
        ))
      ) : (
        <p>No data available</p>
      )}
    </div>
  );
};

export default Listingshart;
