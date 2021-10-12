const router = require('express').Router()
const controller = require('../controllers/TextController')

router.post('/', controller.CreateText)
router.get('/', controller.GetTexts)
router.put('/:source_id', controller.UpdateText)
router.delete('/:source_id', controller.DeleteText)

router.get('/user/:user_id', controller.GetTextsByUser)

module.exports = router
