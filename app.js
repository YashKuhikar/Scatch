const express = require('express')
const path = require('path')
const app = express()
const userModel = require('./Models/user-model')
const productModel = require('./Models/product-model')
const ownerModel = require('./Models/owner-model')
const ownerRouter = require('./routes/ownerRouter');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter')

const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');

app.use('/owner', ownerRouter);
app.use('/user', userRouter);
app.use('/product', productRouter)


app.listen(PORT, ()=>{
    console.log(`The server is running at http://127.0.0.1:${PORT}`)
})