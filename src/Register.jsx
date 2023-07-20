import React, { useState } from "react";
import "./styles.css"
import { useNavigate } from "react-router-dom";
export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const navigate = useNavigate()
    const [allData , setAllData] = useState([])
    const handleSubmit = (e) => {
        e.preventDefault();
        const newEntry = { fullname: name, email:email, password:pass} 
        setAllData([...allData, newEntry])
        console.log(allData)
        console.log(email);
    }
    const loginNavigate = () => {
        navigate("/")
    }
    return (
        <div className="App">
            <div className="auth-form-container">
                <h2>Register</h2>
            <form className="register-form" onSubmit={handleSubmit}>
                <label htmlFor="name">Full name</label>
                <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Register</button>
            </form>
            <button className="link-btn" onClick={()=> loginNavigate()}>Already have an account? Login here.</button>
        </div>
    </div>
    )
}