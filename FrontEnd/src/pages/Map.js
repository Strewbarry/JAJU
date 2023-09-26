import React, { useState } from 'react';
import axios from 'axios';
import styles from './Map.module.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, GeoJSON } from 'react-leaflet';
import osm from "../osm-providers";
import osm2 from "../osm-providers2";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import ROSLIB from 'roslib';
import pathData from '../Path.json';

import placeholderImage from '../assets/placeholder.png';
import HotelImage from '../assets/Hotel.png';
import coffeeImage from '../assets/coffee.png';
import restaurantImage from '../assets/restaurant.png';
import swimImage from '../assets/swimmer.png';
import beerImage from '../assets/beer.png';

const center = { lat: 37.23954358351303, lng: 126.771327801793 };
const ZOOM_LEVEL = 15;

const createIcon = (iconUrl) => new L.Icon({
  iconUrl,
  iconSize: [45, 45],
});

const defaultIcon = createIcon(placeholderImage);
const hotelIcon = createIcon(HotelImage);
const coffeeIcon = createIcon(coffeeImage);
const restaurantIcon = createIcon(restaurantImage);
const swimIcon = createIcon(swimImage);
const beerIcon = createIcon(beerImage);

const markers = [
  { position: [37.245428193272716, 126.7750329522217], icon: hotelIcon, label: '스탠포드호텔' },
  { position: [37.23918867370749, 126.77313034628662], icon: defaultIcon, label: 'Start 지점' },
  { position: [37.24068299201391, 126.77130810123954], icon: restaurantIcon, label: '한국식 소고기 전문 음식점 [ 배꼽집]' },
  { position: [37.23833240877633, 126.77201420033694], icon: coffeeIcon, label: '커피빈' },
  { position: [37.24444434990808, 126.77585464595262], icon: swimIcon, label: '수영장' },
  { position: [37.23576639296262, 126.77286038119048], icon: beerIcon, label: '술집' },
];

function Map() {
  const [isRented, setIsRented] = useState(false);
  const [clickedPosition, setClickedPosition] = useState(null);
  const [mapType, setMapType] = useState('normal');
  const [showModal, setShowModal] = useState(false);
  const [carInfo, setCarInfo] = useState({ name: '', number: '' , fuel_left: ''});


  const callVehicle = async (lat, lng) => {
    try {
        const token = localStorage.getItem('token');
        const around_location = '제주';
        const postData = { around_location, lat, lng };
        const response = await axios.post('http://192.168.100.38:3000/vehicle/rightnow', postData, { headers: { 'authorization': token } });
        console.log("Response Data:", response.data);
        let carName = '';
        switch (response.data.car_info_id) {
            case 1:
                carName = 'Niro';
                break;
            case 2:
                carName = 'K5';
                break;
            case 3:
                carName = 'Starex';
                break;
            default:
                carName = 'Unknown';
        }

        setCarInfo({
            name: carName,
            number: response.data.car_number,
            fuel_left: response.data.fuel_left,
        });

        setShowModal(true);

    } catch (error) {
        console.error('Error:', error);
    }
};

const closeModal = () => {
    setShowModal(false);
};


  const returnVehicle = () => {
    setIsRented(false);
  };

  const RenderMarkers = () => {
    return markers.map((marker, index) => (
      <Marker key={index} position={marker.position} icon={marker.icon}>
        <Popup>
          <b>{marker.label}</b>
          {isRented ? 
            <button onClick={returnVehicle}>목적지로 선택</button> : 
            <button onClick={() => callVehicle(marker.position[0], marker.position[1])}>이곳으로 호출하기</button>
          }
        </Popup>
      </Marker>
    ));
  };

  const MAPREAD = () => {
    this.ros = new ROSLIB.Ros({ url: 'ws://localhost:9090' });
    this.ros.on('connection', (connection) => console.log('connection'));
    this.ros.on('error', (connection) => console.log('에러'));
    this.ros.on('close', (connection) => console.log('닫기'));

    let global_path_listener = new ROSLIB.Topic({
      ros: this.ros,
      name: '/global_path',
      messageType: 'nav_msgs/Path'
    });

    global_path_listener.subscribe(data => {
      console.log(data.poses[0].pose.position.x)
    });
  };

  const MapEvents = () => {
    useMapEvents({
      click: (e) => {
        setClickedPosition({ lat: e.latlng.lat, lng: e.latlng.lng });
        console.log(`위도: ${e.latlng.lat}, 경도: ${e.latlng.lng}`);
      },
    });
    return null;
  };
  const reserveVehicle = async () => {
    try {
        const token = localStorage.getItem('token');
        const postData = {
            reservation: true,
            location: clickedPosition
        };

        const response = await axios.post(
            'http://192.168.100.38:3000/reservation/rightnow',
            postData,
            { headers: { 'authorization': token } }
        );

        if (response.data.success) {
            console.log("Vehicle reserved successfully!");
            closeModal();
        } else {
            console.error("Failed to reserve the vehicle");
        }
    } catch (error) {
        console.error('Error:', error);
    }
};


  const lineStringData = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: pathData
    }
  };

  return (
    <div>
        <div className={styles.row}>
            <div className={`${styles.col} ${styles.textCenter}`}>
                <div className={styles.col}>
                    <MapContainer center={center} zoom={ZOOM_LEVEL} className={styles.mapContainer}>
                        <div className={styles.mapButtons}>
                            <button className={`${styles.button} ${mapType === 'normal' ? styles.buttonSelected : ''}`} onClick={() => setMapType('normal')}>일반지도</button>
                            <button className={`${styles.button} ${mapType === 'satellite' ? styles.buttonSelected : ''}`} onClick={() => setMapType('satellite')}>위성지도</button>
                        </div>
                        <TileLayer url={mapType === 'normal' ? osm.maptiler.url : osm2.maptiler.url} attribution={mapType === 'normal' ? osm.maptiler.attribution : osm2.maptiler.attribution} />
                        <MapEvents />
                        <RenderMarkers />
                        <GeoJSON data={lineStringData} />

                        {isRented && (
                            <div className={styles.returnButtonContainer}>
                                <button onClick={returnVehicle} className={styles.returnButton}>반납하기</button>
                            </div>
                        )}
                    </MapContainer>

                    {clickedPosition && (
                        <div className={styles.clickedPositionInfo}>
                            클릭된 위치: <br />
                            위도: {clickedPosition.lat} <br />
                            경도: {clickedPosition.lng}
                        </div>
                    )}
                </div>
            </div>
        </div>
        {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h3>이 차량을 빌리시겠습니까?</h3>
                        <p>차량 종류: {carInfo.name}</p>
                        <p>주행가능 거리: {carInfo.fuel_left}km</p>
                        <p>차량 번호: {carInfo.number}</p>
                        <button onClick={reserveVehicle}>예</button>
                        <button onClick={closeModal}>아니오</button>
                    </div>
                </div>
            )}
    </div>
  );
}

export default Map;
