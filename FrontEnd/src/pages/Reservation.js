import React, { useState } from 'react';
import styles from './Reservation.module.css';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios';

const Reservation = () => {
  const [region, setRegion] = useState('');
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [bookingMinutes, setBookingMinutes] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [returnTime, setReturnTime] = useState('');
  const [returnMinutes, setReturnMinutes] = useState('');
  const [availableCars, setAvailableCars] = useState([1, 2, 3]); 

  const regions = ['상암', '양양', '강릉', '부산'];
  const times = Array.from({length: 24}, (_, i) => i < 10 ? `0${i}` : `${i}`);
  const minutesOptions = ['00', '30'];

  const handleFindVehicle = async () => {
    if (!region || !bookingDate || !bookingTime || !bookingMinutes || !returnDate || !returnTime || !returnMinutes) {
      alert('지역과 날짜를 입력해주세요.');
      return;
    }

    try {
      const token = localStorage.getItem('token');

      const response = await axios.post('http://192.168.100.38:3000/vehicle/find', {
        around_location: region,
        start_time: `${bookingDate}T${bookingTime}:${bookingMinutes}:00Z`,
        end_time: `${returnDate}T${returnTime}:${returnMinutes}:00Z`
      }, {
        headers: {
          'authorization': token 
        }
      });
      console.log(response.data);

      const availableCarIds = response.data.map(da => da.car_info_id);
      setAvailableCars(availableCarIds);
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  const navigate = useNavigate();

  const checkInputAndNavigate = () => {
    if (!region || !bookingDate || !bookingTime || !bookingMinutes || !returnDate || !returnTime || !returnMinutes) {
      alert('지역과 날짜를 입력해주세요.');
      return;
    }

    navigate('/carlist', { state: { availableCars } });
  };

return (
    <div className={styles.reservationContainer}>
      <div className={styles.field}>
        <label>지역: </label>
        <select value={region} onChange={(e) => setRegion(e.target.value)}>
          <option value="" disabled>지역을 선택하세요</option>
          {regions.map((r, index) => (
            <option key={index} value={r}>{r}</option>
          ))}
        </select>
      </div>

      <div className={styles.field}>
        <label>예약 날짜 및 시간: </label>
        <div className={styles.dateTime}>
          <input 
            type="date" 
            value={bookingDate} 
            onChange={(e) => setBookingDate(e.target.value)} 
            max="2025-12-31" 
            className={styles.dateInput}
          />
          <select value={bookingTime} onChange={(e) => setBookingTime(e.target.value)} className={styles.timeInput}>
            <option value="" disabled>시</option>
            {times.map((t, index) => (
              <option key={index} value={t}>{t}</option>
            ))}
          </select>
          <select value={bookingMinutes} onChange={(e) => setBookingMinutes(e.target.value)} className={styles.timeInput}>
            <option value="" disabled>분</option>
            {minutesOptions.map((m, index) => (
              <option key={index} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.field}>
        <label>반납 날짜 및 시간: </label>
        <div className={styles.dateTime}>
          <input 
            type="date" 
            value={returnDate} 
            onChange={(e) => setReturnDate(e.target.value)} 
            max="2025-12-31" 
            className={styles.dateInput}
          />
          <select value={returnTime} onChange={(e) => setReturnTime(e.target.value)} className={styles.timeInput}>
            <option value="" disabled>시</option>
            {times.map((t, index) => (
              <option key={index} value={t}>{t}</option>
            ))}
          </select>
          <select value={returnMinutes} onChange={(e) => setReturnMinutes(e.target.value)} className={styles.timeInput}>
            <option value="" disabled>분</option>
            {minutesOptions.map((m, index) => (
              <option key={index} value={m}>{m}</option>
            ))}
          </select>
        </div>
      </div>
      <div className={styles.field}>
        <button onClick={checkInputAndNavigate} className={styles.viewCarsButton}>이용 가능 차량 보기</button>
        <div className={styles.field}>
          <button onClick={handleFindVehicle} className={styles.findVehicleButton}>차량 찾기</button>
        </div>
      </div>
    </div>
  );
};


export default Reservation;
