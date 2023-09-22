import React, { useState, useEffect } from "react";
import axios from 'axios';
import styles from './CheckReservation.module.css';

function CheckReservation() {
    
    const [bookingDateTime, setBookingDateTime] = useState('');
    const [returnDateTime, setReturnDateTime] = useState('');
    const [selectedCar, setSelectedCar] = useState('');
    const [selectedLatitude, setSelectedLatitude] = useState('');
    const [selectedLongitude, setSelectedLongitude] = useState('');
    const selectedCarFee = localStorage.getItem('selectedCarFee'); // 문자열로 저장된 값을 가져옵니다.
    useEffect(() => {
        setBookingDateTime(localStorage.getItem('bookingDateTime') || '');
        setReturnDateTime(localStorage.getItem('returnDateTime') || '');
        setSelectedCar(localStorage.getItem('selectedCar') || '');
        setSelectedLatitude(localStorage.getItem('selectedLatitude') || '');
        setSelectedLongitude(localStorage.getItem('selectedLongitude') || '');
    }, []);
    
    const handleReservationConfirmation = async () => {
        const token = localStorage.getItem('token');
        if (!token) {
            console.error('User is not authenticated');
            return;
        }
        
        try {
            
            const response = await axios.post('http://192.168.100.38:3000/reservation/make', {
                vehicle_id: selectedCar,
                reservation_time: bookingDateTime,
                return_time: returnDateTime,
                lat: selectedLatitude,
                lng: selectedLongitude,
                price: selectedCarFee, // 가져온 값을 price 키의 값으로 설정합니다.
            }, 
            // 여기서 다른 설정이나 header 등이 필요하다면 계속 작성합니다.
         {
                headers: {
                    'authorization': token
                }
            });
            console.log('Reservation Confirmation Response:', response.data);
            if (response.status === 200){
                alert('예약이 완료되었습니다')
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
                <p>선택한 차량: {selectedCar}</p>
                <p>호출할 지역: 위도 {selectedLatitude}, 경도 {selectedLongitude}</p>
                <p>예상 가격: {selectedCarFee}</p>
            </div>
            
            <button onClick={handleReservationConfirmation} className={styles.confirmButton}>
                예약 확정
            </button>
        </div>
    );
}

export default CheckReservation;
