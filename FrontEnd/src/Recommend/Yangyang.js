import React from "react";
import YangImage from '../assets/Yangyang.png'
import { useNavigate } from 'react-router-dom';

function Yangyang() {
  const dummyData = [
    { id: 1, title: "낙산사", image: YangImage },
    { id: 2, title: "서피비치", image: YangImage },
    { id: 3, title: "해맞이 공원", image: YangImage },
    { id: 4, title: "양양 퍼시픽랜드", image: YangImage },
    { id: 5, title: "씨스페이스 호텔", image: YangImage },
    { id: 6, title: "오션스프링스 리조트", image: YangImage },
    { id: 7, title: "송이버섯 백반", image: YangImage },
    { id: 8, title: "양양 송이버섯 전문점", image: YangImage },
    { id: 9, title: "해물탕 전문점", image: YangImage },
    { id: 10, title: "양양 횟집", image: YangImage }
  ];
  const navigate = useNavigate();

  return (
    <div style={{ marginBottom: '70px' }}>
      <p>양양</p>
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

export default Yangyang;
