import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'

const Home = () => {
    const director = () =>{
        window.location ="/product"
    }
  return (
    <div>
       <div><Header/></div> 
       <h1>HOME PAGE</h1>
       <button onClick={ director}>products</button>
        <div><Footer/></div>
   </div>
  )
}

export default Home