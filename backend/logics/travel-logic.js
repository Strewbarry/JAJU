const connection = require("../utils/database.js")

exports.get_travel = async (req, res) => {
    const location = req.params.location
    const sql = 'SELECT * FROM travel WHERE `around` = ?'
    connection.query(sql, [location], function (error, results, fields) {
        if (error) throw error;
        
        
        res.status(200).json(results)
    })
}
