import React,{useState} from 'react'
import Axios from 'axios'

function Login() { 
  const [yourUserName,setYourUserName]=useState("")
  const [yourEmail,setYourEmail]=useState("")
  const[yourPassword,setYourPassword]=useState("")

  // states to show if user is logged in or not
  const[loginStatus,setLoginStatus]=useState("")

  const login=()=>{
    Axios.post("http://localhost:3005/login",{
      userName: yourUserName,
      userEmail: yourEmail,
      userPassword: yourPassword 
    })
    .then((response)=>{
      if(response.data.message){
        setLoginStatus(response.data.message)
      }else{
        setLoginStatus(response.data[0].userName)
      }
    })
   }

  function handleSubmit(e){
     e.preventDefault() 
     }
  return (
    <div className='login'>
    <form onSubmit={handleSubmit}>
    <label className='label-form' htmlFor="name">Name</label>
    <input type="text" value={yourUserName} onChange={(e)=>setYourUserName(e.target.value)} required/>
    <label className='label-form' htmlFor="email">Email</label>
    <input type="email" value={yourEmail} onChange={(e)=>setYourEmail(e.target.value)} required/>
    <label className='label-form' htmlFor="password">Password</label>
    <input type="password"value={yourPassword} onChange={(e)=>setYourPassword(e.target.value)} required/>
    <button onClick={login}>Login</button>
    </form>
     <h1>{loginStatus}</h1>
    </div> 
  )
}

export default Login