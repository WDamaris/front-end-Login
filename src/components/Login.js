import React,{useState} from 'react'
import Axios from 'axios'

function Login() {
  const [yourEmail,setYourEmail]=useState("")
  const[yourPassword,setYourPassword]=useState("")

  function login(){
      let item={yourEmail,yourPassword}
     console.log(item)
     }

  function handleSubmit(e){
     e.preventDefault() 
     }
  return (
    <div className='login'>
    <form onSubmit={handleSubmit}>
    <label className='label-form' htmlFor="email">Email</label>
    <input type="email" value={yourEmail} onChange={(e)=>setYourEmail(e.target.value)} required/>
    <label className='label-form' htmlFor="email">Password</label>
    <input type="password"value={yourPassword} onChange={(e)=>setYourPassword(e.target.value)} required/>
    <button onClick={login}>Login</button>
    </form>
     
    </div> 
  )
}

export default Login