import React, { useState } from "react";
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './CarList.module.css'; 

import k5Image from '../assets/k5.png';
import starexImage from '../assets/starex.png';
import niroImage from '../assets/niro.png';

function CarList() {
  const [selectedCar, setSelectedCar] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const availableCars = location.state.availableCars;

  const allCars = [
    { id: 2, name: "K5", src: k5Image },
    { id: 3, name: "Starex", src: starexImage },
    { id: 1, name: "Niro", src: niroImage },
  ];

  const cars = allCars.filter(car => availableCars.includes(car.id));

  const handleCarSelection = (car) => {
    setSelectedCar(car.name);
  };

  return (
    <div>
      <div className={styles.carList}>
        {cars.length > 0 ? (
          cars.map((car, index) => (
            <div key={index} className={styles.carItem}>
              <img src={car.src} alt={car.name} className={styles.carImage} />
              <button 
                onClick={() => handleCarSelection(car)} 
                className={styles.button}
              >
                {car.name} 선택
              </button>
            </div>
          ))
        ) : (
          <div>
            <p>예약 가능한 차량이 없습니다.</p>
            <button onClick={() => navigate('/reservation')} className={styles.navigateButton}>다시 예약하기</button>
          </div>
        )}
      </div>
      {selectedCar && <p>선택한 차량: {selectedCar}</p>}
      {cars.length > 0 && <button onClick={() => navigate('/mapreservation')} className={styles.navigateButton}>호출할 지역 선택하기</button>}
    </div>
  );
}

export default CarList;
