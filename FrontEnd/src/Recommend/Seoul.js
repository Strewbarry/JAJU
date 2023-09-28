import React from "react";
import SeoulImage from '../assets/Seoul.png'
import { useNavigate } from 'react-router-dom';
function Seoul() {
  const dummyData = [
    { id: 1, title: "명동", image: SeoulImage },
    { id: 2, title: "남산 타워", image: SeoulImage },
    { id: 3, title: "경복궁", image: SeoulImage },
    { id: 4, title: "동대문 디자인 플라자", image: SeoulImage },
    { id: 5, title: "한강", image: SeoulImage },
    { id: 6, title: "이태원", image: SeoulImage },
    { id: 7, title: "강남", image: SeoulImage },
    { id: 8, title: "홍대", image: SeoulImage },
    { id: 9, title: "코엑스", image: SeoulImage },
    { id: 10, title: "롯데월드", image: SeoulImage }
  ];
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: '70px' }}>
      <p>서울</p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
        {dummyData.map(item => (
          <div key={item.id} style={{ border: '1px solid #ccc', borderRadius: '5px', padding: '10px', width: '150px' }}>
            <img src={item.image} alt={item.title} style={{ width: '100%', height: '100px', objectFit: 'cover' }} />
            <p style={{ textAlign: 'center', margin: '10px 0 0 0' }}>{item.title}</p>
          </div>
        ))}
      </div>
      <button onClick={() => navigate('/reservation')}>예약 페이지로 이동</button>
    </div>
  );
}


export default Seoul;