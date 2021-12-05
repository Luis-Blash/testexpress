const { Router } = require('express')
const { getUser, postUser } = require('../controller/user')
const router = Router()

router.get('/', getUser)
router.post('/', postUser)


module.exports = router