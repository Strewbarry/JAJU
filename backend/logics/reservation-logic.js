const connection = require("../utils/database.js")

exports.make = async (req, res) => {
    const user_email = res.locals.email
    const user_id = await new Promise((resolve, reject) => {
        connection.query('SELECT id FROM user WHERE (`email` = ?);', user_email, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });

    const reservation_time = new Date(req.body.reservation_time)
    const return_time = new Date(req.body.return_time)

    const sql = 'INSERT INTO reservation (`user_id`, `vehicle_id`, `reservation_time`, `return_time`, `lat`, `lng`, `price`) VALUES (?,?,?,?,?,?,?)'
    const params = [user_id[0].id, req.body.vehicle_id, reservation_time, return_time, req.body.lat, req.body.lng, req.body.price]

    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error;
        
        console.log('새로 추가', results)
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