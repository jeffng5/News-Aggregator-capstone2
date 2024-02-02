import React, {useState, useEffect} from 'react'
import "./FrontPage.css"
import axios from 'axios'
import ArticleCard from "./ArticleCard"
import ColoredLine from "./ColoredLine"
import ColoredLineThin from "./ColoredLineThin"
import Archive from "./Archive"

const FrontPage = () => {

    const [dateTime, setDateTime] = useState(new Date())
    const [allData, setAllData] = useState([])
    const date = dateTime.toLocaleDateString();

useEffect (()=> {
    setDateTime(new Date())
}, [])

const getData = async() => {
try { 
    const res = await axios.get("https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=9e27e511f89b442e8a6dafcc72fb6e3c")
    console.log(res)
    
    let url = res['data']['articles'][0]['url']
  
    setAllData(res['data']['articles'])

    return res}
 catch (err) {
     console.log(err)
 }
}
getData()


return (
    <body className='demo'>
<h1>Your Front Page News </h1>
<h2>{date}</h2>

<ColoredLine color = "black" />
{allData.map(c => (
    <ArticleCard  title = {c.title} 
    url = {c.url}
    description ={c.description}
   urlImage= {c.urlImage}
    author = {c.author} />))}
<Archive />
<ColoredLineThin color = "gray" />  


</body>
)
        }
    

export default FrontPage