const express = require('express')

const mainRoute = require('./routes')

const app = express()
const port = 3000

app.use('/', mainRoute)

app.use((req, res, next) => {
    next(new Error())
})

app.use((err, req, res, next) => {
    res.status(404).send({
        message: 'Khong tim thay tai nguyen'
    })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})