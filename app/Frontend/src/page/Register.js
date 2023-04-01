import React, { useState } from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import "./css/Register.css"

const Register = () => {

    const [email,setEmail] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [loading, setLoading] = useState(false)
    const [isdisabled,setIsDisabled] = useState(false)

    const userRegister = async (email,password,username) =>{
        setLoading(true)
        setIsDisabled(true)
  const response = await fetch('http://localhost:3001/register', {
    method: 'POST',
    
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ email:email, password:password, username:username })
  });

  const data = await response.json({
   
  }).then((data) => {
     if(data.data === "1"){
      setLoading(false)
      setIsDisabled(true)
     }
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
                        <input disabled ={isdisabled} value={username} type="text" placeholder='Username' onChange={(event) =>setUsername(event.target.value)} />
                        <input disabled ={isdisabled} value={email} type="text" placeholder='Email' onChange={(event) =>setEmail(event.target.value)}/>
                        <input disabled ={isdisabled} value={password} type="password" placeholder='Password' onChange={(event) =>setPassword(event.target.value)}/>

                    </div>

                    <div className='login-btn'><button disabled ={isdisabled} onClick={() => userRegister(email,password,username)}>REGISTER IN NOW</button></div>
                    {loading && <div>Loading...</div>}
                </div>

                   
            </div>
        </div>
    <div><Footer/></div>
    </>
  )
}

export default Register

//background: linear-gradient(90deg, #5D54A4, #7C78B8);		