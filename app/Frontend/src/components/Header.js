import React from 'react'
import "./Header.css"

const Header = () => {
  
  return (
    <header class="header">
        <div className='user-menu'>
            <div className='container'>
                <div className='header-left'>
                    <div className='logo'>
                      <a href='/'><img src='/images/logo.png' alt=""/></a>
                       
                    </div>
                   
                </div>
                <div className='header-right'>
                  <div className='buttons'>
                    <a href='#'>Projects</a>
                    <a href='#'>How It Works</a>
                    <a href='#'>Enterprise</a>
                    <a href='login'>Log In</a>
                    <a className='sign-up' href='register'>Sign Up</a>
                  </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header