const router = require('express').Router()
const controller = require('../controllers/UserController')
const middleware = reuqire('../middleware')

router.post('/', controller.CreateUser)
router.get('/', controller.GetUsers)
router.get('/:user_id', middleware.checkJwt, controller.GetUserById)
router.put('/:user_id', controller.UpdateUser)
router.delete('/:user_id', controller.DeleteUser)

module.exports = router
