const express = require('express')
const cors = require('cors')
const logger = require('morgan')
const bodyParser = require('body-parser')
// const path = require('path')
const { ppid } = require('process')
const UserRouter = require('./routes/UserRouter')
const TextRouter = require('./routes/TextRouter')
const PoemRouter = require('./routes/PoemRouter')
const AuthRouter = require('./routes/AuthRouter')
const path = require('path')
// const PostRouter = require('./routes/PostRouter')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/api/users', UserRouter)
app.use('/api/texts', TextRouter)
app.use('/api/poems', PoemRouter)
app.use('/auth', AuthRouter)
// app.use('/posts', PostRouter)

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')))
  app.get('*', (req, res) => {
    res.sendFile(path.join(`${__dirname}/client/build/index.html`))
  })
}

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`)
})
