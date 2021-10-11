const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
// const path = require('path')
const { ppid } = require('process')
const UserRouter = require('./routes/UserRouter')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/users', UserRouter)

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
