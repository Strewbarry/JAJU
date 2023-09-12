
// const User_data = require('./index.js');
const express = require("express")
const cors = require("cors")


const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

const PORT = 3000

app.use(cors())
app.set('port', PORT)


const userRoutes = require("./routes/user-router")
app.use('/user', userRoutes)

const vehicleRoutes = require("./routes/vehicle-router")
app.use('/vehicle', vehicleRoutes)

app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기중')
})