import React from 'react'
import "./FrontPage.css"
import Archive from "./Archive"
import ColoredLineThin from "./ColoredLineThin"
let username = localStorage.getItem('username')

const ArticleCard = ({title, description, url, author, urlToImage}) => {
if (description)

    return (
    <>
    <p>
    <div className='article'>
    <p><img className = 'photograph' src={urlToImage} alt = 'news'/></p>
    <h2 className='headline'><span><a href={url} target="_blank">{title}<h5>{description}</h5></a></span></h2>
    <Archive username= {username} url={url} title={title} description={description} author={author} />
    <div className='author'><h4> by: {author} </h4></div>
    </div>
    </p>
    <ColoredLineThin color = "gray" />  
    </>
)

}
    


export default ArticleCard;