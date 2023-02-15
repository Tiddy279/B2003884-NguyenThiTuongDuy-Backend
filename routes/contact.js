const express = require('express')
const router = express.Router()

const { createcontact, getallcontact, deleteallcontact, getfavoritecontact, putupdatecontact, deletecontact } = require('../controllers/contact.controller')

router.post('/', createcontact)
router.get('/', getallcontact)
router.delete('/', deleteallcontact)

router.get('/favorite', getfavoritecontact)

router.get('/:id', putupdatecontact)

router.put('/:id', putupdatecontact)

router.delete('/:id', deletecontact)

module.exports = router
