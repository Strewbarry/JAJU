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

    const sql = 'INSERT INTO reservation (`user_id`, `vehicle_id`, `reservation_time`, `return_time`,`region`, `lat`, `lng`, `price`) VALUES (?,?,?,?,?,?,?,?)'
    const params = [user_id[0].id, req.body.vehicle_id, reservation_time, return_time, req.body.region, req.body.lat, req.body.lng, req.body.price]

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

exports.now = async (req, res) => {
    const user_email = res.locals.email
    const user_id = await new Promise((resolve, reject) => {
        connection.query('SELECT id FROM user WHERE (`email` = ?);', user_email, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
    const vehicle_id = req.body.vehicle_id
    const reservation_time = new Date()
    const return_time = new Date();
    return_time.setDate(reservation_time.getDate() + 1);
    console.log(reservation_time)
    console.log(return_time)
    const sql = 'INSERT INTO reservation (`user_id`, `vehicle_id`, `reservation_time`,`return_time`, `lat`, `lng`) VALUES (?,?,?,?,?,?)'
    const params = [user_id[0].id, vehicle_id, reservation_time, return_time, req.body.lat, req.body.lng]
    console.log('바로 호출 예약 성공')
    connection.query(sql, params, function (error, results, fields) {
        if (error) throw error;

        res.status(200).json(results)
    })


}

exports.return = async (req, res) => {
    const user_email = res.locals.email
    const user_id = await new Promise((resolve, reject) => {
        connection.query('SELECT id FROM user WHERE (`email` = ?);', user_email, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
    const sql = 'SELECT reservation_time FROM reservation WHERE (`id` = ? );'
    const reservation_time = await new Promise((resolve, reject) => {
        connection.query(sql, req.body.reservation_id, function(error, results, fields) {
            if (error) reject(error)
            resolve(results)
        })
    })
    const return_time = new Date()
    const sql2 = 'UPDATE reservation SET `return_time`=?, `completed` = ? WHERE (`id` = ?);'
    connection.query(sql2, [return_time, 1, req.body.reservation_id], function(error, results, fields) {
        if (error) reject(error)
        console.log('반납성공')
        res.status(200).json('반납 성공')
    })

}