import React from 'react'
import './App.css'
import Login from "./Login"
import SignUp from "./SignUp"

const Welcome = () => {

    return (
        <>
        <h1>Welcome to <p className= 'news-title'><b>YourFrontPageNews.com</b></p></h1>

        <h2><div><b></b></div>
        <div>presents
            to you curated articles of your news preferences</div> <div>from the <b>top news publications</b></div></h2>
    
   
    <Login />
        <h1>Or</h1>
    <SignUp />
    </>)
}

export default Welcome