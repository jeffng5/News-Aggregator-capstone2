import React, {useState, useEffect} from 'react'
import "./FrontPage.css"
import axios from 'axios'
import ArticleCard from "./ArticleCard"
import ColoredLine from "./ColoredLine"
import useApi from "./hooks/useApi"


let pref = localStorage.getItem('preferences')
let subj = pref.split(",")
let key = subj[0]
console.log(subj)

const FrontPage = () => {

    const [dateTime, setDateTime] = useState(new Date())
    const [data, setData] = useState([])
    const [topic, setTopic] =useState([])
    const [topic1, setTopic1] = useState([])
    const [topic2, setTopic2] = useState([])
    const [topic3, setTopic3] = useState([])
    const date = dateTime.toLocaleDateString();

useEffect (()=> {
    setDateTime(new Date())
    getApi()
}, [])

const getApi = async(url) => {
   
try { 
    const res = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${subj[0]}&pageSize=10&apiKey=e6522b5c205148009c589b3bc68a637d`)
    console.log(res)
    setData(res['data']['articles'])

    let r = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${subj[1]}&pageSize=10&apiKey=e6522b5c205148009c589b3bc68a637d`)
    setTopic(r['data']['articles'])

    let r1 = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${subj[2]}&pageSize=10&apiKey=e6522b5c205148009c589b3bc68a637d`)
    setTopic1(r1['data']['articles'])

    let r2 = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${subj[3]}&pageSize=10&apiKey=e6522b5c205148009c589b3bc68a637d`)
    setTopic2(r2['data']['articles'])

    let r3 = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${subj[4]}&pageSize=10&apiKey=e6522b5c205148009c589b3bc68a637d`)
    setTopic3(r3['data']['articles'])
}
 catch (err) {
     console.log(err)
 }
}


return (
    <>
<h1>Your Front Page News </h1>
<h2>{date}</h2>

<ColoredLine color = "black" />
{data.map(c => (
    <ArticleCard  title = {c.title} 
    url = {c.url}
    description ={c.description}
   urlToImage= {c.urlToImage}

    author = {c.author} />))}

{topic.map(c => (
    <ArticleCard  title = {c.title} 
    url = {c.url}
    description ={c.description}
   urlToImage= {c.urlToImage}

    author = {c.author} />))}

{topic1.map(c => (
    <ArticleCard  title = {c.title} 
    url = {c.url}
    description ={c.description}
   urlToImage= {c.urlToImage}

    author = {c.author} />))} 

{topic2.map(c => (
    <ArticleCard  title = {c.title} 
    url = {c.url}
    description ={c.description}
   urlToImage= {c.urlToImage}

    author = {c.author} />))} 

{topic3.map(c => (
    <ArticleCard  title = {c.title} 
    url = {c.url}
    description ={c.description}
   urlToImage= {c.urlToImage}

    author = {c.author} />))} 
</>
)
        }
    

export default FrontPage