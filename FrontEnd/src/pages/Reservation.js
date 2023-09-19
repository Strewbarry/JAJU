import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Reservation = () => {
  const [dateRange, setDateRange] = useState({
    startDate: null,
    endDate: null,
  });
  const [startTime, setStartTime] = useState('12:00');
  const [endTime, setEndTime] = useState('12:00');

  const onChange = (date) => {
    setDateRange({ startDate: date[0], endDate: date[1] });
  };

  const formatDateTime = (date, time) => {
    if (date && time) {
      const [hours, minutes] = time.split(':');
      date.setHours(hours, minutes);
      return date;
    }
    return null;
  };

  return (
    <div>
      <h1>예약 페이지</h1>
      <Calendar
        onChange={onChange}
        value={[dateRange.startDate, dateRange.endDate]}
        selectRange={true}
      />
      <div>
        <label>
          예약시간: 
          <input type="time" value={startTime} onChange={(e) => setStartTime(e.target.value)} />
        </label>
        <label>
          반납시간: 
          <input type="time" value={endTime} onChange={(e) => setEndTime(e.target.value)} />
        </label>
      </div>
      <p>
        예약시간:{" "}
        {formatDateTime(dateRange.startDate, startTime) &&
          formatDateTime(dateRange.startDate, startTime).toLocaleString('ko-KR')}
      </p>
      <p>
        반납시간:{" "}
        {formatDateTime(dateRange.endDate, endTime) &&
          formatDateTime(dateRange.endDate, endTime).toLocaleString('ko-KR')}
      </p>
    </div>
  );
};

export default Reservation;
