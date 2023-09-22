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

import placeholderImage from '../assets/placeholder.png'
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
  // 차후에 start는 websocket으로 실시간 통신을 받아 이동시킬 예정
 
  { position: [37.245428193272716, 126.7750329522217], icon: hotelIcon, label: '스탠포드호텔' },
  { position: [37.23918867370749, 126.77313034628662], icon: defaultIcon, label: 'Start 지점' },
  { position: [37.24068299201391, 126.77130810123954], icon: restaurantIcon, label: '한국식 소고기 전문 음식점 [ 배꼽집]' },
  { position: [37.23833240877633, 126.77201420033694], icon: coffeeIcon, label: '커피빈' },
  { position: [37.24444434990808, 126.77585464595262], icon: swimIcon, label: '수영장' },
  { position: [37.23576639296262, 126.77286038119048], icon: beerIcon, label: '술집' },


];


const callVehicle = async (lat, lng) => {
  try {
    const token = localStorage.getItem('token');
    const reservation_time = localStorage.getItem('reservation_time');
    const return_time = localStorage.getItem('return_time');
    const carType = localStorage.getItem('carType');

    console.log(reservation_time)
    console.log(return_time)
    console.log(carType)


    const postData = {
      lat,
      lng,
      reservation_time,
      return_time,
      carType
    };

    const response = await axios.post('http://192.168.100.38:3000/reservation/make', postData, {
      headers: {
        'authorization': token // 'Bearer' 없이 토큰을 직접 추가
      }
    });
    console.log(response.data);
  } catch (error) {
    console.error('Error:', error);
  }
};




const RenderMarkers = () => {
  return markers.map((marker, index) => (
    <Marker key={index} position={marker.position} icon={marker.icon}>
      <Popup>
        <b>{marker.label}</b>
        <button onClick={() => callVehicle(marker.position[0], marker.position[1])}>이곳으로 호출하기</button> 
      </Popup>
    </Marker>
  ));
};

function Map() {
  
  const MAPREAD = () => {
    this.ros = new ROSLIB.Ros({
      url: 'ws://localhost:9090'
  });
   
  this.ros.on('connection', (connection) => {
    console.log('connection')
  })

  this.ros.on('error', (connection) => {
    console.log('에러')
  })

  this.ros.on('close', (connection) => {
    console.log('닫기')
  })

  let global_path_listener =new ROSLIB.Topic({
    ros : this.ros,
    name : '/global_path',
    messageType : 'nav_msgs/Path'
  });

  global_path_listener.subscribe(function(data){
    console.log(data.poses[0].pose.position.x)
  })

  }



  const [clickedPosition, setClickedPosition] = useState(null);
  const [mapType, setMapType] = useState('normal');



  const MapEvents = () => {
    useMapEvents({
      click: (e) => {
        setClickedPosition({ lat: e.latlng.lat, lng: e.latlng.lng });
        console.log(`위도: ${e.latlng.lat}, 경도: ${e.latlng.lng}`);
      },
    });
    return null;
  };

  const lineStringData = {
    type: "Feature",
    properties: {},
    geometry: {
      type: "LineString",
      coordinates: pathData // Path.json 파일에서 가져옴
    }
  };

  return (
    <div>
      <div className={styles.row}>
        <div className={`${styles.col} ${styles.textCenter}`}>
          <div className={styles.col}>
            <MapContainer center={center} zoom={ZOOM_LEVEL} className={styles.mapContainer}>
              <div className={styles.mapButtons}>
                <button onClick={() => setMapType('normal')}>일반지도</button>
                <button onClick={() => setMapType('satellite')}>위성지도</button>
              </div>
              <TileLayer 
                url={mapType === 'normal' ? osm.maptiler.url : osm2.maptiler.url} 
                attribution={mapType === 'normal' ? osm.maptiler.attribution : osm2.maptiler.attribution} 
              />
              <MapEvents />
              <RenderMarkers />
              <GeoJSON data={lineStringData} />
            </MapContainer>
          </div>
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
  );
  
}



export default Map;