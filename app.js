const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const router = require("./routes/openaiRouter")
require('dotenv').config()

const app = express()
const PORT =process.env.PORT 

app.use('/openai', router)

app.use(logger('dev'))

app.use(express.json())
app.use(express.static('public'))
app.use(bodyParser.json())



app.listen(PORT, () => {
    console.log(`Server listening on port localhost:${PORT}`)
})