import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import styles from './CheckReservation.module.css';
import {Url} from '../server_url';

function CheckReservation() {
    const url = Url
    const [bookingDateTime, setBookingDateTime] = useState('');
    const [returnDateTime, setReturnDateTime] = useState('');
    const [selectedCarId, setSelectedCar] = useState('');
    const [selectedLatitude, setSelectedLatitude] = useState('');
    const [selectedLongitude, setSelectedLongitude] = useState('');
    const selectedCarFee = localStorage.getItem('selectedCarFee'); // 문자열로 저장된 값을 가져옵니다.
    const navigate = useNavigate();
    useEffect(() => {
        setBookingDateTime(localStorage.getItem('bookingDateTime') || '');
        setReturnDateTime(localStorage.getItem('returnDateTime') || '');
        setSelectedCar(localStorage.getItem('selectedCarId') || '');
        setSelectedLatitude(localStorage.getItem('selectedLatitude') || '');
        setSelectedLongitude(localStorage.getItem('selectedLongitude') || '');
    }, []);
    
    const handleReservationConfirmation = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('로그인 후 이용해주세요');
            return;
        }
        
        try {

            const response = await axios.post(`${url}/reservation/make`, {
                vehicle_id: selectedCarId,
                reservation_time: bookingDateTime,
                return_time: returnDateTime,
                lat: selectedLatitude,
                lng: selectedLongitude,
                price: selectedCarFee,
            }, 
            {
                headers: { 'authorization': token }
            }
            
);
            console.log('Reservation Confirmation Response:', response.data);
            if (response.status === 200){
                alert('예약이 완료되었습니다')
                navigate('/seereservation')
            }
        } catch (error) {
            console.error('Reservation Confirmation Error:', error);
        }
    };
    
    return (
        <div className={styles.checkReservationContainer}>
            <p className={styles.title}>예약 내역 확인 페이지</p>
            
            <div className={styles.reservationDetail}>
                <p>예약 시간: {bookingDateTime.replace('T', ' ')}</p>
                <p>반납 시간: {returnDateTime.replace('T', ' ')}</p>
                <p>선택한 차량: {selectedCarId}</p>
                <p>호출할 지역: 위도 {selectedLatitude}, 경도 {selectedLongitude}</p>
                <p>예상 가격: {selectedCarFee}원</p>
            </div>
            
            <button onClick={handleReservationConfirmation} className={styles.confirmButton}>
                예약 확정
            </button>
        </div>
    );
}

export default CheckReservation;
