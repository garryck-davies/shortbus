require('dotenv').config();
const express = require('express');
const massive = require('massive');
const ctrl = require('./controller');
const bodyParser = require('body-parser');

//initialize express app
const app = express();

//destructure from .env
let { CONNECTION_PORT, CONNECTION_STRING } = process.env;

//connect to db
massive(CONNECTION_STRING).then(db => {
    console.log('db connected')
    app.set('db', db)
});

//middleware
app.use(express.json());

//endpoints
app.get('/api/mens', ctrl.mensProducts)
app.get('/api/womens', ctrl.womensProducts)
app.post('/api/addToCart', ctrl.addToCart)
app.post('/api/cart', ctrl.cart)
app.put('/api/editQuantity', ctrl.editQuantity)
app.delete('/api/checkout/:cart_id', ctrl.checkout)
app.delete('/api/removeProduct/:product_id', ctrl.removeProduct)

//listen on port
app.listen(CONNECTION_PORT, () => {
    console.log(`Listening on port: ${CONNECTION_PORT}`)
})