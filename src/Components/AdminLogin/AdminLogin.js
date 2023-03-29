import React from 'react'
import { useState } from 'react';

import "./AdminLogin.css"

const AdminLogin = () => {

    const [inputUser, SetInputUser] = useState("");
    const [inputPassword, SetInputPassword] = useState("");


    return (
    <div className='bodyy'>
        <div className='LoginContainer'>
            <input
            className='inputLogIn' 
            placeholder='Username'
            onChange={(e) => SetInputUser(e.target.value)}
            value={inputUser}>

            </input>
            
            <input 
            className='inputLogIn'
            placeholder='Password'
            onChange={(e) => SetInputPassword(e.target.value)}
            value={inputPassword}>
                
            </input>

            <button className='buttonLogin'>Log In</button>
        </div>
    </div>
  )
}

export default AdminLogin