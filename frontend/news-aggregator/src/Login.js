import React, {useState} from 'react'
import './Login.css'
import {Helpers} from "./helpers"
import { useNavigate } from 'react-router-dom'



const Login = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState([])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({...formData,[name]: value }))
    }
    console.log(formData.username)
    async function LoginUser(e) {
        e.preventDefault();
        const res = await Helpers.loginUser(formData.username, formData.password);
        console.log(res)

        navigate('/users')
    }
    
    return (
        <>
        <h1 id='login-welcome'>Please Login</h1>
        <form>
            <div className= "log-in-form">
            <input id= "username" type= "text" name='username'placeholder= "username"
            onChange={handleChange} value={formData.username}></input>
            </div>
            <div className= "log-in-form">
            <input id= "password" type= "text" name= 'password' onChange={handleChange} placeholder= "password" value={formData.password}></input>
            </div>
            <div className= 'log-in-form'>
            <button className='log' onClick={LoginUser}>Log In</button>
            </div>
        </form>
        </>
    )
}


export default Login