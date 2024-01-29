import React, {useState} from 'react'
import './Login.css'




const Login = () => {

    const [formData, setFormData] = useState("")

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(formData => ({...formData,[name]: value }))
    }
    
    return (
        <>
        <h1>Please Login</h1>
        <form>
            <div className= "log-in-form">
            <input id= "username" type= "text" name='username'placeholder= "username"
            onChange={handleChange} value={formData.username}></input>
            </div>
            <div className= "log-in-form">
            <input id= "password" type= "text" name= 'password' onChange={handleChange} placeholder= "password" value={formData.password}></input>
            </div>
            <div className= 'log-in-form'>
            <button onClick={handleChange}>Login</button>
            </div>
        </form>
        </>
    )
}


export default Login