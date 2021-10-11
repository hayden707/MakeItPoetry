const router = require('express').Router()
const controller = require('../controllers/UserController')

router.post('/', controller.CreateUser)

module.exports = router
