import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "./css/Register.css"
const Login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const userLogin = async (email,password) =>{
        
  const response = await fetch('http://localhost:3001/login', {
    method: 'POST',
    
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email:email, password:password }),
    credentials: 'include',
  });

  const data = await response.json({
   
  }).then((data) => {
    console.log(data)
  })

  return data;
    }




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
                        <input value={email} type="text" placeholder='Email' onChange={(event) =>setEmail(event.target.value)} />
                        <input value={password} type="password" placeholder='Password' onChange={(event) => setPassword(event.target.value)} />
                    </div>

                    <div className='login-btn'><button onClick={() =>userLogin(email,password)}>LOGIN NOW</button></div>

                </div>

                   
            </div>
        </div>
    <div><Footer/></div>
    </>
  )
}

export default Login