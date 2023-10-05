# 🚗자주,여행 - 자율주행 랜탈 플랫폼

![타이틀이미지](./Docs/image/자주,여행(로고).PNG)


## 자주,여행 링크 : [자주,여행](//http://j9c104.p.ssafy.io/)

## 프로젝트 진행 기간
2023.8.21(월) ~ 2023.10 .6(금) (47일간 진행)  
SSAFY 9기 2학기 특화프로젝트 - 자주,여행

</br>

## 🎵 자주,여행 - 개요
*- 모두가 즐기는 여행 -*  

요즘 여행들 많이 다니시나요? 코로나 이후 여행객이 급증하는 상황이 왔습니다. 하지만 차를 가지고 다니는 여행에서 풍부한 자연 경관 및 휴식을 즐기지 못하는 사람이 있습니다. 바로 운전자인데요 때문에 저희 팀은 자율 주행 4단계 프로그램 구현 및 이를 이용한 어플리케이션을 만들어 택시처럼 하지만 친구, 가족, 애인 과 함께 하는 여행을 만들기 위해 이 프로젝트를 진행 하였습니다.

</br>

## 🎵 주요 기능
---
- ### 차량 예약
    - 원하는 차량을 원하는 시간에 사용하고 싶을때.
    <br/>


## ✔ 주요 기술
---

**Backend - Nodejs**
- Redis
- mySQL


**Frontend**
- React
- WebSocket-Driver 0.7.4
- Leaflet 1.9.4

**CI/CD**
- AWS EC2
- Jenkins
- NGINX

**AutoDrive**
- ROS 
- yolo
- python 3.8.10
- MORAI


## ✔ 프로젝트 파일 구조
---
### Back
```
backend
  ├── logics
  │   ├── reservation-logic.js
  │   ├── travel-logic.js
  │   ├── user-logic.js
  │   └── vehicle-logic.js
  ├── routes
  │   ├── reservation-router.js
  │   ├── travel-router.js
  │   ├── user-router.js
  │   └── vehicle-router.js
  ├── utils
  │   ├── database.js
  │   ├── redis-logic.js
  │   ├── time-check.js
  │   └── tokenverify.js
  ├── index.js
  ├── package-lock.json
  ├── package.json
  └── server2.js

```
### Front
```
Frontend
  ├── Dockerfile
  ├── dockerignore
  ├── package-lock.json
  ├── package.json
  ├── public
  │   ├── fonts/Jua
  │   ├── favicon.ico
  │   ├── index.html
  │   ├── manifest.json
  │   └── robots.txt
  └── src
      ├── Recommend
      │   ├── Busan
      │   ├── Seoul
      │   ├── Yangyang
      │   └── RecommendedSpot
      ├── assets
      ├── pages
      │   ├── CarList
      │   ├── Changeinfo
      │   ├── CheckReservation
      │   ├── Event
      │   ├── Login
      │   ├── Map
      │   ├── Map_Reservation
      │   ├── Menu
      │   ├── Reservation
      │   ├── SeeReservation
      │   └── Signup
      ├── App
      ├── Footer
      ├── Header
      ├── Path.json
      ├── ROS.js
      ├── index
      └── server_url.js
   
```


## ✔ 협업 툴
---
- Git
- Notion
- JIRA
- MatterMost
- Discord



## ✔ 팀원 역할 분배
---
![역할 배분]()

## ✔ 프로젝트 산출물
---
- [기능명세서](./docs/기능명세서.md)

## ✔ 프로젝트 결과물
- [포팅메뉴얼](./Docs/C104_포팅_메뉴얼.docx)
- [중간발표자료](./Docs/PPT/자주여행_중간발표.pptx)
- [최종발표자료](./Docs/PPT/자주여행_최종발표.pptx)


## 🚓 서비스 화면
---