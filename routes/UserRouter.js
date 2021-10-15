const router = require('express').Router()
const controller = require('../controllers/UserController')
// const middleware = require('../middleware')

router.post('/', controller.CreateUser)
router.get('/', controller.GetUsers)
router.get('/:user_id', controller.GetUserById)
router.put('/:user_id', controller.UpdateUser)
router.delete('/:user_id', controller.DeleteUser)

module.exports = router
