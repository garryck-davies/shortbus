import React, { Component } from 'react'
import axios from 'axios';

export default class Womens extends Component {
  constructor(props) {
    super(props);

    this.state = {
      products: []
    }
  }


  async componentDidMount() {
   let res = await axios.get('/api/womens')
    console.log(res.data)
    this.setState({products: res.data})
    console.log(this.state.products)
  }

  addToCart(product_id) {
    axios.post('/api/addToCart', {
      product_id
    })
  }
  render() {
    return (
      <div className="product-container">
        <div className="product-list">
          {this.state.products.map((product, i) => {
            let { product_id } = product
            return (
              <div className="individual-products" key={i}>
                <img className="product-img" src={product.product_img} alt='img' />
                <p id="product-name">{product.product_name}</p>
                <p id="price">{product.price}</p>
                <button onClick={ () => this.addToCart(product_id)}>Add To Cart</button>
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}

