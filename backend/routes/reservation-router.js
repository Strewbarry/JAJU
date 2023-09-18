const express = require('express');
const router = express.Router();
const reservationLogic = require('../logics/reservation-logic');
const { verifyToken } = require('../utils/tokenverify');

// 예약하기
router.post('/make', verifyToken, reservationLogic.make)
// 예약 취소하기
router.delete('/delete/:id', verifyToken, reservationLogic.delete)





module.exports = router;