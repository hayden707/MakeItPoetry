const router = require('express').Router()
const controller = require('../controllers/PoemController')
// const middleware = require('../middleware')

router.post('/', controller.CreatePoem)
router.get('/', controller.GetPoems)
router.get(
  '/user/:user_id',
  // middleware.stripToken,
  // middleware.verifyToken,
  controller.GetPoemsByUser
)
router.put('/:poem_id', controller.UpdatePoem)
router.delete('/:poem_id', controller.DeletePoem)
router.get('/:poem_id', controller.GetPoemById)

module.exports = router
