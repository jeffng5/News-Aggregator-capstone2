import React, {useState, useEffect } from 'react'
import {Helpers} from "./helpers"
import "./Login.css"
import ArticleCard from "./ArticleCard"

const FrontPage = () => {

const [data, setData] = useState("")
    
useEffect(()=> {
    getData();
}, []);

async function getData() {

    let res = await Helpers.getArticles();
    console.log(res)
    
    setData(res)
console.log(res.data[0])}
// } catch (err) {
//     console.log(err)
// }


console.log(data)
return (
<body className='newspaper'>
{data}
 <h3 id='font'>This is Working</h3>
    {[...data].map(c => (
        <ArticleCard
        source = {c.source}
        author = {c.author}
        title = {c.title}
        description = {c.description}
        url = {c.url}
        content = {c.content}
        />))}
    
<h4 id='font'>THIS IS STILL WORKING</h4>

</body>
)
    }

export default FrontPage