const express = require('express')
const router = express.Router()

router.post('/', (req, res) => {
    res.send('Post /api/contact')
})
router.get('/', (req, res) => {
    res.send('Get /api/contacts')
})
router.delete('/', (req, res) => {
    res.send('Delete /api/contacts')
})

router.get('/favorite', (req, res) => {
    res.send('Get /api/contacts/favorite')
})

router.get('/:id', (req, res) => {
    res.send('Get /api/contacts/' + req.params.id)
})

router.put('/:id', (req, res) => {
    res.send('Get /api/contacts/' + req.params.id)
})

router.delete('/:id', (req, res) => {
    res.send('Get /api/contacts/' + req.params.id)
})

module.exports = router
