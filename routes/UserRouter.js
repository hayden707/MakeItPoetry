const router = require('express').Router()
const controller = require('../controllers/UserController')

router.post('/', controller.CreateUser)
router.get('/', controller.GetUsers)

module.exports = router
