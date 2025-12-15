const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
    res.send({
        'route' : '/product',
        'status' : 'connected'
    })
})

module.exports = router;