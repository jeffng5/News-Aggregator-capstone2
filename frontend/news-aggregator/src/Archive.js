import React, { useState } from 'react'
import './FrontPage.css'
import {Helpers} from "./helpers"
import myImage from './penfeather.png'




const Archive = ({username, url, title, description, author}) =>{

    const [state, setState] = useState(null)

    const handleArchive = async() => {
        
        try {

            const res = await Helpers.saveArticle(username, url, title, description, author)
            setState(res)
        }
        catch (e){
            console.log(e)
        }
    }
console.log(state)
if (state) {
    return (
        <button className='archived'><img src = {myImage}></img>Archived</button>
    )
}
if (!state){
return (
    <>
    <button className='archive' onClick={handleArchive}><img src = {myImage}></img>Archive</button>
 
    </>
)

}
}



export default Archive