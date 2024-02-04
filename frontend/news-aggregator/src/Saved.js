import React, { useState, useEffect } from 'react'
import {Helpers} from "./helpers"
import ArticleCard from "./ArticleCard"

let username = localStorage.getItem('username')

const Saved = () => {

    const [display, setDisplay] = useState([])

useEffect(() =>{
    archiveResults()

}, [])
const archiveResults = async() => {
    try{
    const res = await Helpers.getArticles(username)
    console.log(res)
    setDisplay(res)
    }
    catch (e) {
        console.log(e)
    }
}
console.log(display)

return (

    <h1>THIS IS THE ARCHIVE PAGE</h1>

// {display.map(c =>(<ArticleCard title= {c.title}
//     url = {c.url}
//     description = {c.description}
//     author = {c.author}/> ))
// }
)


}





export default Saved;