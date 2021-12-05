const { response } = require('express')

const getUser =  (req, res = response) => {
    return res.status(200).json({msg: 'User'})
}

module.exports ={
    getUser
}