

const connection = require("../utils/database.js")

// 설정한 지역과 시간에 예약이 가능한 차량 정보 불러오기
exports.find = async (req, res) => {
    const start_time = new Date(req.body.start_time)
    const end_time = new Date(req.body.end_time)
    let vehicle_list = []

    try {
        const sql = 'SELECT * from vehicle WHERE (`around_location`=?);'
        const params = [req.body.around_location]

        const results = await new Promise((resolve, reject) => {
            connection.query(sql, params, function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            });
        });

        console.log('d', results);
        

        for (const vehi_id of results) {
            let reservate_able = true
            const sql2 = 'SELECT * from reservation WHERE (`vehicle_id`=?);'
            const par = [vehi_id.id]
            const result = await new Promise((resolve, reject) => {
                connection.query(sql2, par, function (error, results, fields) {
                    if (error) reject(error);
                    
                    resolve(results);
                });
            })
            if (result.length >= 1) {

                for (const res of result) {
                    console.log(res)
                    if ((start_time <= res.reservation_time && res.reservation_time <= end_time) ||
                        (start_time <= res.return_time && res.return_time <= end_time) ||
                        (res.reservation_time <= start_time && start_time <= res.return_time) ||
                        (res.reservation_time <= end_time && end_time <= res.return_time)) {
                        reservate_able = false
                        break
                        
                    }
                console.log(res, start_time, end_time)
                }
            }
            if (reservate_able === true) {
                vehicle_list.push(vehi_id)
            }
        }
        
        console.log(vehicle_list)
        res.status(200).json(vehicle_list);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'An error occurred' });
    }
}

exports.move = async (req, res) => {
    const vehicle_id = req.body.vehicle_id
    const destination = req.body.destination

    
    const sql = 'UPDATE `vehicle` SET `destination` = ? WHERE (`id` = ?);'
    const params = [destination, vehicle_id]

    
    connection.query(sql, params, function (error, results, fields) {
        if (error) reject(error);
        
        res.status(200).json(results)
    });
        
    
}

exports.stop = async (req, res) => {
    const vehicle_id = req.body.vehicle_id

    const sql = 'UPDATE `vehicle` SET `destination` = null WHERE (`id` = ?);'
    const params = [ vehicle_id]

    connection.query(sql, params, function (error, results, fields) {
        if (error) reject(error);
        
        res.status(200).json(results)
    });
}