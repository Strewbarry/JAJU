const express = require('express');
const router = express.Router();
const userLogic = require('../logics/user-logic');

// 회원가입
router.post('/signup', userLogic.signup)
// 아이디 중복 검사
router.post('/idcheck', userLogic.idcheck)
// 회원 정보 수정
router.put('/update', userLogic.update)
// 회원 탈퇴
router.delete('/delete/:id', userLogic.delete)



module.exports = router;