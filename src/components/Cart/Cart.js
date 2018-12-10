import React, { Component } from 'react'
import axios from 'axios';
export default class Cart extends Component {

  state = {
    products: [],
    quantity: 1
  }

  async componentDidMount() {
    let res = await axios.post('/api/cart')
    console.log(res.data)
    this.setState({products: res.data})
    console.log(this.state.products)
  }

  removeProduct(product_id) {
    axios.delete(`/api/removeProduct/${product_id}`).then((res) => {
      console.log(res.data)
      this.setState({products: res.data})
    })
  }

  decreaseQuantity() {
    axios.put('/api/editQuantity').then((res) => {
      console.log(res.data)
      this.setState({quantity: this.state.quantity -1})
    })
  }

  increaseQuantity() {
    axios.put('/api/editQuantity').then((res) => {
      console.log(res.data)
      this.setState({quantity: this.state.quantity +1})
    })
  }

  checkout(cart_id) {
    axios.delete(`/api/checkout/${cart_id}`).then((res) => {
      console.log(res.data)
      this.setState({products: res.data})
    })
  }
  render() {
    return (
      <div className="product-container">
        <button onClick={() => this.checkout()}>Checkout</button>
        <div className="product-container">
        <div className="product-list">
          {this.state.products.map((product, i) => {
            let { product_id } = product
            return (
              <div className="individual-products" key={i}>
                <img className="product-img" src={product.product_img} alt='img' />
                <p id="product-name">{product.product_name}</p>
                <p id="price">{product.price}</p>
                <button onClick={ () => this.removeProduct(product_id)}>Remove From Cart</button>
                  <div id="quantity">
                    <div className='counter'>{this.state.quantity}</div>
                    <button onClick={() => this.decreaseQuantity()}>-</button>
                    <button onClick={() => this.increaseQuantity()}>+</button>
                  </div>
              </div>
            )
          })}
        </div>
                  <div id="checkout">
                    <button onClick={() => this.checkout()}>Checkout</button>
                  </div>
      </div>
      </div>
    )
  }
}
