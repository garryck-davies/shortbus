import React, { Component } from 'react'
import './Home.css';
import { Link } from 'react-router-dom';
export default class Home extends Component {
  render() {
    return (
      <div className='split-view'>
        <div className="mens-button">
          <Link to ='/mens'>
            <button type="button">
              Men's
            </button>
          </Link>
        </div>
        <div className="womens-button">
        <Link to ='/womens'>
            <button type="button">
              Women's
            </button>
          </Link>
        </div>
      </div>
    )
  }
}
