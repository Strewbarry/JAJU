const connection = require("../utils/database.js")

exports.make = async (req, res) => {
    const reservation_time = new Date(req.body.reservation_time)
    const return_time = new Date(req.body.return_time)

    const sql = 'INSERT INTO reservation (`user_id`, `vehicle_id`, `reservation_time`, `return_time`, `get_location`) VALUES (?,?,?,?,?)'
    const params = [req.body.user_id, req.body.vehicle_id, reservation_time, return_time, req.body.get_location]

    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error;
        
        // console.log('새로 추가', results)
        res.status(200).json(results)
    })
}

exports.delete = async (req, res) => {
    const reservation_id = req.params.id

    const sql = 'DELETE FROM reservation WHERE (`id` = ?);'
    const params = [reservation_id]

    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error;

        res.status(200).json(results)
    })
}