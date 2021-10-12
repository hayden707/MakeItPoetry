const router = require('express').Router()
const controller = require('../controllers/PoemController')

router.post('/', controller.CreatePoem)

module.exports = router
