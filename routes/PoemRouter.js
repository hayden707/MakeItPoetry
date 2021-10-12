const router = require('express').Router()
const controller = require('../controllers/PoemController')

router.post('/', controller.CreatePoem)
router.get('/', controller.GetPoems)

module.exports = router
