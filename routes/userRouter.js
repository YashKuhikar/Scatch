const express = require('express')
const router = express.Router();

router.get('/', (req, res)=>{
    res.send({
        'route' : '/user',
        'status' : 'connected',
        'message' : 'Hey welcome User'
    })
})

module.exports = router;