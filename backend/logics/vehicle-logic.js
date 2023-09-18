
const connection = require("../utils/database.js")





// 가능한 차량 정보 불러오기
exports.find = async (req, res) => {
    

        let all_list = null
        
        const sql = 'SELECT id from vehicle WHERE (`around_location`=?);'
        const params = [req.body.around_location]
        // console.log(params)
        try {
        let all_list = await connection.query(sql, params, async function (error, results, fields) {
            if (error) throw error;
            console.log(results)
        })
            
            console.log(all_list)
            // console.log('새로 추가', results)
            res.status(200).json(results)
        

            console.log('d', all_list)
        }
        catch {

        }
    
    
}