
const connection = require("../utils/database.js")
const jwt = require("jsonwebtoken");


const crypto = require("crypto");


// 회원 가입
exports.signup = async (req, res) => {
    let salt = crypto.randomBytes(8).toString("base64");
    
    const sql = 'INSERT INTO user (`email`, `password`, `name`, `phonenumber`) VALUES (?,?,?,?)'
    const params = [req.body.email, req.body.password+salt, req.body.name, req.body.phonenumber]
    // console.log(params)
    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error;
        
        // console.log('새로 추가', results)
        res.status(200).json(results)
    })
}

// 아이디 중복 검사
exports.idcheck = async (req, res) => {
    const check_email = req.body.email
    const sql = 'SELECT * from user WHERE (`email`=?);'
    const params = [check_email]
    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error;
        
        if (results.length === 1) {
            res.status(501).json('중복됨')
        }
        else {
            res.status(200).json('사용 가능함')
        }
    })
}
// 회원 정보 수정
exports.update = async (req, res) => {
    const sql = 'UPDATE user SET `email`=?, `name`=?, `phonenumber`=? WHERE (`id` = ?);'
    const params = [req.body.email, req.body.name, req.body.phonenumber, req.body.id]
    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error;
        
        // console.log('새로 추가', results)
        res.status(200).json(results)
    })
}
// 회원 탈퇴
exports.delete = async (req, res) => {
    
    const id = req.params.id
    
    const sql = 'DELETE FROM user WHERE (`id` = ?);'
    const params = [id]
    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error;
        
        
        res.status(200).json(results)
    })
}
// 현재 유저의 예약정보 받아오기
exports.get_reservation = async (req, res) => {
    console.log('here')
    const user_id = req.params.id

    const sql = 'SELECT * FROM reservation WHERE (`user_id` = ?);'
    const params = [user_id]
    connection.query(sql, params, function(error, results, fields) {
        if (error) throw error

        res.status(200).json(results)
    })
}

exports.login = async (req, res) => {
    try {
      const params = [req.body.email]
      
      let sql = "select * from `user` where email=?";
  
      const result = await new Promise((resolve, reject) => {
        connection.query(sql, params, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
            });
        });
  
      if (result.length === 0) {
        
        return res
          .status(202)
          .json({ code: 202, message: "존재하지 않는 아이디" });
      }
      const str = result[0].password
      const pw = str.substring(0, str.length - 12);
      console.log(pw)
      if (pw === req.body.password) {
        console.log('로그인 성공')
      }
      else {
        return res.status(501).json({code : 501, message : '비밀번호 틀림.'})
      }
      
      // 위에서 return 되지 않았다면 로그인 성공
      // 토큰 생성
      const token = jwt.sign(
        { email: req.email },
        "secret_key",
        { expiresIn: "1h" }
      );
  
      
      
      return res
        .status(200)
        .json({
          code: 200,
          message: "로그인 성공",
          token: token,
          id : result[0].id,
          email: result[0].email,
          name : result[0].name,
          phonenumber : result[0].phonenumber
        });
    } catch (error) {
      console.error(error);
      return res.status(500).json({ code: 500, message: "서버 오류" });
    }
  };
  