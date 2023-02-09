const express = require('express')
const router = express.Router()

const contactRoute = require('./contact')

router.use('/api/contacts', contactRoute)

module.exports = router