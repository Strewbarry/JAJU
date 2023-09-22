import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './SeeReservation.module.css';

function SeeReservation() {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);

    const handleCancelReservation = async (id) => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('User is not authenticated');
            return;
        }
        
        // 사용자에게 취소 확인 메시지를 보여줍니다.
        const isConfirmed = window.confirm('정말 취소하시겠습니까?');
        
        if (!isConfirmed) {
            return; // 사용자가 취소를 확인하지 않았다면 함수를 종료합니다.
        }
        try {
            await axios.delete(`http://192.168.100.38:3000/reservation/delete/${id}`, {
                headers: { 'authorization': token }
            });
            
            // 예약이 성공적으로 취소되면, 취소된 예약을 목록에서 제거합니다.
            setReservations(reservations => reservations.filter(reservation => reservation.id !== id));
            
            // 사용자에게 예약 취소 알림을 띄웁니다.
            window.alert('예약이 취소되었습니다.');
        } catch (err) {
            console.error(err);
            setError('Error cancelling the reservation');
        }
    };
    
    useEffect(() => {
        const fetchReservations = async () => {
            const token = localStorage.getItem('token'); // Assuming token is stored in localStorage
            if(!token) {
                setError('User is not authenticated');
                return;
            }

            try {
                const response = await axios.get('http://192.168.100.38:3000/user/reservation', {
                    headers: { 'authorization': token }
                });
                
                setReservations(response.data);
                console.log(response.data)
            } catch (err) {
                console.error(err);
                setError('Error fetching reservation data');
            }
        };

        fetchReservations();
    }, []);
    
    return (
        <div className={styles.container}>
            <p>예약내역확인</p>
            {error && <p>{error}</p>}
            {reservations.length > 0 ? (
                reservations.map((reservation, index) => (
                    <div key={index} className={styles.reservationItem}>
                        <p>아이디: {reservation.id}</p>
                        <p>위도: {reservation.lat}</p>
                        <p>경도: {reservation.lng}</p>
                        <p>예약 시간: {new Date(reservation.reservation_time).toLocaleString()}</p>
                        <p>반납 시간: {new Date(reservation.return_time).toLocaleString()}</p>
                        <p>사용자 ID: {reservation.user_id}</p>
                        <p>차량 ID: {reservation.vehicle_id}</p>
                        <p>예상 가격:{reservation.price}원</p>
                        <p>차량 번호: {reservation.car_info[0].car_number}</p>
                        <button onClick={() => handleCancelReservation(reservation.id)} className={styles.cancelButton}>예약 취소하기</button>
                        <br/>
                        <br/>
                        <br/>
                        
                        <hr/>
                    </div>
                    
                ))
            ) : (
                <p>No reservations found</p>
            )}
        </div>
    )
}

export default SeeReservation;
