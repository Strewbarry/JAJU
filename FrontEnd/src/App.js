import React, { useState, useEffect } from 'react';
import './App.css';
import 'leaflet/dist/leaflet.css';

import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';

import Map from './pages/Map';
import Reservation from './pages/Reservation';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Event from './pages/Event'

import Header from './Header';
import Menu from './pages/Menu';
import Footer from './Footer';

import Recommended from './Recommend/RecommendedSpot';  // RecommendedSpot 임포트
import Yangyang from './Recommend/Yangyang';
import Seoul from './Recommend/Seoul';
import Busan from './Recommend/Busan';


function MainPage() {
  const navigate = useNavigate();
  const [token, setToken] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    setToken(storedToken);
    
  }, []);


  const goToMap = () => {
    navigate('/map');
  };
  const goToReservation = () => {
    navigate('/reservation');
  };

  const goToEvent = () => {
    navigate('/event');
  };


  return (
    <div>
      <div className="map-buttons">
        <button onClick={goToMap}>근처 이용가능 맵 보기</button>
        <button onClick={goToReservation}>예약 페이지로 이동</button>
        <button onClick={goToEvent}>이벤트</button>
      </div>
      <Recommended />
    </div>
  );
}

function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/reservation" element={<Reservation />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/map" element={<Map />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="/event" element={<Event />} />

        <Route path="/yangyang" element={<Yangyang />} />
        <Route path="/seoul" element={<Seoul />} />
        <Route path="/busan" element={<Busan />} />

      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;