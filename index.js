const express = require('express')
const config = require('./config')
const MongoDB = require("./utils/mongodb.utils")
const mainRoute = require('./routes')
const bodyparser = require("body-parser")

const app = express()
const port = 3000

app.use(bodyparser.json())
app.use('/', mainRoute)

app.use((req, res, next) => {
    next(new Error())
})

app.use((err, req, res, next) => {
    res.status(404).send({
        message: 'Khong tim thay tai nguyen'
    })
})

async function starServer() {
    try {
        await MongoDB.connect(config.db.uri);

        console.log("Connected to the database!");
        app.listen(port, () => {
            console.log(`Example app listening on port ${port}`)
        })
    } catch (error) {
        console.log("Cannot connect to the database!!!", error);
        process.exit();
    }
}
starServer();