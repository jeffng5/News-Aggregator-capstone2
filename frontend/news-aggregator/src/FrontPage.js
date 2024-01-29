import React, {useState, useEffect } from 'react'
import {Helpers} from "./helpers"
import ArticleCard from "./ArticleCard"

const FrontPage = () => {

const [data, setData] = useState("")
    
useEffect(()=> {
    getData();
}, []);

async function getData() {
    try{
    let res = await Helpers.getArticles();
    console.log(res)
    
    setData(res.data[0])
console.log(data)
} catch (err) {
    console.log(err)
}
}
getData()
return (
<>
{data}
 <h3>This is Working</h3>
    {[...data].map(c => (
        <ArticleCard
        source = {c.source}
        author = {c.author}
        title = {c.title}
        description = {c.description}
        url = {c.url}
        content = {c.content}
        />))}
    


</>
    )


}

export default FrontPage