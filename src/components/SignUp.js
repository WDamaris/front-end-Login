import React,{useState} from 'react'
import Axios from 'axios'
function SignUp(){
  // 3 states to get the Registration input field values 
  const[name,setName]=useState("")
  const [password,setPassword]=useState("")
  const [email,setEmail]=useState("")
  
 const register=() =>{
  Axios.post("http://localhost:3005/register", {
    userName: name,
    userEmail: email,
    UserPassword: password,
  }).then((response)=>{
    console.log(response)   
  })
 }

 function handleSubmit(e){
  e.preventDefault() 
  // const url=""
  // const [data,setData]=useState({
  //   name: "",
  //   email: "",
  //   password: ""
  // })
 }
  return (
    <div className='Register'>
      <form onSubmit={handleSubmit}>  
          <div className='inputs' >
          <label className="label-form" htmlFor='name'>Name</label>
          <input type="text" value={name} onChange={(e)=>setName(e.target.value)} required/>
          <label className="label-form" htmlFor='email'>Email</label>
          <input type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
          <label className="label-form" htmlFor='password'> Password</label>
          <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)}required/>
          <button onClick={register}>Register</button>
          </div> 
      </form>
     
   </div>
  )
}
export default SignUp;
       
         
      
   