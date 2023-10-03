import React, { useEffect , useState } from 'react';
import { Url } from '../server_url';
import axios from 'axios';
import styles from './Map.module.css';
import { MapContainer, TileLayer, Marker, Popup, useMapEvents, GeoJSON } from 'react-leaflet';
import osm from "../osm-providers";
import osm2 from "../osm-providers2";
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
// import ROSLIB from 'roslib';

import placeholderImage from '../assets/placeholder.png';
import HotelImage from '../assets/Hotel.png';
import coffeeImage from '../assets/coffee.png';
import restaurantImage from '../assets/restaurant.png';
import swimImage from '../assets/swimmer.png';
import beerImage from '../assets/beer.png';
import childrenImage from '../assets/children.png';
import airportImage from '../assets/Airport.png';
import barrierImage from '../assets/barrier.png';


import ROSLIB from 'roslib';
import proj4 from 'proj4';

const url = Url

const center = { lat: 37.23954358351303, lng: 126.771327801793 };
const ZOOM_LEVEL = 15;

const createIcon = (iconUrl) => new L.Icon({
  iconUrl,
  iconSize: [45, 45],
});

const createIcon2 = (iconUrl) => new L.Icon({
  iconUrl,
  iconSize: [60, 60],
});

const defaultIcon = createIcon(placeholderImage);
const hotelIcon = createIcon(HotelImage);
const coffeeIcon = createIcon(coffeeImage);
const restaurantIcon = createIcon(restaurantImage);
const swimIcon = createIcon(swimImage);
const beerIcon = createIcon(beerImage);
const childrenIcon = createIcon(childrenImage)
const barrierIcon = createIcon(barrierImage)
const airportIcon = createIcon2(airportImage)

const markers = [
  { position: [37.245428193272716, 126.7750329522217], icon: hotelIcon, label: '스탠포드호텔' },
  // { position: [37.23918867370749, 126.77313034628662], icon: airportIcon, label: 'Start 지점[제주공항]' },
  { position: [37.24068299201391, 126.77130810123954], icon: restaurantIcon, label: '한국식 소고기 전문 음식점 [ 배꼽집]' },
  { position: [37.23833240877633, 126.77201420033694], icon: coffeeIcon, label: '커피빈' },
  { position: [37.24444434990808, 126.77585464595262], icon: swimIcon, label: '수영장' },
  { position: [37.23576639296262, 126.77286038119048], icon: beerIcon, label: '술집' },
  { position: [37.239984102516516, 126.77420129836432], icon: childrenIcon, label: '어린이보호구역' }, // 학교
  { position: [37.24329834268778, 126.77522987905812], icon: barrierIcon, label: '공사중 막혀서 돌아감' }, //
  { position: [37.23864139722333, 126.77278808039286], icon: defaultIcon, label: '한바퀴돌아서 도착' }, //  

];

function Map() {
  const [isRented, setIsRented] = useState(false);
  const [clickedPosition, setClickedPosition] = useState(null);
  const [clickedLatitude, setClickedLatitude] = useState(null);
  const [clickedLongitude, setClickedLongitude] = useState(null);
  const [mapType, setMapType] = useState('normal');
  const [modalContent, setModalContent] = useState('reserve');

  const [showModal, setShowModal] = useState(false);

  const [carInfo, setCarInfo] = useState({ name: '', number: '', fuel_left: '' });

  // 예약 정보를 저장하기 위한 상태 추가

  const [vehicleId, setVehicleId] = useState(null); // to store vehicle id

  const [position, setPosition] = useState([37.23918867370749, 126.77313034628662]);

  const utmProjection = "+proj=utm +zone=52";
  const wgs84Projection = "+proj=longlat +ellps=WGS84 +datum=WGS84 +no_defs";
  let east = 0;
  let north = 0;
  let result = 0;
  let ros = new ROSLIB.Ros({
    url: 'ws://13.124.128.202:9090', // ROS Bridge WebSocket URL
  });

  let storedLocations = localStorage.getItem('locations');
  let pathData = storedLocations ? JSON.parse(storedLocations) : [];

  const returnVehiclePrompt = () => {
    setModalContent('return');
    setShowModal(true);
  };


  const callVehicle = async (lat, lng) => {
    try {
      setClickedLatitude(lat); // set latitude here
      setClickedLongitude(lng); // set longitude here

      const token = localStorage.getItem('token');
      const around_location = '제주';
      const postData = { around_location, lat, lng };
      const response = await axios.post(`${url}/vehicle/rightnow`, postData, { headers: { 'authorization': token } });
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

      // 예약 ID를 상태에 저장합니다.

      setVehicleId(response.data.id); // save vehicle_id to state
      setShowModal(true);

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };


  const returnVehicle = async () => {
    try {
      setIsRented(false);
      setVehicleId(null);
      setShowModal(false); // 모달 창을 숨기는 코드 추가
      console.log('Vehicle returned successfully');
    } catch (error) {
      console.error('Error while returning the vehicle:', error);
    }
  };
  
  useEffect(() => {

    ros = new ROSLIB.Ros({
    url: 'ws://13.124.128.202:9090', // ROS Bridge WebSocket URL
  });

    ros.on('connection', () => {
      console.log('Connected to ROS Bridge');

    });

    ros.on('error', (error) => {
      console.error('Error connecting to ROS Bridge: ', error);
    });

    ros.on('close', () => {
      console.log('Connection to ROS Bridge closed');
    });
    

    return () => {
      ros.close();
    };
  }, []);
  function subscribe() {
    const GPS_topic_listner = new ROSLIB.Topic({
        ros: ros,
        name: "/gps",
        messageType: "morai_msgs/GPSMessage"
    });

    GPS_topic_listner.subscribe(function(data){
        // 위도와 경도 값을 상태로 설정
        setPosition([data.latitude, data.longitude]);
    });
}


  function utmTogps(east,north){
    let coords = proj4(utmProjection, wgs84Projection, [east,north]);
    return {
      latitude: coords[1],
      longitude: coords[0]
    };
  }

  function subscribe2() {
    const GPS_topic_listner = new ROSLIB.Topic({
        ros: ros,
        name: "/global_path",
        messageType: "nav_msgs/Path"
    });
    


    GPS_topic_listner.subscribe(function(data){

        // 배열 초기화
        let locations = [];

        // for문 돌려서 경로 재탐색
        for(let i = 0; i < data.poses.length; i++) {
            let east = data.poses[i].pose.position.x + 302459.942;
            let north = data.poses[i].pose.position.y + 4122635.537;
            
            // console.log(east, north);

            let result = utmTogps(east, north);
            // console.log(result.latitude, result.longitude);
            
            // 결과를 locations 배열에 추가
            locations.push([
                result.longitude,
                result.latitude
            ]);
        }
        console.log(locations);  // 전체 위치 데이터를 출력
        localStorage.setItem('locations', JSON.stringify(locations));

        // 메시지를 받은 후 즉시 구독 취소
        GPS_topic_listner.unsubscribe();
    });
    
    console.log('제잘');
}


  const RenderMarkers = () => {
    return markers.map((marker, index) => (
      <Marker key={index} position={marker.position} icon={marker.icon}>
        <Popup>
        
          <div className={styles.centerContent}>
            <b>{marker.label}</b>
          </div>
          <br />
          {isRented ?
            <button onClick={returnVehicle} className={styles.destinationButton}>목적지로 선택</button>
            :
            <button
              className={styles.callVehicleButton}
              onClick={() => callVehicle(marker.position[0], marker.position[1])}>
              이곳으로 호출하기
            </button>
          }

        </Popup>

      </Marker>
    ));
  };

  // const MAPREAD = () => {
  //   this.ros = new ROSLIB.Ros({ url: 'ws://localhost:9090' });
  //   this.ros.on('connection', (connection) => console.log('connection'));
  //   this.ros.on('error', (connection) => console.log('에러'));
  //   this.ros.on('close', (connection) => console.log('닫기'));

  //   let global_path_listener = new ROSLIB.Topic({
  //     ros: this.ros,
  //     name: '/global_path',
  //     messageType: 'nav_msgs/Path'
  //   });

  //   global_path_listener.subscribe(data => {
  //     console.log(data.poses[0].pose.position.x)
  //   });
  // };

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
        // reservation: true,
        lat: clickedLatitude, // use the saved latitude from state
        lng: clickedLongitude, // use the saved longitude from state
        vehicle_id: vehicleId
      };

      const response = await axios.post(
        `${url}/reservation/now`,
        postData,
        { headers: { 'authorization': token } }
      );

      if (response.status === 200) {
        console.log("Vehicle reserved successfully!");
        setIsRented(true); // 예약이 성공하면 isRented를 true로 설정
        setModalContent('reserve'); // Modal content를 예약으로 설정
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
      <button onClick={() => subscribe()}>차 실시간 위치 확인하기</button>
      <button onClick={() => subscribe2()}>경로 탐색</button>
      
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
              <Marker position={position} icon={airportIcon} label='Start 지점[제주공항]' />

              <RenderMarkers />
              <GeoJSON data={lineStringData} />
              {isRented && (
                <div className={styles.returnButtonContainer}>
                  <button onClick={returnVehiclePrompt} className={styles.returnButton}>반납하기</button>
                </div>
              )}

            </MapContainer>

          </div>
        </div>
      </div>

      {showModal && (
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            {modalContent === 'reserve' ? (
              <>
                <h3>이 차량을 빌리시겠습니까?</h3>
                <p>차량 종류: {carInfo.name}</p>
                <p>주행가능 거리: {carInfo.fuel_left}km</p>
                <p>차량 번호: {carInfo.number}</p>
                <button className={styles.confirmButton} onClick={reserveVehicle}>예</button>
                <button className={styles.cancelButton} onClick={closeModal}>아니오</button>
              </>
            ) : (
              <>
                <h3>차량을 반납하시겠습니까?</h3>
                <button className={styles.confirmButton} onClick={returnVehicle}>예</button>
                <button className={styles.cancelButton} onClick={closeModal}>아니오</button>
              </>
            )}

          </div>
        </div>
      )}


    </div>
  );
}

export default Map;
