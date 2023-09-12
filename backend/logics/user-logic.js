
const connection = require("../utils/database.js")


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