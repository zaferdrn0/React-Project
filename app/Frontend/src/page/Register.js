import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "./css/Register.css"

const Register = () => {

    const [email,setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    const userRegister = async (email,password,username) =>{
        console.log(email)
  const response = await fetch('http://localhost:3001/register', {
    method: 'POST',
    
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email:email, password:password, username:username })
  });

  const data = await response.json();

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
                        <input value={username} type="text" placeholder='Username' onChange={(event) =>setUsername(event.target.value)} />
                        <input value={email} type="text" placeholder='Email' onChange={(event) =>setEmail(event.target.value)}/>
                        <input value={password} type="text" placeholder='Password' onChange={(event) =>setPassword(event.target.value)}/>
                    </div>

                    <div className='login-btn'><button onClick={() => userRegister(email,password,username)}>REGISTER IN NOW</button></div>

                </div>

                   
            </div>
        </div>
    <div><Footer/></div>
    </>
  )
}

export default Register

//background: linear-gradient(90deg, #5D54A4, #7C78B8);		