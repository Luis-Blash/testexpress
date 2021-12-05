const { Router } = require('express')
const { getProduct } = require('../controller/product')

const router = Router()

router.get('/', getProduct)

module.exports = router