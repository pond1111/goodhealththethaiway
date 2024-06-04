import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const DateSelector = () => {
  const [selectedDate, setSelectedDate] = useState(null);

  const handleDateChange = (date) => {
    setSelectedDate(date);
    console.log("Selected date:", date);
    // เก็บวันที่ที่เลือกลงในฐานข้อมูลหรือสถานะอื่น ๆ ที่ต้องการ
  };

  return (
    <div>
      <DatePicker
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat="yyyy/MM/dd"
        placeholderText="เลือกวันที่"
      />
    </div>
  );
};

export default DateSelector;
