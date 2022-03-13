const express = require('express')
const router = express.Router()

// http://localhost:4500/winning/1
router.get('/winning/:id', async function (req, res) {
    res.send("Welcome")
})

router.post('/winning', async function (req, res) {

})

module.exports = router;