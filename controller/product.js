const { response } = require('express')

const getProduct =  (req, res = response) => {
    return res.status(200).json({msg: 'Product'})
}

module.exports ={
    getProduct
}