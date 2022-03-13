const express = require('express')
const cors = require('cors')
const items = require('./items')
const users = require('./users')
const winning = require('./winning')
const app = express()


app.use(express.json())
app.use(cors())

// controllers
app.use(items)
app.use(users)
app.use(winning)

app.listen(4500, () => console.log(`listening at http://localhost:4500`));

