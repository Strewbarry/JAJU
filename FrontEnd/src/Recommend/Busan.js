import React from "react";

function Busan() {
  const dummyData = [
    { id: 1, title: "해운대", image: "https://via.placeholder.com/150" },
    { id: 2, title: "부산 타워", image: "https://via.placeholder.com/150" },
    { id: 3, title: "광안리", image: "https://via.placeholder.com/150" },
    { id: 4, title: "태종대", image: "https://via.placeholder.com/150" },
    { id: 5, title: "감천 문화 마을", image: "https://via.placeholder.com/150" },
    { id: 6, title: "부산 국제 영화제", image: "https://via.placeholder.com/150" },
    { id: 7, title: "부산 아쿠아리움", image: "https://via.placeholder.com/150" },
    { id: 8, title: "영도", image: "https://via.placeholder.com/150" },
    { id: 9, title: "동백섬", image: "https://via.placeholder.com/150" },
    { id: 10, title: "부산 시티투어", image: "https://via.placeholder.com/150" }
  ];

  return (
    <div style={{ marginBottom: '70px' }}>
      <p>부산</p>
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

export default Busan;
