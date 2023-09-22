import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './SeeReservation.module.css';

function SeeReservation() {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);
    
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
