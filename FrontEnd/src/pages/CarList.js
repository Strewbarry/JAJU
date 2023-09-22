import React, { useState, useEffect } from "react";
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
  // console.log(availableCars)
  const ablecars = []
  availableCars.forEach((car) => {
    ablecars.push(car)
  })
  // console.log(ablecars)
  const allCars = [
    { id: 1, name: "Niro", src: niroImage },
    { id: 2, name: "K5", src: k5Image },
    { id: 3, name: "Starex", src: starexImage },
  ];
  

  // const cars = allCars.filter(car => availableCars.includes(car.id));

const handleCarSelection = (car) => {
    setSelectedCar(car);
    localStorage.setItem('selectedCarId', car.id); // 선택한 차량의 id만 localStorage에 저장합니다.
    localStorage.setItem('selectedCarFee', car.total_fee.toString()); // 선택한 차량의 total_fee 값을 문자열로 변환하여 localStorage에 저장합니다.
};



  useEffect(() => {
    // 컴포넌트가 마운트될 때 localStorage에서 예약 시간과 반납 시간을 가져와 console에 찍습니다.
    const bookingDateTime = localStorage.getItem('bookingDateTime');
    const returnDateTime = localStorage.getItem('returnDateTime');
    console.log('예약 시간:', bookingDateTime);
    console.log('반납 시간:', returnDateTime);
  }, []);
  
  return (
    <div>
      <div className={styles.carList}>
        {availableCars.length > 0 ? (
          availableCars.map((availableCar, index) => (
            <div key={index} className={styles.carItem}>
              <div>{index + 1}</div>
              <img 
                src={allCars[availableCar.car_info_id - 1].src} 
                alt={allCars[availableCar.car_info_id - 1].name} 
                className={styles.carImage} 
              />
              <div>{availableCar.fuel_left}km 주행 가능</div>
              <button 
                onClick={() => handleCarSelection(availableCar)} 
                className={styles.button}
              >
                {allCars[availableCar.car_info_id - 1].name} 선택
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
      {selectedCar && <p>예상가격: {selectedCar.total_fee}원 </p>}
      <button onClick={() => navigate('/mapreservation')} className={styles.navigateButton}>호출할 지역 선택하기</button>
    </div>
);

}

export default CarList;
