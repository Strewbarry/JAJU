import React from "react";

function Yangyang() {
  const dummyData = [
    { id: 1, title: "낙산사", image: "https://via.placeholder.com/150" },
    { id: 2, title: "서피비치", image: "https://via.placeholder.com/150" },
    { id: 3, title: "해맞이 공원", image: "https://via.placeholder.com/150" },
    { id: 4, title: "양양 퍼시픽랜드", image: "https://via.placeholder.com/150" },
    { id: 5, title: "씨스페이스 호텔", image: "https://via.placeholder.com/150" },
    { id: 6, title: "오션스프링스 리조트", image: "https://via.placeholder.com/150" },
    { id: 7, title: "송이버섯 백반", image: "https://via.placeholder.com/150" },
    { id: 8, title: "양양 송이버섯 전문점", image: "https://via.placeholder.com/150" },
    { id: 9, title: "해물탕 전문점", image: "https://via.placeholder.com/150" },
    { id: 10, title: "양양 횟집", image: "https://via.placeholder.com/150" }
  ];

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
    </div>
  );
}

export default Yangyang;
