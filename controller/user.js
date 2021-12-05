const { response } = require('express')

const getUser =  (req, res = response) => {
    const user = [
        {user: 'luis1'},
        {user: 'luis2'},
        {user: 'luis3'}
    ]
    return res.status(200).json(user)
}


const postUser =  (req, res = response) => {
    const {name} = req.body
    if(!name){
        return res.status(400).json({msg: 'name missing'})
    } 
    return res.status(200).json({id: 'miid', name})
}

module.exports ={
    getUser, 
    postUser
}