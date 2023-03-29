import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import ProductCart from '../components/ProductCart'

const Product = () => {
    
    
  return (
    <div>
        <div><Header/></div>
        <div><ProductCart/></div>
        <a href='/'>Buna bas</a>
        <div><Footer/></div>
    </div>
  )
}

export default Product