const express = require('express');
const router = express.Router();
const vehicleLogic = require('../logics/vehicle-logic');
const { verifyToken } = require('../utils/tokenverify');

// 예약 가능 차량 확인
router.post('/find', verifyToken, vehicleLogic.find)

// 해당 차량의 다음 목적지 설정
router.post('/move', verifyToken, vehicleLogic.move)

// 해당 차량의 다음 목적지 취소
router.post('/stop', verifyToken, vehicleLogic.stop)


module.exports = router;