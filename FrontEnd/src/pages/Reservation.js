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
  const [showModal, setShowModal] = useState(false);

  const regions = ['서울', '부산', '제주','강릉','대전','광주','구미','K-city'];
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

      if (availableCarIds.length === 0) {
        setShowModal(true);
      }

    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };

  const navigate = useNavigate();

  const checkInputAndNavigate = async () => {
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
  
      // 차량이 없는 경우 모달을 띄우고, 차량이 있는 경우에만 /carlist로 이동합니다.
      if (availableCarIds.length === 0) {
        setShowModal(true);
      } else {
        navigate('/carlist', { state: { availableCars } });
      }
  
    } catch (error) {
      console.error('Error making POST request:', error);
    }
  };
  

  const handleRegionChange = (e) => {
    const selectedRegion = e.target.value;
    setRegion(selectedRegion);
    localStorage.setItem('selectedRegion', selectedRegion);
  };
  
return (
    <div className={styles.reservationContainer}>
        {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <span className={styles.closeButton} onClick={() => setShowModal(false)}>X</span>
            이용할 수 있는 차량이 없습니다.
          </div>
        </div>
      )}
      <div className={styles.field}>
        <label>지역: </label>
          <select value={region} onChange={handleRegionChange}>
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
          <button onClick={handleFindVehicle} className={styles.findVehicleButton}>콘솔로 찍어보기</button>
        </div>
      </div>
    </div>
  );
};


export default Reservation;
