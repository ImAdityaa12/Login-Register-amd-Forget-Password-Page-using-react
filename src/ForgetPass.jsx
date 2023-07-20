import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
export const ForgetPass = () => {
    const [email, setEmail] = useState('');

    const [allEmail , setAllEmail] = useState([])
    const navigate = useNavigate()
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { email:email} 
        setAllEmail([...allEmail, newEntry])
        console.log(allEmail)
    }
    const navigateLogin = () => {
        navigate("/")
    }
    const forget = () => {
        navigate("/forget")
    }
  return (
    <div className="App">
            <div className="auth-form-container">
                <h2>Forget Password</h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Type your email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <button type="submit">Forget Password</button>
                </form>
                <button className="link-btn" onClick={() => navigateLogin()}>Click here to Login</button>
            </div>
        </div>
  )
}
