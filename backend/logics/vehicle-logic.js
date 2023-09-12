
// const connection = require("../utils/database.js")





// // 가능한 차량 정보 불러오기
// exports.find = async (req, res) => {
//     const start_time = new Date(req.body.start_time)
//     const end_time = new Date(req.body.end_time)
//     let vehicle_list = []
//     try {
//         const sql = 'SELECT id from vehicle WHERE (`around_location`=?);'
//         const params = [req.body.around_location]

//         const results = await new Promise((resolve, reject) => {
//             connection.query(sql, params, function (error, results, fields) {
//                 if (error) reject(error);
//                 resolve(results);
//             });
//         });

//         console.log('d', results);
//         res.status(200).json(results);
//         results.forEach( async (vehi_id) => {
//             let reservate_able = true
//             const sql2 = 'SELECT * from reservation WHERE (`vehicle_id`=?);'
//             const par = [vehi_id.id]
//             const result = await new Promise((resolve, reject) => {
//                 connection.query(sql2, par, function (error, results, fields) {
//                     if (error) reject(error);
//                     console.log('here')
//                     resolve(results);
//                 });
//             })
//             if (result.length >= 1) {
                
//                 result.forEach ((res) => {
//                     if( ( start_time <= res.reservation_time && res.reservation_time <= end_time )|| ( start_time <= res.return_time && res.return_time <= end_time)||
//                     ( res.reservation_time <= start_time && start_time <= res.return_time )|| ( res.reservation_time <= end_time && end_time <= res.return_time ))
//                     {
//                         reservate_able = false
//                         console.log(res.reservation_time)
//                         console.log(res.return_time)
//                         console.log(start_time)
//                         console.log(end_time)
//                     }
//                 })
//             }
//             if (reservate_able === true) {
//                 vehicle_list.push(vehi_id)
//             }
//         })
//     }
    
//     catch (error) {
//         console.error(error);
//         res.status(500).json({ error: 'An error occurred' });
//     }
//     console.log(vehicle_list)
// }

const connection = require("../utils/database.js")

// 가능한 차량 정보 불러오기
exports.find = async (req, res) => {
    const start_time = new Date(req.body.start_time)
    const end_time = new Date(req.body.end_time)
    let vehicle_list = []

    try {
        const sql = 'SELECT id from vehicle WHERE (`around_location`=?);'
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
                    if ((start_time <= res.reservation_time && res.reservation_time <= end_time) ||
                        (start_time <= res.return_time && res.return_time <= end_time) ||
                        (res.reservation_time <= start_time && start_time <= res.return_time) ||
                        (res.reservation_time <= end_time && end_time <= res.return_time)) {
                        reservate_able = false
                        break
                        console.log(res.reservation_time)
                        console.log(res.return_time)
                        console.log(start_time)
                        console.log(end_time)
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
