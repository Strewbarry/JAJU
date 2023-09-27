
const Redis = require('ioredis');

// Redis 서버에 연결
const redis = new Redis({
  host: 'j9c104.p.ssafy.io',
  port: 6379, // Redis 기본 포트
  password: 'c104' // 설정된 경우에만 필요
});
async function setValue (a, select) {
    try {
      if ( select === 1) {
  
          // const x = a.toString()
          // const y = b.toString()
          await redis.set('status', 'start')
          await redis.set('cmd', a);
          console.log('값이 설정되었습니다.');
      }
      else {
          await redis.set('status', 'stop')
      }
    } catch (error) {
      console.error('오류 발생:', error);
    } finally {
      redis.quit(); // 연결 종료
    }
  }

const connection = require("../utils/database.js")

// 설정한 지역과 시간에 예약이 가능한 차량 정보 불러오기
exports.find = async (req, res) => {
    const start_time = new Date(req.body.start_time)
    const end_time = new Date(req.body.end_time)
    console.log(start_time, end_time)
    const between_time = (end_time - start_time) / 3600000
    console.log(between_time)
    let vehicle_list = []
    console.log(start_time, end_time)
    const car_info = await new Promise((resolve, reject) => {
        
        connection.query('SELECT * from car_info;', function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
    console.log(car_info)
    try {
        const sql = 'SELECT * from vehicle WHERE (`around_location`=?);'
        const params = [req.body.around_location]

        const results = await new Promise((resolve, reject) => {
            connection.query(sql, params, function (error, results, fields) {
                if (error) reject(error);
                resolve(results);
            });
        });

        // console.log('d', results);
        

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
                        
                    }
                
                }
            }
            if (reservate_able === true) {
                // console.log(between_time*car_info[vehi_id.car_info_id].fee_per_hour)
                vehi_id.total_fee = between_time*car_info[vehi_id.car_info_id-1].fee_per_hour
                // console.log(vehi_id)
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
exports.rightnow = async (req, res) => {
    const today_date = new Date()
    console.log(today_date)
    console.log(today_date.toString())
    const today = today_date.toString().substring(0, 10)
    console.log(today)
    const around_location = req.body.around_location

    const sql = 'SELECT * FROM vehicle WHERE `around_location`=?;'
    const cars = await new Promise((resolve, reject) => {
        connection.query(sql, around_location,function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        })
    })
    // console.log (cars)
    let selected_car = null
    for (const car of cars) {
        let reservate_able = true
        const sql2 = 'SELECT * from reservation WHERE (`vehicle_id`=?);'
        const par = [car.id]
        const result = await new Promise((resolve, reject) => {
            connection.query(sql2, par, function (error, results, fields) {
                if (error) reject(error);
                
                resolve(results);
            });
        })
        if (result.length >= 1) {

            for (const res of result) {
                const start = res.reservation_time
                const end = res.return_time
                if (start <= today_date && today_date <= end) {
                    reservate_able = false
                    break
                }
            }
            if (reservate_able === true) {
                selected_car = car
                break
            }
            else {
                continue
            }
        }
        else {
            selected_car = car
            break
        }
       
    }
    const car_info = await new Promise((resolve, reject) => {
        
        connection.query('SELECT * from car_info;', function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
    console.log(selected_car)
    res.status(200).json(selected_car)
}


exports.move = async (req, res) => {
    const vehicle_id = req.body.vehicle_id
    const destination_name = req.body.destination_name

    const destination = await new Promise((resolve, reject) => {
        
        connection.query('SELECT * FROM desti WHERE (`name`=?);', destination_name, function (error, results, fields) {
            if (error) reject(error);
            resolve(results);
        });
    });
    console.log(destination)
    console.log(destination_name)
    const sql = 'UPDATE `vehicle` SET `destination` = ? WHERE (`id` = ?);'
    const params = [destination[0].node_number , vehicle_id]

    
    connection.query(sql, params, function (error, results, fields) {
        if (error) reject(error);
        
        console.log('목적지 등록 성공')
    });
    
    console.log(setValue)
    setValue(destination[0].id, 1)
    
    res.status(200).json(destination)
}

exports.stop = async (req, res) => {
    const vehicle_id = req.body.vehicle_id

    const sql = 'UPDATE `vehicle` SET `destination` = null WHERE (`id` = ?);'
    const params = [ vehicle_id]

    connection.query(sql, params, function (error, results, fields) {
        if (error) reject(error);
        
        console.log('목적지 삭제 성공')
    });

    setValue(0,0)
    res.status(200).json('목적지 삭제 성공')
}