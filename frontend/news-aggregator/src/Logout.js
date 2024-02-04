import React from 'react'
import "./App.css"
import { Link } from 'react-router-dom'

const Logout = () => {
    const username = localStorage.getItem('username')

    async function logOutUser() {
        const result = localStorage.removeItem('username')
    } 

    setTimeout(logOutUser, 2000)

    return (
        <>
        <h2>Thanks for Visiting! <p className='username'>{username}</p></h2>
        
        <h2><Link to = '/'>Sign In at Homepage</Link></h2>
        </>
    
    )

}


export default Logout