import React from 'react'
import "./Header.css"

const Header = (props) => {
    const  title  = props.title
    const register = props.giris

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
                    <a href='#'></a>
                    <a href='#'>How It Works</a>
                    <a href='#'>Enterprise</a>
                    <a href='login'>Log In</a>
                    <a className='sign-up' href={props.url}>{title}{register}</a>
                  </div>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header