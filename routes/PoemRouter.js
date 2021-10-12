const router = require('express').Router()
const controller = require('../controllers/PoemController')

router.post('/', controller.CreatePoem)
router.get('/', controller.GetPoems)
router.get('/user/:user_id', controller.GetPoemsByUser)
router.put('/:poem_id', controller.UpdatePoem)
router.delete('/:poem_id', controller.DeletePoem)

module.exports = router
