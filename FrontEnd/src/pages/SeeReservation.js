import React, { useState, useEffect } from "react";
import axios from "axios";
import styles from './SeeReservation.module.css';

function SeeReservation() {
    const [reservations, setReservations] = useState([]);
    const [error, setError] = useState(null);
    const [showModal, setShowModal] = useState(false);
    const [modalMessage, setModalMessage] = useState("");
    const [selectedId, setSelectedId] = useState(null); // 삭제할 예약 ID를 임시 저장하기 위한 상태

    const handleCancelReservation = (id) => {
        const token = localStorage.getItem('token');
        if (!token) {
            setError('User is not authenticated');
            return;
        }

        setSelectedId(id);
        setModalMessage("정말 취소하시겠습니까?");
        setShowModal(true);
    };

    const handleConfirm = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://192.168.100.38:3000/reservation/delete/${selectedId}`, {
                headers: { 'authorization': token }
            });

            setReservations(reservations => reservations.filter(reservation => reservation.id !== selectedId));

        } catch (err) {
            console.error(err);
            setError('Error cancelling the reservation');
        }
    }

    const handleCancel = () => {
        setSelectedId(null);
        setShowModal(false);
    }

    useEffect(() => {
        const fetchReservations = async () => {
            const token = localStorage.getItem('token'); 
            if(!token) {
                setError('User is not authenticated');
                return;
            }

            try {
                const response = await axios.get('http://192.168.100.38:3000/user/reservation', {
                    headers: { 'authorization': token }
                });
                
                setReservations(response.data);
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
                    </div>
                    
                ))
            ) : (
                <p>No reservations found</p>
            )}
            
            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <span className={styles.closeButton} onClick={handleCancel}>X</span>
                        {modalMessage}
                        <button onClick={handleConfirm}>확인</button>
                        <button onClick={handleCancel}>취소</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default SeeReservation;
