require('dotenv').config();


module.exports = {

    mensProducts(req, res) {
        let db = req.app.get('db');
        console.log('1')
        db.select_mens().then(products => {
            res.status(200).send(products)
            console.log('2')
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },

    womensProducts(req, res) {
        let db = req.app.get('db');
        console.log('1')
        db.select_womens().then(products => {
            res.status(200).send(products)
            console.log('2')
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },



    addToCart(req, res) {
        let db = req.app.get('db');
        console.log('1')
        db.insert_cart([req.body.product_id, req.body.quantity]).then(products => {
            res.status(200).send(products)
            console.log('2')
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },

    cart(req, res) {
        let db = req.app.get('db');
        console.log('1')
        db.select_cart().then(products => {
            res.status(200).send(products)
            console.log('2')
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },

    removeProduct(req, res) {
        let db = req.app.get('db');
        console.log('1')
        db.delete_product([req.params.product_id]).then(products => {
            console.log('1')
            console.log(products)
            res.status(200).send(products)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },

    editQuantity(req, res){
        let db = req.app.get('db');
        console.log(req.body)
        db.edit_quantity([req.body.quantity]).then(products => {
            res.status(200).send(products)
            console.log('2')
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    },
    
    checkout(req, res) {
        let db = req.app.get('db');
        db.delete_cart([req.params.cart_id]).then(cart => {
            console.log(req.params)
            res.status(200).send(cart)
        }).catch(err => {
            console.log(err);
            res.status(500).send(err)
        })
    }
}