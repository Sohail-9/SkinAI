import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import "../styles/authentication.css"
import axios from 'axios'

export default function Authentication() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginBtn = (e) => {
    axios.post("http://localhost:3001/home/login",{
      Email : email,
      Password : password
    })
    .then(data => console.log(data))
    .error(er => console.log("Error"));



    navigate("/app")
  }

  return (
    <div className='authentication'>
      <div className='login-box'>
        <h3 className='form-title'>Login</h3>
        <form action="" method="post">
          <div className="email" id='form-field'>
            <label htmlFor="email">Email:</label>
            <input type="text" id='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
          </div>
          <div className="password" id='form-field'>
            <label htmlFor="password">Password:</label>
            <input type="password" id='password' value={password} onChange={(e)=>setPassword(e.target.value)} />
          </div>
          <div className='buttons'>
          <button type="reset">Cancel</button>
          <button type="submit" onClick={loginBtn}>Login</button>
          </div>
        </form>
      </div>


    </div>
  )
}
