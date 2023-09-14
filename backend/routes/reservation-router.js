const express = require('express');
const router = express.Router();
const reservationLogic = require('../logics/reservation-logic');

// 예약하기
router.post('/make', reservationLogic.make)
// 예약 취소하기
router.delete('/delete/:id', reservationLogic.delete)





module.exports = router;