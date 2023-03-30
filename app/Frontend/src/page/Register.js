import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "./css/Register.css"

const Register = () => {
  return (
    <>
    <div><Header giris= "Home" url ="/"/></div>
        <div className='register'>
            <div className='container'>
                <div className='screen'>
                    <div className='logo'>
                        <img src='/images/logo.png' alt=""></img>
                    </div>
                    <div className='input'>
                        <input type="text" placeholder='Username' />
                        <input type="text" placeholder='Email' />
                        <input type="text" placeholder='Password' />
                    </div>

                    <div className='login-btn'><button>REGISTER IN NOW</button></div>

                </div>

                   
            </div>
        </div>
    <div><Footer/></div>
    </>
  )
}

export default Register

//background: linear-gradient(90deg, #5D54A4, #7C78B8);		