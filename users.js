const express = require('express')
const router = express.Router()

// http://localhost:4500/users/1
router.get('/users/:id', async function (req, res) {
    res.send("Welcome")
})

router.post('/users', async function (req, res) {

})

module.exports = router;