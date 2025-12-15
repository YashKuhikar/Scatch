const express = require('express')
const router = express.Router();
const ownerModel = require('../Models/owner-model')

if (process.env.NODE_ENV === "development"){
    router.post('/create', async(req, res)=>{
        let {fullname, email, password} = req.body
        let owner = await ownerModel.find();
        if(owner.length > 0){
            return res.status(503).send('You do not have the permission to create new owner')
        }
        
        let createdOwner = await ownerModel.create({
            fullname,
            email,
            password
        })

        res.status(201).send(createdOwner)

    })
}

console.log(process.env.NODE_ENV)

router.get('/', (req, res)=>{
    res.send('Hey this is ownerRouter')
})

module.exports = router;