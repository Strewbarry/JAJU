const express = require('express');
const router = express.Router();
const vehicleLogic = require('../logics/vehicle-logic');

// 예약 가능 차량 확인
router.post('/find', vehicleLogic.find)




module.exports = router;