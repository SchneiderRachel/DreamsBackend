const express = require('express')
const router = express.Router()

// http://localhost:4500/items/1
router.get('/items/:id', async function (req, res) {
    res.send("Welcome")
})

router.post('/items', async function (req, res) {

})

module.exports = router;